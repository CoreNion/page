<script setup lang="ts">
interface Props { 
  icon: string,
  title: string,
  desc: string,
  repo: string,
  pagePath: string | null,
  routerLink: boolean
  newBadge: boolean 
}

const props = withDefaults(defineProps<Props>(), {
  pagePath: null,
  newBadge: false,
  routerLink: false
});
</script>

<template>
  <div class="mockup-window shadow-xl max-w-xl border-2 m-3 bg-green-50">
    <div class="card-body">
      <div class="card-title">
        <img class="rounded-xl h-16 border md:mr-2" :src="props.icon" :alt="props.title + '\'s icon'" />
        <h2 class="text-2xl md:text-3xl md:font-medium"> {{ props.title }}
          <div v-if="props.newBadge" class="badge badge-lg badge-accent font-medium p-1 px-3 ml-3">NEW</div>
        </h2>
      </div>
      <p>{{ props.desc }}</p>
      <p>
        <img class="inline-block mr-4" alt="GitHub top language"
          :src="'https://img.shields.io/github/last-commit/' + props.repo">
        <img class="inline-block mr-4" alt="GitHub last commit"
          :src="'https://img.shields.io/github/last-commit/' + props.repo">
      </p>
      <div class="card-actions justify-end">
        <router-link v-if="props.routerLink" class="btn btn-primary" :to="props.pagePath">Open Site</router-link>
        <a v-if="props.pagePath != null && !props.routerLink" class="btn btn-primary" :href="props.pagePath">Open Site</a>
        <a class="btn btn-secondary ml-3" :href="'https://github.com/' + props.repo">GitHub</a>
      </div>
    </div>
  </div>
</template>
