<template>
  <section class="interests px-4 py-2 m-2 mb-8">
    <h1>Interests</h1>
    <Card
      v-for="int in interests"
      :key="int.title"
      :title="int.title"
      :description="int.description"
      :tech="int.tech"
    />
  </section>
</template>

<script>
import Card from './Card'

export default {
  name: 'Interests',
  components: {
    Card,
  },
  props: {
    interests: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
