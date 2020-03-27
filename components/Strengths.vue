<template>
  <section class="strengths">
    <h1 class="mb-2">Core values</h1>
    <div v-for="strength in strengths" :key="strength.name" class="col">
      <h2>
        <fa class="icon" size="xs" :icon="['fas', 'fingerprint']" />
        {{ strength.title }}
      </h2>
      <p class="ml-8 mt-0 text-sm">{{ strength.copy }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Strengths',
  props: {
    strengths: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.strengths {
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  @apply bg-gray-100;
  position: relative;
}

.strengths::after {
  content: '';
  position: absolute;
  top: 0;
  right: 9999rem;
  bottom: 0;
  left: 100%;
  width: 9999rem;
  @apply bg-gray-100;
}
</style>
