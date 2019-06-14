<template>
  <div class="wrap">
    <Identification
      name="Ed Phillips"
      phone-number="+44 (0) 7977 212 910"
      email="ed@paperuncle.com"
      site-url="paperuncle.com"
    />
    <div class="container">
      <div class="flex">
        <Introduction
          class="flex-1 text-gray-700 bg-gray-400 px-4 py-2 m-2"
          :introduction="introduction"
        />
        <Strengths
          class="flex-1 text-gray-700 bg-gray-400 px-4 py-2 m-2"
          :strengths="strengths"
        />
      </div>
    </div>
    <Experience :experience="experience" />
  </div>
</template>

<script>
import data from '~/assets/data/data'
import Identification from '~/components/Identification.vue'
import Strengths from '~/components/Strengths.vue'
import Experience from '~/components/Experience.vue'
import Introduction from '~/components/Introduction.vue'

export default {
  // name: 'App',
  components: {
    Identification,
    Strengths,
    Experience,
    Introduction
  },
  data() {
    return {
      ...data
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffffff 0%,#fff3f3 100%);
}
.slice {
  display: flex;
  justify-content: space-evenly;
}

.slice section {
  flex: 0 0 50%;
  box-sizing: border-box;
} */
</style>
