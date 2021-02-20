<template>
  <Layout>

    <full-width-section class="-mt-6" without-border>

      <div class="flex flex-row items-center w-full h-128">
        <div class="w-1/2 h-full bg-white text-right p-20">
          <div class="w-fit h-full ml-auto flex flex-col items-center justify-center">
            <h1 class="text-8xl leading-tight font-bold font-dancing-script mb-4">Abikurse <span
                class="text-primary">2021</span></h1>
            <p class="text-4xl font-semibold">Einfacher geht's nicht. </p>
            <button class="primary-button w-fit mt-8 text-xl"><span class="px-6">Kurs finden</span></button>
          </div>
        </div>

        <!-- torn sheet image -->
        <g-image src="~/assets/img/kante.png" height="400" class="-mr-10 h-full z-10" draggable="false"/>

        <div class="relative w-1/2 h-full">
          <!-- header image -->
          <g-image src="~/assets/img/abi/header.jpg" width="960"
                   class="object-cover w-full h-full overflow-hidden" style="transform: rotateY(180deg)"
                   draggable="false"/>

          <!-- floating price tag -->
          <div class="absolute bottom-0 left-0 m-10 ml-16 px-10 pt-8 pb-10 text-3xl font-bold bg-center bg-contain bg-no-repeat pinselstrich">
            nur 39<span class="text-2xl">,-</span><span class="inline-block -ml-4 text-sm align-top">90</span> €
          </div>
        </div>
      </div>
    </full-width-section>

    <full-width-section class="mb-10 text-center bg-light-background">
      <div class="md:grid my-10" style="grid-template-columns: 40% 60%">

        <div>
          <g-image src="~/assets/img/abi/frau.jpg" width="800" class=" h-96 w-96 ml-auto rounded-full shadow-2xl"
                   draggable="false"/>
        </div>

        <div class="flex flex-col justify-center">
          <p class="h1">Mit unseren <span class="text-primary">ausgewählten</span></p>
          <p class="text-7xl font-bold text-text-gray tracking-wide my-5">Trainern</p>
          <p class="h1"><span class="text-primary">sorglos</span> durch's Abi</p>
        </div>

      </div>
    </full-width-section>

    <!-- main usps -->
    <full-width-section class="mb-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-20 mt-6 mb-6">

        <icon-section huge :icon="['fas', 'user-clock']" title="3 Tage" class="text-text-gray" icon-primary>
          In nur 3 Tagen alles Wichtige für dein Abitur in NRW wiederholen und üben.
        </icon-section>

        <icon-section huge :icon="['fas', 'users']" title="Kleine Gruppe" class="text-text-gray" icon-primary>
          Gruppen aus 10 - 12 Personen ermöglichen eine individuelle Unterstützung durch deinen Trainer.
        </icon-section>

        <icon-section huge :icon="['fas', 'book-open']" title="Individuell" class="text-text-gray" icon-primary>
          Solange bis du alles drauf hast: Keine Frage bleibt offen.
        </icon-section>

      </div>
    </full-width-section>

    <!-- newsletter signup section -->
    <full-width-section class="bg-light-background">
      <newsletter-signup-section class="my-10" title="Die Plätze sind begrenzt - bleib auf dem Laufenden ">
        <p class="mt-6">
          Anfang März stehen die Termine fest. Trage dich jetzt ein und wir informieren dich, wenn es so weit ist.
          Sichere dir deinen Platz vor allen anderen.
        </p>
        <p class="mt-4">
          Wir können nicht für jeden einen Platz garantieren, also bleib auf dem Laufenden, um nichts zu verpassen.
        </p>
      </newsletter-signup-section>
    </full-width-section>

    <div class="my-10">
      <h2 class="h2 text-center mb-8">Trainer werden</h2>
      <div class="max-w-4xl mx-auto grid grid-cols-2 gap-6">

        <!-- left side with steps -->
        <div class="w-fit mx-auto">
          <number-paragraph v-for="(step, index) in lehrerSteps" :key="index" :number="index + 1"
                            class="mb-4 text-xl mx-4">{{ step }}
          </number-paragraph>
        </div>

        <!-- right side explanation -->
        <div class="h-full flex flex-col justify-center">
          <p class="mb-4">
            Teile dein Wissen und verhilf den Abiturienten zum sorglosen Abitur als coolen Nebenjob.
          </p>
          <p class="mb-4">
            Mit unserer 3-Schritt Bewerbungsphase kannst du dich schnell als Kursgeber für Abikurse bewerben.
          </p>
          <button class="primary-button w-full mt-2"
                  @click="$root.$emit('openContactForm', { subject: `Bewerbung als Trainer für Abikurse`, content: 'Warum bist du als Trainer geeignet?'})">Jetzt
            Bewerben
          </button>
        </div>
      </div>
    </div>

  </Layout>
</template>
<script>
import FullWidthSection from "../components/gui-elements/FullWidthSection";
import IconSection from "../components/gui-elements/IconSection";
import WorkshopCard from "../components/workshop/WorkshopCard";
import NewsletterSignupSection from "../components/landing-page/NewsletterSignupSection";
import NumberParagraph from "../components/gui-elements/NumberParagraph";

export default {
  components: { NumberParagraph, NewsletterSignupSection, IconSection, FullWidthSection, WorkshopCard },
  data() {
    return {
      lehrerSteps: ["Bewerben", "Gespräch", "Vorbereitung"]
    }
  },
  metaInfo: {
    title: "Abikurse 2021",
  },
};
</script>
<style scoped>
.pinselstrich {
  background-image: url("../assets/img/pinselstrich.svg");
}
</style>
<static-query>
query {
workshops: allWorkshops(sortBy: "id", order: ASC) {
edges {
node {
title
subTitle
_id
thumbnail
path
minPrice
nextDate
nextDuration
nextParticipants
}
}
}
}
</static-query>