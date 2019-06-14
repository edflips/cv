<template>
  <section class="experience">
    <Card
      v-for="exp in experience"
      :key="exp.title"
      :title="exp.title"
      :date-range="exp.dateRange"
      :description="exp.description"
    />
  </section>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Experience',
  components: {
    Card
  },
  props: {
    experience: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
