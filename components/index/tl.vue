<script setup lang="ts">
interface Props {
  class: string,
  time: string,
  title: string,
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: undefined
});
</script>

<template>
  <li :class="class">
    <div :class="['absolute w-6 h-6 rounded-full mt-1 -left-3.5', props.color != undefined ? props.color : 'bg-primary']"></div>
    <time class="mb-1 text-sm font-normal">{{ props.time }}</time>
    <h3 class="text-lg font-semibold">{{ props.title }}</h3>
    <p class="mb-4 text-base font-normal">
      <slot></slot>
    </p>
  </li>
</template>