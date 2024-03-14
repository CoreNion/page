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
  <div class="p-2 rounded-xl" :class="[bgColor, textColor]">
    <a :href="url" class="flex flex-row justify-between items-center gap-3" target="_blank" rel="noreferrer">
      <Icon :name="props.icon" size="40px" />
      <div class="grow flex flex-col">
        <h2 class="text-md md:text-2xl font-bold"> {{ props.title }}</h2>
        <span class="md:text-xl font-mono">{{ accountID != undefined ? accountID : url }}</span>
      </div>
    </a>
  </div>
</template>