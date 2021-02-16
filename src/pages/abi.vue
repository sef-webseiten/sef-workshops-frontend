<template>
  <Layout>

    <full-width-section class="mb-20" without-border>

      <div class="flex flex-row items-center w-full">

        <div class="w-1/2 bg-gray-50 text-right p-20">

          <h1 class="text-5xl font-bold leading-tight">Sicher <br/> durch's <br/> ABI</h1>

          <button class="primary-button w-fit mt-6"><span class="px-4">Kurs finden</span></button>

        </div>

        <div class="relative w-1/2 h-96">
          <g-image src="~/assets/img/pexels-fauxels-3184360.jpg" width="1920"
                   class="rounded-l-2xl object-cover w-full h-full overflow-hidden"/>
          <div class="bg-white absolute bottom-0 left-0 m-10 px-6 py-3 rounded-full font-bold">
            Nur 39.90 EURO
            <div class="w-full h-px bg-primary"/>
          </div>
        </div>

      </div>

    </full-width-section>

    <full-width-section class="mb-20 text-center bg-light bg-opacity-10">

      <h2 class="h1 my-10">Der perfekte Abi-Lernplan</h2>
      <div class="h2 mb-10" style="grid-template-columns: 30% 5% 30% 5% 30%">
        <span>Wiederholen</span>
        <span class="mx-6">+</span>
        <span>Üben</span>
        <span class="mx-6">+</span>
        <span>Fragen</span>
      </div>

    </full-width-section>

    <div class="max-w-sm px-12 border-l border-r border-text-gray mx-auto mb-20 p-6">
      <h2 class="h1 text-center mb-6">
        Mit einem
        <span class="block flex justify-between my-2">
          <span>T</span>
          <span>R</span>
          <span>A</span>
          <span>I</span>
          <span>N</span>
          <span>E</span>
          <span>R</span>
        </span>
        an deiner Seite
        <span class="block flex justify-between my-2">
          <span>S</span>
          <span>O</span>
          <span>R</span>
          <span>G</span>
          <span>L</span>
          <span>O</span>
          <span>S</span>
        </span>
        ins Abi starten
      </h2>
      <button class="primary-button w-full">Kurs finden</button>
    </div>


    <!-- main usps -->
    <full-width-section class="bg-gray-100 mb-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 mb-6">

        <icon-section :icon="['fas', 'user-clock']" title="3 Tage" class="text-text-gray" icon-primary>
          In nur drei Tagen wiederholst du in deiner Kleingruppe die die Inhalte für das Abitur in NRW.
          Dabei kann der Kursgeber die Inhalte natürlich ganz auf die Bedürfnisse der Teilnehmer anpassen.
        </icon-section>

        <icon-section :icon="['fas', 'users']" title="Kleine Gruppe" class="text-text-gray" icon-primary>
          Die Gruppen werden im Normalfall eine Größe zwischen 10 und 12 Teilnehmern haben. Damit ist eine
          gutes Arbeitsatmosphäre und somit ein Lernerfolg garantiert.
        </icon-section>

        <icon-section :icon="['fas', 'book-open']" title="Alle Themen" class="text-text-gray" icon-primary>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem consectetur dolore, doloremque
          excepturi id laborum libero maiores minima minus neque.
        </icon-section>

      </div>
    </full-width-section>

    <newsletter-signup-section class="mb-20" title="Melde dich jetzt zu unserem Newsletter an uns sichere dir einen Kurs"/>

    <full-width-section class="bg-gray-100 mb-10">
      <h2 class="h2 text-center mb-8">Lehrer werden</h2>
      <div class="max-w-4xl mx-auto grid grid-cols-2 gap-6">

        <div class="w-fit mx-auto">
          <number-paragraph v-for="(step, index) in lehrerSteps" :key="index" :number="index + 1" class="mb-4 text-xl mx-4">{{ step }}</number-paragraph>
        </div>

        <div class="h-full flex flex-col justify-center">
          <p class="mb-4">
            Teile dein Wissen und verhilf den Abiturienten zum sorglosen Abitur als coolen Nebenjob.
          </p>
          <p class="mb-4">
            Mit unserer 3-Schritt Bewerbungsphase kannst du dich schnell als Kursgeber für Abi-Kurse bewerben.
          </p>
          <button class="primary-button w-full mt-2">Jetzt Bewerben</button>
        </div>
      </div>
    </full-width-section>


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
    title: "Neue Möglichkeiten Neues zu lernen",
  },
};
</script>
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