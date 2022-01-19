<template>
  <div v-frag>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="isTask"></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="isTask">
        <input
          type="text"
          class="new-task-title"
          v-model="taskTitle"
          placeholder="Title"
        />
        <textarea
          class="new-task-body"
          v-model="taskBody"
          placeholder="task body ..."
        />
        <button class="button" @click="addNewTask">Dobaviti</button>
      </div>
    </transition>
  </div>
</template>

<script>
import frag from "vue-frag";
import { mapState } from "vuex";
import { getItem, setItem } from "../helpers/storage";

export default {
  name: "McvNewTask",
  directives: {
    frag,
  },

  props: {
    dataset: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      taskTitle: "title",
      taskBody: "body",
    };
  },

  computed: {
    ...mapState({
      isTask: (state) => state.tasksStore.isTask,
    }),
  },

  methods: {
    addNewTask() {
      if (!getItem(this.dataset)) {
        setItem(this.dataset, [{ title: this.taskTitle, body: this.taskBody }]);
      } else {
        const task = getItem(this.dataset);
        task.push({
          title: this.taskTitle,
          body: this.taskBody,
        });

        setItem(this.dataset, task);
      }
      this.$store.commit("changeIsTask");
    },
  },
};
</script>
