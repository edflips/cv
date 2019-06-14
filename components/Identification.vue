<template>
  <section class="identification text-center px-4 py-4">
    <div class="container">
      <h1>{{ name }}</h1>
      <span class="andand">&amp;&amp;</span>
      <p>
        <span class="bracket">(</span>
        <span class="phone">{{ phoneNumber }}</span>
        <span class="divider">||</span>
        <span class="email">{{ email }}</span>
        <span class="bracket">)</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Identification',
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    siteUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
section.identification {
  background-color: #ff5545;
}
/* 
h1 {
  display: inline-block;
  font-size: 3rem;
  margin: 0 0 0.2rem;
}

.andand {
  display: block;
}

.divider,
.bracket {
  display: inline-block;
  margin: 0 1rem;
  font-weight: 800;
} */
</style>
