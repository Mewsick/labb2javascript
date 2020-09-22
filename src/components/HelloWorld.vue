<template>
  <div class="hello">
    <h1>{{ text }}</h1>
    <img src="./../assets/corona.jpg" alt="bild på coronaviruset">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    text: String
  },
  methods: {
    setProp() {
      this.text = "Här kan du navigera för att se coronastatistik"
    }
  },
  created() {
    this.setProp()
  }
}
</script>