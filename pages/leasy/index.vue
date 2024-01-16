<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: `${useRuntimeConfig().app.baseURL}leasy/icon.svg`,
    },
    {
      rel: 'alternate icon',
      type: 'image/ico',
      href: `${useRuntimeConfig().app.baseURL}leasy/favicon.ico`,
    }
  ],
});
useSeoMeta({
  title: 'Leasy | CoreNion',
  ogTitle: 'Leasy',
  description: "「あなただけの」使いやすい暗記帳で学習しよう。",
  ogDescription: "「あなただけの」使いやすい暗記帳で学習しよう。",
  ogImage: 'https://corenion.github.io/leasy/ogp.png',
  ogType: 'website',
  ogSiteName: "CoreNion's Page",
  twitterCard: 'summary_large_image',
  twitterSite: '@CoreiNion',
  twitterCreator: '@CoreiNion',
  appleItunesApp: {
    appId: '6448246576',
  }
});

onMounted(() => {
  // @ts-ignore
  import('@microsoft/store-app-badge');
});
</script>

<template>
  <div>
    <div class="hero min-h-screen bg-gradient-to-r from-pink-100 to-teal-100 max-lg:z-0 shadow-lg shadow-pink-100">
      <div class="min-w-full">
        <div class="m-auto max-w-screen-2xl flex flex-row items-center gap-4 flex-wrap-reverse">
          <div class="flex-1 hidden lg:block">
            <img class="m-auto drop-shadow-xl topSC" src="/assets/leasy/sc1.png" alt="スクリーンショット">
          </div>
          <div class="flex-1 mx-5">
            <div class="m-auto flex flex-col gap-7 items-center max-lg:max-w-sm lg:max-w-fit">
              <div class="flex flex-col gap-3 lg:flex-row lg:gap-7 flex-wrap items-center justify-center">
                <img class="rounded-badge w-44 drop-shadow-xl" src="/leasy/icon.svg" alt="アイコン">
                <div>
                  <h1 class="text-5xl font-bold text-black text-center">Leasy</h1>
                  <p class="mt-6 mb-3 text-lg text-black">「あなただけの」暗記帳で学習しよう！</p>
                </div>
              </div>
              <div class="flex flex-col gap-2 min-w-full">
                <div class="flex flex-row gap-4 flex-wrap">
                  <div class="flex-1"><a class="btn btn-primary min-w-full" href="#ios">iOS</a></div>
                  <div class="flex-1"><a class="btn btn-secondary min-w-full" href="#android">Android</a></div>
                  <div class="flex-1"><a class="btn btn-info min-w-full" href="#windows">windows</a></div>
                  <div class="flex-1"><a class="btn min-w-full" href="#macos">macOS</a></div>
                  <div class="flex-1"><a class="btn btn-accent min-w-full" href="#web">Web (PWA)</a></div>

                  <div class="lg:hidden flex-1">
                    <a class="btn btn-neutral min-w-full" href="https://github.com/CoreNion/Leasy" target="_blank"
                      rel="noreferrer">GitHub</a>
                  </div>
                </div>
                <div class="max-lg:hidden">
                  <a class="btn btn-neutral min-w-full" href="https://github.com/CoreNion/Leasy" target="_blank"
                    rel="noreferrer">GitHub</a>
                </div>
              </div>
              <nuxt-link class="link" to="./privacy">プライバシーポリシー</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative lg:hidden -top-28 sm:-top-40 -mb-28 sm:-mb-40">
      <img class="m-auto max-w-xs drop-shadow-2xl" src="/assets/leasy/sc1.png" alt="スクリーンショット">
    </div>

    <div class="mx-auto my-7 max-w-screen-2xl mb-10">
      <h1 class="text-4xl font-bold text-center text-black">主な特徴</h1>
      <div class="flex flex-col lg:flex-row flex-wrap justify-center gap-7 m-5">
        <AppFeature title="使いやすい暗記帳！">
          <p class="my-2 text-black">
            このアプリは、自分で覚えたい単語やフレーズなどを登録して、暗記帳のように暗記学習が出来るアプリです。
            <br>
            問題形式は4択問題か入力問題で、不正解だった問題に絞って復習できる学習モードや、ランダムに出題されるテストモードもあります！
          </p>
        </AppFeature>
        <AppFeature title="端末内で完結、そしてオープンソース！">
          <p class="my-2 text-black">
            問題などは全て端末内のみに保存されます。そのため、アカウントを作成する必要はなく、作成した問題が不正に利用されることもありません！
            <br>
            アプリは無料で、GitHubでソースコードを公開しています！
          </p>
        </AppFeature>
      </div>
    </div>

    <div class="mx-auto my-7 mb-20 max-w-6xl">
      <h1 class="text-4xl font-bold text-center text-black m-5">Downloads</h1>

      <div class="flex flex-col sm:flex-row items-stretch gap-5 m-5 flex-wrap">
        <AppDownload title="Android" version="Android 8.1 以降" desc="Chromebookにもインストール可能です。" id="android">
          <a
            href="https://play.google.com/store/apps/details?id=com.corenion.mimosa&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img class="storeIcon" alt="Google Play で手に入れよう" src="/assets/store/play.svg">
          </a>
        </AppDownload>
        <AppDownload title="iOS" version="iOS 14 以降" desc="iCloud Driveによるデータの同期に対応しています。" id="ios">
          <a href="https://apps.apple.com/jp/app/leasy/id6448246576?itsct=apps_box_badge&amp;amp;itscg=30200">
            <img class="storeIcon" src="/assets/store/appstore.svg" alt="Download on the App Store"></a>
        </AppDownload>
      </div>
      <div class="flex flex-col sm:flex-row items-stretch gap-5 m-5 flex-wrap">
        <AppDownload title="Windows" version="Windows 10 以降" desc="x64のみ対応しています。" id="windows">
          <ms-store-badge productid="9PNXGM6NPF1Q" language="ja-JP" animation="on"></ms-store-badge>
        </AppDownload>
        <AppDownload title="macOS" version="macOS 11.0 以降" desc="iCloud Driveによるデータの同期に対応しています。" id="macos">
          <a href="https://apps.apple.com/jp/app/leasy/id6448246576?itsct=apps_box_badge&amp;amp;itscg=30200"><img
              class="storeIcon" src="/assets/store/appstore_mac.svg" alt="Download on the App Store"></a>
        </AppDownload>
      </div>

      <div class="mx-5 card bg-white border rounded-2xl shadow-xl" id="web">
        <div class="card-body">
          <h2 class="card-title">Web (PWA)<div class="badge badge-primary">Preview</div>
          </h2>
          <p>
            ブラウザ(ウェブ)上で完結するバージョンです。PWA版を開いた後に共有ボタンなどからホーム画面に追加することで、アプリのように使えます。
            <br>
            安定性の都合上、アプリ版の利用を推奨しますが、アプリをインストールできない場合などはこちらをご利用ください。
            <br>
            なお、バックアップ機能を利用し、後からアプリ版に学習データを移行することは可能です。
          </p>
          <div class="card-actions justify-end">
            <a class="btn btn-secondary" href="https://corenion.github.io/leasy/pwa/">PWA版を開く</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topSC {
  height: 75vh;
  max-height: 800px
}

ms-store-badge::part(img) {
  max-height: 55px;
}

.storeIcon {
  height: 55px;
}
</style>