<template>
  <div class="wrap">
    <Identification
      name="Ed Phillips"
      phone-number="+44 (0) 7977 212 910"
      email="ed@paperuncle.com"
      site-url="paperuncle.com"
    />
    <div class="container">
      <div class="lg:flex items-top">
        <Introduction
          class="introduction lg:w-3/5 flex px-4 py-2 m-2"
          :introduction="introduction"
        />
        <Skills class="skills lg:w-2/5 flex px-10 py-5 m-2" :skills="skills" />
      </div>
      <div class="md:flex items-top">
        <Experience class="experience md:w-3/5" :experience="experience" />
        <div class="side md:w-2/5">
          <Strengths
            class="strengths flex-1 px-10 py-5 m-2"
            :strengths="strengths"
          />
          <Interests
            class="interests flex-1 px-10 py-5 m-2"
            :interests="interests"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/assets/data/data'
import Identification from '~/components/Identification.vue'
import Strengths from '~/components/Strengths.vue'
import Experience from '~/components/Experience.vue'
import Introduction from '~/components/Introduction.vue'
import Interests from '~/components/Interests.vue'
import Skills from '~/components/Skills.vue'

export default {
  name: 'App',
  components: {
    Identification,
    Strengths,
    Experience,
    Introduction,
    Interests,
    Skills
  },
  data() {
    return {
      ...data
    }
  },
  head() {
    return {
      title: 'Ed Phillips, Front End Engineer',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: "Ed Phillips' curriculum vitae"
        }
      ]
    }
  }
}
</script>

<style></style>
