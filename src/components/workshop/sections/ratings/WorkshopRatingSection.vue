<template>
  <div>
    <div class="p-6 md:p-10">
      <h2 class="h3">
        Bewertungen
        <span class="inline-block md:float-right text-xl">
          <Stars :value="workshop.averageRating" size="lg"/>
        </span>
      </h2>
    </div>

    <WorkshopCreateRatingSection v-show="writingRating" :workshop="workshop"
                                 class="mx-4 md:mx-6 rounded shadow-xl p-6 mb-6 md:mb-10" @finish="writingRating = false"/>

    <!-- individual ratings -->
    <div v-for="rating in workshop.ratings"
         class="mx-4 md:mx-6 rounded shadow-xl p-6 mb-6 last:mb-0">

      <!-- put user and stars next to each other on desktop -->
      <div :class="{'mb-6' : rating.text}" class="md:flex justify-between items-center">
        <div class="flex flex-row items-center justify-start mb-6 md:mb-0">
          <img :src="rating.author.profilePicture || '/assets/img/user.png'" alt="Profilbild" class="h-16 w-16 mr-6 rounded-full"/>
          <p class="font-bold">{{ rating.author.firstName }}</p>
        </div>

        <!-- box with stars -->
        <div>
          <div class="w-full flex flex-row justify-between items-center">
            <span>Kurs</span>
            <Stars :value="rating.workshopRating.rating" class="inline-block ml-4"/>
          </div>

          <div class="w-full flex flex-row justify-between items-center mb-6 md:mb-0">
            <span>Kursleiter</span>
            <Stars :value="rating.organizerRating.rating" class="inline-block ml-4"/>
          </div>
        </div>

      </div>

      <p>{{ rating.text }}</p>
    </div>
  </div>
</template>
<script>
import Stars from "../../../gui-elements/Stars";
import WorkshopCreateRatingSection from "./WorkshopCreateRatingSection";

export default {
  components: { WorkshopCreateRatingSection, Stars },
  props: ["workshop"],
  data() {
    return {
      writingRating: true
    }
  }
}
</script>