<template>
  <section class="strengths">
    <div v-for="strength in strengths" :key="strength.name" class="col">
      <h2>
        <font-awesome-icon class="icon" icon="fingerprint" size="xs" />
        {{ strength.title }}
      </h2>
      <p>{{ strength.copy }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Strengths',
  props: {
    strengths: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
/* section {
  padding: 1rem;
}
h2 {
  display: flex;
  align-items: center;
  line-height: 1;
  margin: 1rem 0 0.4rem;
}
p {
  text-align: left;
  margin: 0.2rem 0 0.8rem;
}
.icon {
  font-size: 1rem;
  margin: 0 0.4rem;
  color: #ff5545;
} */
</style>
