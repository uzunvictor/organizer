<template>
  <div class="container">
    <div class="tasks-header">
      <h1 class="tasks-date">
        {{ weekDay }}, {{ day }} {{ month }} {{ year }}
      </h1>
      <button class="create-new-task" @click="createNewTask">New Task</button>
    </div>

    <mcv-tasks />
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="isTask" @click="isTask = false"></div>
    </transition>
    <transition name="slide" appear>
    <div class="modal" v-if="isTask">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid minus obcaecati deserunt, voluptas totam eveniet laborum harum doloribus facilis?</p>
      <!-- Alt + z -->
      <button class="button" @click="isTask = false">Hide</button>
    </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import McvTasks from "@/components/McvTasks";

export default {
  name: "McvDay",

  data() {
    return {
      isTask: false,
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
  },

  methods: {
    createNewTask() {
      this.isTask = true;
    },
  },
};
</script>
