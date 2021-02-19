<template>
  <div>
    <div class="p-6 md:p-10">
      <h2 class="h3">
        Bewertungen
        <div class="inline-block md:float-right">
          <Stars :stars="workshop.averageRating" size="lg"/>
        </div>
      </h2>
    </div>

    <WorkshopCreateRatingSection :workshop="workshop" />

    <!-- individual ratings -->
    <div v-for="rating in workshop.ratings"
         class="mx-4 md:mx-6 rounded shadow-xl p-6">

      <!-- put user and stars next to each other on desktop -->
      <div class="mb-6 md:flex justify-between items-center">
        <div class="flex flex-row items-center justify-start mb-6 md:mb-0">
          <img class="h-16 w-16 mr-6 rounded-full" :src="rating.author.profilePicture" alt="Profilbild"/>
          <p class="font-bold">{{ rating.author.firstName }}</p>
        </div>

        <!-- box with stars -->
        <div>
          <div class="w-full flex flex-row justify-between items-center">
            <span>Kurs</span>
            <Stars :stars="rating.workshopRating.rating" class="inline-block ml-4"/>
          </div>

          <div class="w-full flex flex-row justify-between items-center mb-6 md:mb-0">
            <span>Kursleiter</span>
            <Stars :stars="rating.organizerRating.rating" class="inline-block ml-4"/>
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
  props: ["workshop"]
}
</script>