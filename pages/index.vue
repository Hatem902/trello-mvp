<script setup>
/* import { useFiltersStore } from '../store/filters'; */
const newWorkspaceName = ref('');
const workspaceList = useWorkspaceList();
const createWorkspace = () => {
  const randomId = Math.floor(Math.random() * 100);
  const workspaceName = newWorkspaceName.value;
  workspaceList.value.push({
    id: randomId,
    name: workspaceName,
  });
  newWorkspaceName.value = '';
};
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <h2>Recent Workspaces</h2>
    <h2>Workspaces</h2>
    <form @submit.prevent="createWorkspace">
      <input
        type="text"
        v-model="newWorkspaceName"
        placeholder="Type in Workspace Name..."
      />
      <button type="submit">Create a new workspace</button>
      <ul>
        <li v-for="workspace in workspaceList" :key="workspace.id">
          <nuxt-link :to="`/workspace/${workspace.id}`"
            >{{ workspace.id }} : {{ workspace.name }}</nuxt-link
          >
        </li>
      </ul>
    </form>
  </div>
</template>
