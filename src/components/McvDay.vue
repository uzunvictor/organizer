<template>
  <div class="container">
    <h1>{{ weekDay }}, {{ day }} {{ month }} {{ year }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "McvDay",

  computed: {
    ...mapState({
      weekDay: (state) => state.timeStore.chosenDate.weekDay,
      day: (state) => state.timeStore.chosenDate.day,
      month: (state) => state.timeStore.chosenDate.month,
      year: (state) => state.timeStore.chosenDate.year,
    }),
    // zeroTags() {
    //   return this.tags.length === 0;
    // },
  },

  mounted() {
    console.log("weekday", this.weekDay);
  },
};
</script>
