<template>
  <Layout>

    <full-width-section class="mb-20">
      <div class="md:w-1/2 h-full m-10 p-4 md:p-8 md:mt-72 shadow-2xl rounded-lg bg-white bg-opacity-75">
        <p class="my-4 md:my-8 text-center text-3xl md:text-4xl tracking-wide text-text-gray">
          <span class="font-bold md:text-5xl inline-block mb-4">Der Ort</span><br> für Live-Kurse und Workshops.
        </p>
      </div>

      <template v-slot:fullwidth>
        <g-image src="~/assets/img/pexels-fauxels-3184360.jpg" width="1920" class="object-cover w-full h-full"/>
      </template>

    </full-width-section>

    <!-- demo workshops ToDo: random / sorted -->
    <heading2 class="text-center mb-6">Mach den ersten Schritt zum Lernerfolg</heading2>
    <p class="text-center text-text-gray font-bold text-lg mb-6">Schau dir unsere Demo-Kurse an</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-20">
      <WorkshopCard
          v-for="{ node: workshop } in $static.workshops.edges.slice(0,3)"
          :key="workshop._id"
          :workshop="workshop"
      />
      <g-link to="/kurse" class="p-6 rounded-2xl shadow-inner text-lg text-center w-full h-full flex flex-col justify-center items-center">
        <fa :icon="['fas', 'angle-double-right']" size="2x" class="text-primary mb-4"></fa>
        Weitere Kurse
      </g-link>
    </div>

    <!-- main usps -->
    <full-width-section class="bg-gray-100 mb-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 mb-6">

        <icon-section :icon="['fas', 'star']" title="Breite Auswahl" class="text-text-gray" icon-primary>
          Live-Kurse zu allen Themen und Interessen an einem Ort. Mit der bequemen Suche genau das richtige
          finden und dank unserem einheitlichen Bewertungssystem immer die richtige Wahl treffen.
        </icon-section>

        <icon-section :icon="['fas', 'fire']" title="Mit echten Menschen" class="text-text-gray" icon-primary>
          Echte Interaktion statt stundenlangem Zuhören. Gemeinsam mit kompetenten Trainern beim Lernen
          schnell Hürden überwinden und damit sicher zum Lernerfolg kommen.
        </icon-section>

        <icon-section :icon="['fas', 'tags']" title="Preiswert" class="text-text-gray" icon-primary>
          Zum fairen Preis zu echten Lernerfolgen. Unkompliziert hochwertiges Wissen von Trainern
          ohne große Umwege auf of.courz.de finden.
        </icon-section>

      </div>
    </full-width-section>

    <!--full-width-section class="bg-primary">
      <heading class="text-white">Hi</heading>
    </full-width-section-->

    <newsletter-signup-section class="mb-20" />

  </Layout>
</template>
<script>
import Heading from "../components/gui-elements/Heading";
import FullWidthSection from "../components/gui-elements/FullWidthSection";
import Heading2 from "../components/gui-elements/Heading2";
import IconSection from "../components/gui-elements/IconSection";
import WorkshopCard from "../components/workshop/WorkshopCard";
import NewsletterSignupSection from "../components/landing-page/NewsletterSignupSection";

export default {
  components: { NewsletterSignupSection, IconSection, FullWidthSection, Heading, Heading2, WorkshopCard },
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