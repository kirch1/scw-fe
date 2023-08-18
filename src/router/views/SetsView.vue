<script setup>
import { ref, watch, onMounted } from 'vue';

let allSets = null;
const selectedSport = ref('Football');
const selectedYear = ref(2017);
const displaySets = ref();
const selectedSet = ref();

async function getAllSets() {
  console.log('get sets started');
  const res = await fetch('http://localhost:8080/sets');
  const data = await res.json();
  allSets = data.sets;
  updateSets();
  console.log('finsihed getting sets');
}

function updateSets() {
  displaySets.value = allSets.filter((set) => {
    return (
      set.sport === selectedSport.value &&
      set.year === selectedYear.value
    );
  });
}

onMounted(getAllSets);
</script>

<template>
  <Dropdown
    v-model="selectedSet"
    :options="displaySets"
    optionLabel="set"
    placeholder="Select a Set"
    class="w-full md:w-14rem" />
</template>
