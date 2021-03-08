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
            <button class="abi-button w-fit mt-8 text-xl" @click="scrollTo('newsletter')"><span class="px-6">Platz sichern</span>
            </button>
          </div>
        </div>

        <!-- torn sheet image -->
        <g-image alt="Zerrissenes Blatt" class="hidden md:block tw-auto -mr-10 h-full z-10" draggable="false"
                 height="400" src="~/assets/img/kante.png"/>
        <g-image alt="Zerrissenes Blatt" class="w-full md:hidden mt-0 -mb-8 z-10" draggable="false" height="400"
                 src="~/assets/img/kante-gedreht.png"/>

        <!-- header image -->
        <div class="relative w-full md:w-1/2 md:h-full">
          <g-image alt="Headerbild" class="object-cover w-full max-h-96 md:max-h-full md:h-full overflow-hidden"
                   draggable="false" src="~/assets/img/abi/header.jpg"
                   style="transform: rotateY(180deg)"
                   width="960"/>

          <!-- floating price tag -->
          <div
              class="absolute bottom-0 left-0 m-4 mb-0 md:m-10 md:ml-16 px-10 pt-8 pb-10 text-3xl font-bold bg-center bg-contain bg-no-repeat pinselstrich select-none">
            nur 39<span class="text-2xl">,-</span><span class="inline-block -ml-4 text-sm align-top">90</span> €
          </div>
        </div>
      </div>
    </full-width-section>

    <full-width-section class="bg-abi-background">
      <div class="max-w-4xl my-10 mx-auto">
        <p class="h2 mb-4">Das Abitur steht vor der Tür</p>

        <p class="mb-4">Bist du schon bereit?</p>

        <p class="mb-4">
          Du steckst schon mitten im Endspurt deiner Schullaufbahn. Die nächsten Wochen hast du nochmal Zeit
          alles zu wiederholen, damit du pünktlich zur Abi-Prüfung den gesamten Stoff der letzten zwei Jahre drauf hast.
        </p>

        <p class="mb-4">
          Und jeder kennt's: Die Prüfung rückt näher und es gibt noch ein paar Themen, die dir Bauchschmerzen machen.
        </p>

        <p>
          Extra für den Abiturjahrgang in NRW dieses Jahr haben wir die Abi-Aktion ins Leben gerufen. Die beste
          Möglichkeit die Lücken zu Füllen und Inhalte zu wiederholen bis alles sitzt.
        </p>
      </div>
    </full-width-section>

    <full-width-section class="text-center">
      <div class="md:grid my-10" style="grid-template-columns: 40% 60%">
        <TrainerImage class="mb-10 md:mb-0"/>

        <div class="flex flex-col justify-center">
          <p class="h1">Mit unseren <span class="text-abi">ausgewählten</span></p>
          <p class="text-7xl font-bold text-text-gray tracking-wide my-5">Trainern</p>
          <p class="h1"><span class="text-abi">sorglos</span> durch's Abi</p>

          <p class="max-w-2xl mx-auto text-left mt-10">
            Drei ganze Tage Aufgaben üben, Themen wiederholen und am aller wichtigsten: Alle deine Fragen stellen.
            Nutze die letzte Chance: die perfekte Vorbereitung mit der Unterstützung deines Trainers.
          </p>

        </div>

      </div>
    </full-width-section>

    <full-width-section class="bg-abi-background">
      <p class="max-w-4xl mx-auto mt-10">
        Nimm das Finale deiner letzten 12 Jahre nicht auf die leichte Schulter, sondern geh auf Nummer sicher. Mit einem
        Vorbereitungskurs unserer Trainer schläft es sich gleich viel ruhiger. Sogar am Tag vor der Prüfung.
      </p>
      <p class="h2 text-center my-6">Schau dir unsere <span class="text-abi">Kurse</span> an</p>
      <div class="mb-10 mt-10 grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 max-w-4xl mx-auto gap-6 md:gap-8">

        <abi-subject-card bg-class="bg-blue-800" icon="square-root-alt" icon-class="text-blue-700"
                          search="/kurse?s=Abikurs%20Mathe%20LK">
          Mathe LK
        </abi-subject-card>

        <abi-subject-card bg-class="bg-yellow-500" icon="comment" icon-class="text-yellow-400"
                          search="/kurse?s=Abikurs%20Englisch%20LK">
          Englisch LK
        </abi-subject-card>

        <abi-subject-card bg-class="bg-green-600" icon="microscope" icon-class="text-green-500"
                          search="/kurse?s=Abikurs%20Biologie%20LK">
          Biologie LK
        </abi-subject-card>

        <abi-subject-card bg-class="bg-blue-600" icon="square-root-alt" icon-class="text-blue-500"
                          search="/kurse?s=Abikurs%20Mathe%20GK">
          Mathe GK
        </abi-subject-card>

      </div>

      <!-- subject is not listed, request it -->
      <p class="text-center">Ist dein Fach nicht dabei? Schreib uns
        <button class="text-abi" @click="$root.$emit('openContactForm', { subject: `Abikurs anfragen`})">
          hier
        </button>.
      </p>

    </full-width-section>

    <!-- main usps -->
    <full-width-section>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-20 my-10">

        <icon-section :icon="['fas', 'user-clock']" class="text-text-gray" huge icon-color-class="text-abi"
                      title="3 Tage">
          In nur 3 Tagen alles Wichtige für dein Abitur in NRW wiederholen und üben.
        </icon-section>

        <icon-section :icon="['fas', 'users']" class="text-text-gray" huge icon-color-class="text-abi"
                      title="Kleine Gruppe">
          Gruppen aus 10 - 12 Personen ermöglichen eine individuelle Unterstützung durch deinen Trainer.
        </icon-section>

        <icon-section :icon="['fas', 'book-open']" class="text-text-gray" huge icon-color-class="text-abi"
                      title="Individuell">
          Solange bis du alles drauf hast: Keine Frage bleibt offen.
        </icon-section>

      </div>
    </full-width-section>

    <!-- newsletter signup section -->
    <full-width-section id="newsletter" class="bg-abi-background">
      <newsletter-signup-section class="my-10" color-name="abi"
                                 title="Die Plätze sind begrenzt - bleib auf dem Laufenden ">
        <p class="mt-6">
          Anfang März stehen die Termine fest. Trage dich jetzt ein und wir informieren dich, wenn es so weit ist.
          Sichere dir deinen Platz vor allen anderen.
        </p>
        <p class="mt-4">
          Wir können nicht für jeden einen Platz garantieren, also bleib auf dem Laufenden, um nichts zu verpassen.
        </p>
      </newsletter-signup-section>
    </full-width-section>

    <div class="my-16">
      <h2 class="h2 text-center mb-8">Trainer werden</h2>
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- left side with steps -->
        <div class="w-fit mx-auto">
          <number-paragraph v-for="(step, index) in lehrerSteps" :key="index" :number="index + 1"
                            class="mb-4 text-xl mx-4" color-name="abi">
            {{ step }}
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
import { scrollTo } from "../plugins/scroll-to";
import AbiSubjectCard from "../components/gui-elements/AbiSubjectCard";

export default {
  components: {
    AbiSubjectCard,
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
      scrollTo,
      lehrerSteps: ["Bewerben", "Gespräch", "Vorbereitung"]
    }
  },
  metaInfo() {
    const image = require(`!!assets-loader?width=1200!~/assets/img/abi/header.jpg`), imgSrc = 'https://of.courz.de' + image.src;

    return {
      title: "Abikurse 2021",
      description: "Beschreibung",
      meta: [
        {property: 'og:title', content: 'Abikurse 2021'},
        {property: 'og:type', content: 'article'},
        {property: 'og:url', content: 'https://of.courz.de/abi'},
        {property: 'og:description', content: 'Abikurse im Jahr 2021 für das Land NRW'},
        {property: 'og:image', content: imgSrc},
        {property: 'twitter:image:src', content: imgSrc},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:site_name', content: 'of.courz'}
      ]
    }
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