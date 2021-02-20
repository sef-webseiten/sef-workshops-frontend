<template>
  <form @submit.prevent="submit">

    <div v-show="state !== 2">
      <h3 class="h4 mb-6">Bewerte den Kurs</h3>

      <p class="font-bold">Der Kursleiter...</p>
      <div class="pl-6">
        <RatingSection v-model="form.organizerRating.friendly" class="mt-3">
          verhält sich immer freundlich und höflich gegenüber den Teilnehmern.
        </RatingSection>

        <RatingSection v-model="form.organizerRating.reliable" class="mt-3">
          ist zuverlässig und pünktlich.
        </RatingSection>

        <RatingSection v-model="form.organizerRating.knowledge" class="mt-3">
          beherrscht das Thema und kann es gut vermitteln.
        </RatingSection>

        <RatingSection v-model="form.organizerRating.patience" class="mt-3">
          ist immer geduldig bei Fragen oder Schwierigkeiten.
        </RatingSection>

        <RatingSection v-model="form.organizerRating.rating" type="stars" class="mt-3">
          bekommt die Bewertung:
        </RatingSection>
      </div>

      <p class="font-bold mt-8">Der Kurs...</p>
      <div class="pl-6">
        <RatingSection v-model="form.workshopRating.recommendable" class="mt-3">
          ist grundsätzlich weiterzuempfehlen.
        </RatingSection>

        <RatingSection v-model="form.workshopRating.content" class="mt-3">
          enthält eine angemessene Inhalts-Dichte.
        </RatingSection>

        <RatingSection v-model="form.workshopRating.entertaining" class="mt-3">
          ist nie langweilig.
        </RatingSection>

        <RatingSection v-model="form.workshopRating.rating" type="stars" class="mt-3">
          bekommt die Bewertung:
        </RatingSection>
      </div>

      <input-template label="Deine Meinung ist gefragt. Wirklich!" type="textarea" v-model="form.text"/>
      <input-template :label="`Was könnte ${workshop.organizer.firstName} verbessern?`" type="textarea" v-model="form.improveable"/>
    </div>

    <!-- button with loading indicator -->
    <button class="primary-button w-full" :disabled="state === 1 || state === 2" :class="{'mt-4' : state !== 2}">
      <span v-if="state === 0">Abschicken</span>
      <Spinner v-else-if="state === 1" class="mx-auto"/>
      <span v-else-if="state === 2">Erfolgreich abgeschickt, Kachel schließt sich</span>
      <span v-else-if="state === 3">Erneut versuchen</span>
    </button>

  </form>
</template>
<script>
import InputTemplate from "../../../gui-elements/InputTemplate";
import Spinner from "../../../gui-elements/Spinner";
import SliderInput from "./components/SliderInput";
import RatingSection from "./components/RatingSection";
import gql from "graphql-tag";

export default {
  props: ["workshop"],
  data() {
    return {
      state: 0, // 0 = waiting, 1 = saving, 2 = done, 3 = error
      form: {

        organizerRating: {
          friendly: null,
          reliable: null,
          knowledge: null,
          patience: null,
          rating: 0,
        },

        workshopRating: {
          recommendable: null,
          content: null,
          entertaining: null,
          rating: 0
        },

        text: "",
        improveable: ""
      }
    }
  },
  methods: {
    submit() {
      this.state = 1;

      const self = this;

      const mutation = gql`
        mutation ($workshop: ObjectId!, $rating: RatingInput!) {
          addRating(workshop: $workshop, rating: $rating) {
            text
            improveable
            author {firstName}
            organizerRating {friendly reliable knowledge patience rating}
            workshopRating { recommendable content entertaining rating}
          }
        }`;

      this.$backend.request(mutation, {
        workshop: this.workshop._id,
        rating: this.form
      }).then(({ addRating: rating }) => {
        self.state = 2;
        self.workshop.ratings.push(rating)
        setTimeout(() => self.$emit('finish', rating), 1000);
      }).catch(() => self.state = 3);

    }
  },
  components: { RatingSection, SliderInput, InputTemplate, Spinner }
}
</script>