<template>
  <Layout>

    <!-- introduction -->
    <img src="../assets/img/logo/logo-normal-colors.svg" class="mx-auto w-64 mt-5 md:mt-14 mb-4">
    <Heading class="mb-10 md:mb-20 text-center tracking-wide">
      Die Plattform für Live-Kurse und Workshops.
    </Heading>

    <p class="mb-10 md:mb-20 text-center text-3xl md:text-5xl leading-relaxed">
      Neue Möglichkeiten Neues zu lernen.
    </p>

    <!-- main usps -->
    <Heading2 class="text-center mb-6 hidden">Was macht of.courz aus?</Heading2>
    <full-width-section class="bg-gray-100 mb-10 md:mb-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <icon-section :icon="['fas', 'star']" title="Breite Auswahl" class="text-gray" icon-primary>
          Live-Kurse zu allen Themen und Interessen an einem Ort. Mit der bequemen Suche genau das richtige
          finden und dank unserem einheitlichen Bewertungssystem immer die richtige Wahl treffen.
        </icon-section>

        <icon-section :icon="['fas', 'fire']" title="Mit echten Menschen" class="text-gray" icon-primary>
          Echte Interaktion statt stundenlangem Zuhören. Gemeinsam mit kompetenten Trainern beim Lernen
          schnell Hürden überwinden und damit sicher zum Lernerfolg kommen.
        </icon-section>

        <icon-section :icon="['fas', 'tags']" title="Preiswert" class="text-gray" icon-primary>
          Zum fairen Preis zu echten Lernerfolgen. Unkompliziert hochwertiges Wissen von Trainern
          ohne große Umwege auf of.courz.de finden.
        </icon-section>

      </div>
    </full-width-section>

    <!-- demo workshops ToDo: random / sorted -->
    <heading2 class="text-center mb-6">Mach den ersten Schritt zum Lernerfolg</heading2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-20">
      <WorkshopCard
          v-for="{ node: workshop } in $static.workshops.edges.slice(0,3)"
          :key="workshop._id"
          :workshop="workshop"
      />
      <g-link to="/workshops" class="p-6 text-lg text-center w-full h-full flex flex-col justify-center items-center">
        <fa :icon="['fas', 'ellipsis-h']" size="2x" class="text-primary mb-4"></fa>
        Suche weitere Kurse in der Suchleiste oder klicke hier
      </g-link>
    </div>

    <full-width-section class="bg-primary">
      <heading>Hi</heading>
    </full-width-section>

  </Layout>
</template>
<script>
import Heading from "../components/gui-elements/Heading";
import FullWidthSection from "../components/gui-elements/FullWidthSection";
import Heading2 from "../components/gui-elements/Heading2";
import IconSection from "../components/gui-elements/IconSection";
import WorkshopCard from "../components/workshop/WorkshopCard";

export default {
  components: { IconSection, FullWidthSection, Heading, Heading2, WorkshopCard },
  metaInfo: {
    title: "Startseite",
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