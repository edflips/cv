<template>
  <div class="card">
    <h2>
      <font-awesome-icon class="icon" icon="star-of-life" pull="left" />
      {{ title }}
    </h2>
    <p>{{ dateRange }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    dateRange: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* .card {
  text-align: left;
  padding: 1rem;
}
h2 {
  display: flex;
  align-items: center;
  line-height: 1;
  margin: 1rem 0 0.4rem;
}
.icon {
  font-size: 1rem;
  margin: 0 0.4rem;
  color: #ff5545;
} */
</style>
