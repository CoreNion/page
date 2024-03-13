<script setup lang="ts">
interface Props { 
  title: string,
  icon: string,
  url: string,
  accountID?: string,
  bgColor: string
  textColor: string
}

const props = withDefaults(defineProps<Props>(), {
});
</script>

<template>
  <div class="p-3 px-3 rounded-xl" :class="[bgColor, textColor]">
    <a :href="url" class="flex flex-row justify-between items-center gap-5" target="_blank" rel="noreferrer">
      <Icon :name="props.icon" size="60px" />
      <div class="grow flex flex-col">
        <h2 class="text-lg md:text-2xl font-bold"> {{ props.title }}</h2>
        <span class="text-lg md:text-xl font-mono">{{ accountID != undefined ? accountID : url }}</span>
      </div>
    </a>
  </div>
</template>