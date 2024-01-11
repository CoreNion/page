<script setup lang="ts">
const { grantConsent, revokeConsent } = useGtag();
const runtimeConfig = useRuntimeConfig();
const { cookiesEnabledIds } = useCookieControl()

useHead({
  htmlAttrs: {
    lang: 'ja',
  },
});
useSeoMeta({
  googleSiteVerification: runtimeConfig.public.googleSiteVerification,
});

// Cookieの有効/無効の変更を監視
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (!previous?.includes('ga') && current?.includes('ga')) {
      grantConsent();
    } else if (previous?.includes('ga') && !current?.includes('ga')) {
      revokeConsent();
    }
  },
  { deep: true },
)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <CookieControl locale="ja">
    <template #bar>
      <h2>{{ $cookies.moduleOptions.localeTexts.ja?.bannerTitle }}</h2>
      <p>{{ $cookies.moduleOptions.localeTexts.ja?.bannerDescription }}</p>
      <NuxtLink class="link text-white font-bold" to="/privacy">プライバシーポリシー</NuxtLink>
    </template>
  </CookieControl>
</template>
