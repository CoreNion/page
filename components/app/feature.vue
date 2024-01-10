<script setup lang="ts">
interface Props {
  title: string,
}

const props = defineProps<Props>();
</script>

<template>
  <div class="p-5 bg-white border rounded-2xl shadow-xl lg:flex-1 grow">
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold text-black">{{ props.title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>