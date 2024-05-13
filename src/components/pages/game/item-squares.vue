<template>
  <div class="grid-cell" :class="isBlue ? 'blue-background' : 'white-background'" @mouseover="isBlue = !isBlue" />
</template>

<script setup>

import {ref} from "vue";

const isBlue = ref(false)

</script>


<style scoped>
.grid-cell {
  width: 36px;
  height: 36px;
  margin: 5px;
}

.blue-background {
  background: cornflowerblue;
}
.white-background {
  background: white;
}

</style>
