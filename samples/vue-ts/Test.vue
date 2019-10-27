<template>
  <h1>Hello you.</h1>
</template>

<script lang="ts">
export default {
  name: 'TestComponent',
  data() {
    return {
      score: 100
    };
  },
  computed: {
    double(): number {
      return this.score * 2
    }
  }
};
</script>

<style scoped></style>
