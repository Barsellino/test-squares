<template>
  <div class="grid-container">
    <div
      v-for="row in sizeY"
      :key="row"
      class="grid-row"
    >
      <div
        v-for="col in sizeX"
        :key="`${row}-${col}`"
      >
        <item-squares />
      </div>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import ItemSquares from "@/components/pages/game/item-squares.vue";

const props = defineProps({
  sizeX: {
    type: Number
  },
  sizeY: {
    type: Number
  }
})

</script>

<style scoped>
.grid-container {
  display: flex;
  flex-direction: column;
}

.grid-row {
  display: flex;
  width: fit-content;
  height: 100%;
  overflow: scroll;
  color: aliceblue;
}

</style>
