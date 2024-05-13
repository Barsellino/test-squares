<template>
  <div>
    <my-input label="Size X" placeholder="Enter your Size X" type="number"  v-model.number="state.sizeX"/>
    <my-input label="Size Y" placeholder="Enter your Size Y" type="number"  v-model.number="state.sizeY"/>
  </div>
  <Game :size-x="state.sizeX" :size-y="state.sizeY"/>

</template>

<script setup>
import MyInput from '@/components/ui/my-input.vue';
import Game from '@/components/pages/game'
import { ref } from 'vue';

const state = ref({
  sizeX: 0,
  sizeY: 0
})
</script>

<style scoped lang="sass">
</style>
