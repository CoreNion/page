<script setup lang="ts">
const siteURL = useSiteConfig().url;
const baseURL = useRuntimeConfig().app.baseURL;

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: `${useRuntimeConfig().app.baseURL}archivtter/icon.png`,
    },
  ],
});
useSeoMeta(
  {
    title: 'Archivtter | CoreNion',
    ogTitle: 'Archivtter (アーカイブッター) - X(旧Twitter)での日付検索の支援ツール',
    description: "X(旧Twitter)で日付検索をする人のための支援ツールです。過去のツイートを簡単に検索できるリンクを簡単に発行できます。",
    ogImage: `${siteURL}${baseURL}archivtter/ogp.jpg`,
    ogUrl: `${siteURL}${baseURL}archivtter/`,
    ogType: 'website',
    ogSiteName: "CoreNion's Page",
    twitterCard: 'summary_large_image',
    twitterSite: '@CoreiNion',
    twitterCreator: '@CoreiNion',
  }
);

const accountName = useState(() => '');
const sinceDate = useState(() => '');
const untilDate = useState(() => '');

const searchUrl = computed(() => {
  return `https://twitter.com/search?q=from%3A${accountName.value}%20since%3A${sinceDate.value}%20until%3A${untilDate.value}&src=typed_query&f=live`;
});
</script>

<template>
  <div class="my-5 mx-3 flex flex-col lg:items-center">
    <h1 class="text-4xl text-center font-bold">Archivtter</h1>
    <p class="text-center">
      <span>過去のX ポスト(ツイート)を、日付の範囲で簡単に検索できるリンクを3 STEPで発行します！</span>
    </p>

    <div class="flex flex-row flex-wrap gap-3 my-4">
      <div class="grow w-96 bg-base-200 text-base-content p-4 rounded-xl">
        <h2 class="text-xl text-center font-bold">Step 1: ユーザー名を入力</h2>
        <p>検索したいユーザーの、@から始まるユーザー名を入力してください。</p>
        <div class="mt-2 join w-full">
          <div class="join-item p-3 border bg-neutral text-neutral-content">@</div>
          <input type="text" v-model="accountName" class="join-item input w-full" placeholder="ユーザー名" required>
        </div>
      </div>
      <div class="grow w-96 bg-base-200 text-base-content p-4 rounded-xl">
        <h2 class="text-xl text-center font-bold">Step 2: 検索する期間の開始日を設定</h2>
        <p>検索する日付の範囲の、開始日を入力してください。</p>
        <input class="mt-2 input w-full" v-model="sinceDate" type="date" placeholder="ブラウザーの機能を利用するか、yyyy-mm-ddの形式で入力"
          required>
      </div>
      <div class="grow w-96 bg-base-200 text-base-content p-4 rounded-xl">
        <h2 class="text-xl text-center font-bold">Step 3: 検索する期間の終了日を設定</h2>
        <p>検索する日付の範囲の、終了日を入力してください。</p>
        <input class="mt-2 input w-full" v-model="untilDate" type="date" placeholder="ブラウザーの機能を利用するか、yyyy-mm-ddの形式で入力"
          required>
      </div>
    </div>

    <div class="divider"></div>

    <div class="border-2 rounded-xl p-5 max-w-screen-lg">
      <h1 class="text-xl font-bold">作成結果</h1>

      <div class="whitespace-nowrap overflow-x-auto font-mono my-2">{{ searchUrl }}</div>
      <a class="btn w-full" :href="searchUrl">検索結果にアクセス</a>
    </div>
  </div>
</template>