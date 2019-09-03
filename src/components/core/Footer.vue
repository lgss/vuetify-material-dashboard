<template>
  <v-footer
    id="core-footer"
    absolute
    height="82"
  >
    <v-spacer />
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
      <a
        href="https://www.lgss-digital.co.uk"
        target="_blank"
      >LGSS Digital</a>, made with
      <v-icon
        color="tertiary"
        size="17"
      >mdi-coffee</v-icon>
      for better services
    </span>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({})
  }
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
