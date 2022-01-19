<template>
  <div class="tasks">{{ tasksList }}</div>
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
    this.tasksList.push(getItem(this.dataset));
  },
};
</script>
