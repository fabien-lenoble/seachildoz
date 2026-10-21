<script setup>
import VuePdfEmbed from 'vue-pdf-embed';

import pdf from '../assets/formules-et-tarifs.pdf';

</script>

<template>
  <VuePdfEmbed :source="pdf" class="pdf-embed" />
</template>

<style scoped>
.pdf-embed {
  width: 100%;
}
</style>