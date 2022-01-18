<template>
  <div class="container">
    <div class="tasks-header">
      <h1 class="tasks-date">
        {{ weekDay }}, {{ day }} {{ month }} {{ year }}
      </h1>
      <button class="button" @click="createNewTask">Novaia zadacha</button>
    </div>

    <mcv-tasks />
    <mcv-new-task />
  </div>
</template>

<script>
import { mapState } from "vuex";
import McvTasks from "@/components/McvTasks";
import McvNewTask from "@/components/McvNewTask";

export default {
  name: "McvDay",
   data() {
    return {
      isTask: false,
      taskTitle: "",
    };
  },

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

  components: {
    McvTasks,
    McvNewTask,
  },

  methods: {
    createNewTask() {
      this.$store.commit('changeIsTask')
    },
  },
};
</script>
