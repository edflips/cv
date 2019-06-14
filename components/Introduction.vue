<template lang="md">
  <section class="intro" v-html="introduction" />
</template>

<script>
export default {
  title: 'Introduction',
  props: {
    introduction: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
/* section.intro {
  padding: 1rem;
  text-align: left;
} */
</style>
