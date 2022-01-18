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
        <button class="button" @click="hideModal">Dobaviti</button>
      </div>
    </transition>
  </div>
</template>

<script>
import frag from "vue-frag";
import { mapState } from "vuex";

export default {
  name: "McvNewTask",
  directives: {
    frag,
  },

  data() {
    return {
      taskTitle: "",
      taskBody: "",
    };
  },

  computed: {
    ...mapState({
      isTask: (state) => state.tasksStore.isTask,
    }),
  },

  methods: {
    hideModal() {
      this.$store.commit("changeIsTask");
    },
  },
};
</script>
