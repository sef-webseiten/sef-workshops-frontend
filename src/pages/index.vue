<template>
  <Layout>

    <!-- mobile header image -->
    <full-width-section class="-mt-6 md:hidden h-36">
      <template v-slot:fullwidth>
        <g-image class="object-cover w-full h-48" src="~/assets/img/pexels-fauxels-3182759.jpg" style="transform: rotateY(180deg)"
                 width="1920" alt="Header Image"/>
      </template>
    </full-width-section>
    <full-width-section class="md:-mt-6">

      <div class="flex flex-col md:flex-row justify-center items-center md:mt-72 ">
        <!-- header card -->
        <div class="md:w-1/2 h-full p-4 md:p-8 lg:p-10 mb-2 shadow-2xl rounded-sm bg-white">
          <h1 class="h0 mb-6">
            <span class="font-medium leading-snug">Live-Kurse, Seminare und Workshops...</span>
          </h1>
          <h2 class="h2">
          <span class="font-medium"><fa class="mr-4" icon="angle-double-right" size="sm"/>
            <span class="relative z-10">Alles an einem Ort<span
                class="block bg-light bg-opacity-20 absolute bottom-0 left-0 -mx-1 h-4 -z-10"
                style="width: calc(100% + .5rem);"/></span>
          </span>
          </h2>
          <button class="mx-auto md:mx-0 block primary-button mt-8">
            <span class="px-8" @click="scrollTo('kurse-finden')">Kurs finden</span>
          </button>
        </div>

        <!-- abi ad -->
        <g-link class="block flex-grow bg-primary bg-opacity-10 rounded-sm md:bg-transparent p-4" to="/abi/">
          <g-image class="mx-auto" src="~/assets/img/abi/badge.png" width="400" alt="Abikurs Aktion"/>
        </g-link>
      </div>


      <!-- deskop header image -->
      <template v-slot:fullwidth>
        <g-image class="hidden md:block object-cover w-full h-full" src="~/assets/img/pexels-fauxels-3182759.jpg"
                 style="transform: rotateY(180deg)"
                 width="1920"/>
      </template>
    </full-width-section>

    <full-width-section class="text-center bg-primary-background">
      <div class="md:grid my-10" style="grid-template-columns: 40% 60%">
        <TrainerImage class="mb-10 md:mb-0"/>

        <div class="flex flex-col justify-center">
          <p class="h1">Zu <span class="text-primary">neuen Skills</span> mit</p>
          <p class="text-7xl font-bold text-text-gray tracking-wide my-5">Trainern</p>
          <p class="h1">an <span class="text-primary">deiner</span> Seite</p>
        </div>

      </div>
    </full-width-section>

    <div id="kurse-finden" class="py-16">
      <h2 class="h2 text-center mb-6">Kurse finden</h2>
      <p class="h4 text-center mb-10">Mach dir einen Eindruck von der Plattform</p>
      <div class="max-w-5xl mx-auto block grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <WorkshopCard
            v-for="workshop in workshops.slice(0,3)"
            :key="workshop._id"
            :workshop="workshop"
        />
      </div>
    </div>

    <!-- main usps -->
    <full-width-section class="bg-primary-background">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-20 my-10">

        <icon-section :icon="['fas', 'star']" class="text-text-gray" icon-color-class="text-primary"
                      title="Breite Auswahl">
          Live-Kurse zu allen Themen und Interessen an einem Ort. Mit der bequemen Suche genau das richtige
          finden und dank unserem einheitlichen Bewertungssystem immer die richtige Wahl treffen.
        </icon-section>

        <icon-section :icon="['fas', 'fire']" class="text-text-gray" icon-color-class="text-primary"
                      title="Mit echten Menschen">
          Echte Interaktion statt stundenlangem Zuhören. Gemeinsam mit kompetenten Trainern beim Lernen
          schnell Hürden überwinden und damit sicher zum Lernerfolg kommen.
        </icon-section>

        <icon-section :icon="['fas', 'tags']" class="text-text-gray" icon-color-class="text-primary" title="Preiswert">
          Zum fairen Preis zu echten Lernerfolgen. Unkompliziert hochwertiges Wissen von Trainern
          ohne große Umwege auf of.courz.de finden.
        </icon-section>

      </div>
    </full-width-section>

    <newsletter-signup-section class="my-16" sub-title="Melde dich bei unserem Newsletter an"
                               title="Dich interessiert unser Fortschritt?">
      <p class="mt-6">
        Aktuell befinden wir uns im Aufbau und arbeiten stetig an der optimalen Lösung, um dir die beste Lernerfahrung
        zu ermöglichen.
      </p>
      <p class="mt-4">
        Damit du keine Neuerungen und Fortschritte verpasst, melde dich doch bei unserem Newsletter an.
      </p>
      <p class="mt-4">
        Aber keine Sorge von uns bekommst du keinen Spam.
      </p>
    </newsletter-signup-section>

    <FloatingInstagram/>
  </Layout>
</template>
<script>
import FullWidthSection from "../components/gui-elements/FullWidthSection";
import IconSection from "../components/gui-elements/IconSection";
import WorkshopCard from "../components/workshop/WorkshopCard";
import NewsletterSignupSection from "../components/landing-page/NewsletterSignupSection";
import { scrollTo } from "../plugins/scroll-to";
import FloatingInstagram from "../components/gui-elements/FloatingInstagram";
import TrainerImage from "../components/landing-page/TrainerImage";

export default {
  components: { TrainerImage, FloatingInstagram, NewsletterSignupSection, IconSection, FullWidthSection, WorkshopCard },
  metaInfo: {
    title: "Live-Kurse, Seminare und Workshops an einem Ort",
  },
  computed: {
    workshops() {
      return this.$store.state.workshops.workshops || this.$static.workshops.edges.map(({ node: workshop }) => workshop);
    }
  },
  methods: {
    scrollTo
  }
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
organizer {
firstName
lastName
 }
path
minPrice
nextDate
nextDuration
nextParticipants
allPricesTheSame
}
}
}
}
</static-query>