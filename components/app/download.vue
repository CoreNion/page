<script setup lang="ts">
interface Props {
  title: string,
  desc: string,
  version: string,
  id: string,
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex-1 card bg-white border rounded-2xl shadow-xl" :id="props.id" style="min-width: 400px;">
    <div class="card-body">
      <h2 class="card-title">{{ title }}<div class="badge badge-primary">{{ version }}</div>
      </h2>
      <p> {{ desc }} </p>

      <div class="card-actions justify-end">
        <slot></slot>
      </div>
    </div>
  </div></template>
