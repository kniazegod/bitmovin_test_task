<template>
<div>
  <h1>Todo List</h1>
  <div class="wrapper">
    <div class="todo-list">
      <div class="task" v-for="task in tasks" :key="task.id">
        <input class="task-checkbox" type="checkbox" v-model="task.done" @change="update_status(task)" />
        <span> {{ task.name }} </span>
        <button class="remove-button" @click="remove(task)">X</button>
      </div>
      <div>
        <input class="name-input" ref="task_name" type="text" />
        <button class="add-button" @click="add()">Add</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import client from 'client-library';

export default {
  name: 'TodoList',
  data: function() {
    return {
      tasks: []
    }
  },
  created: async function() {
    this.tasks = await client.get_all_tasks();
  },
  methods: {
    add: async function() {
      const task = await client.create_task(this.$refs.task_name.value || '');
      this.tasks.push(task);
      this.$refs.task_name.value = '';
    },
    update_status: async function (task) {
      await client.update_task(task.id, { done: task.done });
    },
    remove: async function(task) {
      const response = await client.delete_task(task.id);
      console.log(response)
      if (response.ok) {
        const idx = this.tasks.indexOf(task);
        this.tasks.splice(idx, 1);
      }

    }
  }
} 
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.todo-list {
  border: 1px black solid;
  width: 800px;
  padding: 25px;
  border-radius: 25px;
}
.task {
  margin: 5px 300px;
  display: flex;
  justify-content: center;
}
.name-input {
  margin-right: 5px;
}
.add-button {
  border: 0px;
  background: skyblue;
  height: 30px;
  font-weight: 600;
}
.remove-button {
  border: 0px;
  background: red;
  height: 30px;
  font-weight: 600;
  margin-left: auto;
}

</style>
