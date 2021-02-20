<template>
  <Layout>

    <full-width-section class="-mt-6" without-border>
      <div class="flex flex-col md:flex-row items-center w-full md:h-128">

        <!-- left side -->
        <div class="w-full md:w-1/2 md:h-full bg-white text-right p-6 md:p-20">
          <div class="w-full h-full ml-auto flex flex-col items-center justify-center text-center">

            <!-- headline -->
            <h1 class="text-6xl md:text-8xl leading-tight font-bold font-dancing-script mb-4">
              Abikurse <span class="text-abi">2021</span>
            </h1>

            <p class="text-2xl md:text-4xl font-semibold">Einfacher geht's nicht. </p>
            <button class="abi-button w-fit mt-8 text-xl"><span class="px-6">Kurs finden</span></button>
          </div>
        </div>

        <!-- torn sheet image -->
        <g-image src="~/assets/img/kante.png" height="400" class="hidden md:block tw-auto -mr-10 h-full z-10" draggable="false"/>
        <g-image src="~/assets/img/kante-gedreht.png" height="400" class="w-full md:hidden mt-0 -mb-8 z-10" draggable="false"/>

        <!-- header image -->
        <div class="relative w-full md:w-1/2 md:h-full">
          <g-image src="~/assets/img/abi/header.jpg" width="960"
                   class="object-cover w-full max-h-96 md:max-h-full md:h-full overflow-hidden" style="transform: rotateY(180deg)"
                   draggable="false"/>

          <!-- floating price tag -->
          <div
              class="absolute bottom-0 left-0 m-4 mb-0 md:m-10 md:ml-16 px-10 pt-8 pb-10 text-3xl font-bold bg-center bg-contain bg-no-repeat pinselstrich select-none">
            nur 39<span class="text-2xl">,-</span><span class="inline-block -ml-4 text-sm align-top">90</span> €
          </div>
        </div>
      </div>
    </full-width-section>

    <full-width-section class="mb-10 text-center bg-abi-background">
      <div class="md:grid my-10" style="grid-template-columns: 40% 60%">
        <TrainerImage/>

        <div class="flex flex-col justify-center">
          <p class="h1">Mit unseren <span class="text-abi">ausgewählten</span></p>
          <p class="text-7xl font-bold text-text-gray tracking-wide my-5">Trainern</p>
          <p class="h1"><span class="text-abi">sorglos</span> durch's Abi</p>
        </div>

      </div>
    </full-width-section>

    <!-- main usps -->
    <full-width-section class="mb-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-20 mt-6 mb-6">

        <icon-section huge :icon="['fas', 'user-clock']" title="3 Tage" class="text-text-gray" icon-color-class="text-abi">
          In nur 3 Tagen alles Wichtige für dein Abitur in NRW wiederholen und üben.
        </icon-section>

        <icon-section huge :icon="['fas', 'users']" title="Kleine Gruppe" class="text-text-gray" icon-color-class="text-abi">
          Gruppen aus 10 - 12 Personen ermöglichen eine individuelle Unterstützung durch deinen Trainer.
        </icon-section>

        <icon-section huge :icon="['fas', 'book-open']" title="Individuell" class="text-text-gray" icon-color-class="text-abi">
          Solange bis du alles drauf hast: Keine Frage bleibt offen.
        </icon-section>

      </div>
    </full-width-section>

    <!-- newsletter signup section -->
    <full-width-section class="bg-abi-background">
      <newsletter-signup-section class="my-10" title="Die Plätze sind begrenzt - bleib auf dem Laufenden " color-name="abi">
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
          <button class="abi-button w-full mt-2"
                  @click="$root.$emit('openContactForm', { subject: `Bewerbung als Trainer für Abikurse`, content: 'Warum bist du als Trainer geeignet?'})">
            Jetzt
            Bewerben
          </button>
        </div>
      </div>
    </div>

    <FloatingInstagram/>
  </Layout>
</template>
<script>
import FullWidthSection from "../components/gui-elements/FullWidthSection";
import IconSection from "../components/gui-elements/IconSection";
import WorkshopCard from "../components/workshop/WorkshopCard";
import NewsletterSignupSection from "../components/landing-page/NewsletterSignupSection";
import NumberParagraph from "../components/gui-elements/NumberParagraph";
import FloatingInstagram from "../components/gui-elements/FloatingInstagram";
import TrainerImage from "../components/landing-page/TrainerImage";

export default {
  components: {
    TrainerImage,
    NumberParagraph,
    NewsletterSignupSection,
    IconSection,
    FullWidthSection,
    WorkshopCard,
    FloatingInstagram
  },
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