<script setup>
const idParam = useRoute().params.id;
const workspace = useWorkspaceList().value.find((ws) => ws.id === idParam);
</script>

<template>
  <div>
    <h1>{{ workspace }} Workspace</h1>
  </div>
</template>
