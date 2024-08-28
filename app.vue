<script setup lang="ts">
const gTag = useGtag();
const runtimeConfig = useRuntimeConfig();

useHead({
  htmlAttrs: {
    lang: 'ja',
  },
});
useSeoMeta({
  googleSiteVerification: runtimeConfig.public.googleSiteVerification,
});

const enableGA = enableGoogleAnalytics();
// Cookieの有効/無効の変更を監視
watch(
  () => enableGA.value, () => {
    if (enableGA.value) {
      gTag.initialize();
    } else {
      gTag.disableAnalytics();
    }
  },
  { deep: true },
);

const answerAnalytics = answerAnalyticsQuestion();
const onAnalytics = (value: boolean) => {
  enableGA.value = value;
  answerAnalytics.value = true;
};
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>

  <div class="fixed bottom-0 m-3">
    <ClientOnly>
      <div v-if="!answerAnalytics" role="alert" class="alert glass">
        <div>
          <h3 class="font-bold">当サイトでは、使用状況のデータの収集のために解析ツールなどを使用することがあります。</h3>
          <div class="text-xs">
            <span>このデータは匿名で収集されており、個人を特定するものではありません。データの収集に同意される場合は、「同意」ボタンを押してください。</span>
            <br>
            <span>この設定は、下部にある<Icon name="carbon:data-analytics" size="20px"></Icon>から変更することができます。</span>
            <br>
            <NuxtLink class="link" to="/privacy">プライバシーポリシー</NuxtLink>
          </div>
        </div>
        <div class="flex flex-row gap-5">
          <button class="btn btn-sm" @click="onAnalytics(false)">拒否</button>
          <button class="btn btn-sm btn-primary" @click="onAnalytics(true)">同意</button>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
