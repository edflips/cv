<template>
  <section class="experience px-4 py-2 m-2">
    <h1>Experience</h1>
    <Card
      v-for="exp in experience"
      :key="exp.title"
      :title="exp.title"
      :description="exp.description"
      :tech="exp.tech"
    />
  </section>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Experience',
  components: {
    Card,
  },
  props: {
    experience: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
