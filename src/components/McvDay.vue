<template>
  <div class="container">
    <div class="tasks-header">
      <h1 class="tasks-date">
        {{ weekDay }}, {{ day }} {{ month }} {{ year }}
      </h1>
      <button class="button" @click="createNewTask">Novaia zadacha</button>
    </div>

    <mcv-tasks :dataset="dataset" />
    <mcv-new-task :dataset="dataset" />
  </div>
</template>

<script>
import McvTasks from "@/components/McvTasks";
import McvNewTask from "@/components/McvNewTask";
import { getItem } from "../helpers/storage";

export default {
  name: "McvDay",
  data() {
    return {
      isTask: false,
      taskTitle: "",
    };
  },

  computed: {
    completDate() {
      return getItem("today");
    },
    dataset() {
      return this.completDate.dataset;
    },
    weekDay() {
      return this.completDate.weekDay;
    },
    day() {
      return this.completDate.day;
    },
    month() {
      return this.completDate.month;
    },
    year() {
      return this.completDate.year;
    },
  },

  mounted() {
    console.log("today", this.completDate);
  },

  components: {
    McvTasks,
    McvNewTask,
  },

  methods: {
    createNewTask() {
      this.$store.commit("changeIsTask");
    },
  },
};
</script>
