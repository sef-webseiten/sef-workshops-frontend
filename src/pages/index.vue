<template>
  <Layout>
    <Heading class="mb-20 text-center mt-14 tracking-wide">
      <img src="../assets/img/logo/logo-normal-colors.svg" class="inline w-32 mr-2 -mt-3">
      ist die Plattform für Live-Kurse und Workshops.
    </Heading>
    <Heading2 class="text-center mb-6">Warum of.courz?</Heading2>
    <full-width-section class="bg-gray-100">
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <icon-section :icon="['fas', 'fire']" title="Vielfalt" class="text-gray" icon-primary>
          Bequeme Suche durch verschiedenste Themen und Fächer auf einer Plattform
        </icon-section>

        <icon-section :icon="['fas', 'tags']" title="Preis" class="text-gray" icon-primary>
          Durch die kosteneffiziente Plattform ohne großen Wasserkopf
        </icon-section>

        <icon-section :icon="['fas', 'star']" title="Qualität" class="text-gray" icon-primary>
          Einheitliches Bewertungssystem für aussagekräftigen Qualitätsnachweis
        </icon-section>

      </div>
    </full-width-section>
  </Layout>
</template>
<script>
import Heading from "../components/gui-elements/Heading";
import FullWidthSection from "../components/gui-elements/FullWidthSection";
import Heading2 from "../components/gui-elements/Heading2";
import IconSection from "../components/gui-elements/IconSection";

export default {
  components: { IconSection, FullWidthSection, Heading, Heading2 },
  metaInfo: {
    title: "Startseite",
  },
};
</script>