<template>
  <div class="tasks">
    <ul>
      <li v-for="taskItem in tasksList" :key="taskItem.id">
        <div class="task-item">
          <h2>{{ taskItem.title }}</h2>
          <p>{{ taskItem.body }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getItem } from "../helpers/storage";

export default {
  name: "McvTasks",

  props: {
    dataset: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      tasksList: [],
    };
  },

  mounted() {
    this.tasksList = getItem(this.dataset);
    console.log("tasksList", this.tasksList);
  },
};
</script>
