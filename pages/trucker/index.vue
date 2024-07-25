<script setup lang="ts">
const siteURL = useSiteConfig().url;
const baseURL = useRuntimeConfig().app.baseURL;

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: `${useRuntimeConfig().app.baseURL}trucker/icon.svg`,
    },
  ],
});
useSeoMeta({
  title: 'Open FileTrucker | CoreNion',
  ogTitle: 'Open FileTrucker',
  description: "どんな端末でも使える、サーバーを介さないファイル共有アプリ。",
  ogDescription: "どんな端末でも使える、サーバーを介さないファイル共有アプリ。",
  ogImage: `${siteURL}${baseURL}trucker/ogp.png`,
  ogUrl: `${siteURL}${baseURL}trucker/`,
  ogType: 'website',
  ogSiteName: "CoreNion's Page",
  twitterCard: 'summary_large_image',
  twitterSite: '@CoreiNion',
  twitterCreator: '@CoreiNion',
  appleItunesApp: {
    appId: '6504818191',
  }
});

onMounted(() => {
  // @ts-ignore
  import('@microsoft/store-app-badge');
});
</script>
<template>
  <div>
    <div class="hero min-h-screen bg-gradient-to-r from-blue-100 to-emerald-100">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <div class="flex-row">
            <img src="/trucker/icon.svg" class="rounded-badge w-44 md:w-60 m-auto shadow-xl">
            <div class="mt-3">
              <h1 class="text-4xl md:text-5xl font-bold">Open FileTrucker</h1>
            </div>
          </div>
          <p class="mt-6 mb-3 text-lg">どんな端末でも使える、サーバーを介さないファイル共有アプリ。</p>
        </div>
      </div>
    </div>

    <div class="mx-auto my-7 max-w-screen-2xl">
      <h1 class="text-4xl font-bold text-center">Features</h1>
      <div class="flex flex-wrap justify-center m-5 gap-7">
        <AppFeature title="Local Network">
          <span>このアプリは通信に外部のサーバーを用いないため、同じネットワークに接続された端末であれば高速に共有することが出来ます！ </span>
          <span>また、暗号化にも対応しているため、公共無線LANなど信用できないネットワークでも安全に共有することが出来ます！</span>
        </AppFeature>
        <AppFeature title="Cross-Platform">
          <span>このアプリはクロスプラットフォームで開発されているため、プラットフォームを気にすることなく、ファイルや写真共有を簡単に行うことができます！</span>
        </AppFeature>
      </div>
      <div class="flex flex-wrap justify-center m-5 gap-7">
        <AppFeature title="Simple">
          <span>ファイル共有に特化した、操作しやすく分かりやすいUIに設計しました。</span>
          <span>デバイス検知機能により、ワンタップで他の端末にファイルを送信することが出来ます！</span>
        </AppFeature>
        <AppFeature title="Open Source">
          <span class="my-2">ソースコードは全てGitHubで公開されています！ </span>

          <a class="btn btn-primary max-w-fit" href="https://github.com/CoreNion/OpenFileTrucker" target="_blank"
            rel="noreferrer">GitHub</a>
        </AppFeature>
      </div>
    </div>

    <div class="mx-auto my-7 mb-20 max-w-screen-2xl">
      <h1 class="text-4xl font-bold text-center">Downloads</h1>

      <div class="flex flex-col sm:flex-row items-stretch gap-5 m-5 flex-wrap">
        <AppDownload title="Android" version="Android 11 以上" desc="Chromebookにもインストール可能です。" id="android">
          <a href="https://play.google.com/store/apps/details?id=dev.cnion.trucker">
            <img class="storeIcon" alt="Google Play で手に入れよう" src="/assets/store/play.svg">
          </a>
        </AppDownload>
        <AppDownload title="iOS" version="iOS 15.6 以上" desc="ローカルネットワークの権限は必ず許可してください。" id="ios">
          <a href="https://apps.apple.com/jp/app/open-filetrucker/id6504818191">
            <img class="storeIcon" src="/assets/store/appstore.svg" alt="Download on the App Store"></a>
        </AppDownload>
      </div>
      <div class="flex flex-col sm:flex-row items-stretch gap-5 m-5 flex-wrap">
        <AppDownload title="Windows" version="Windows 10 1903 以上" desc="x64のみ対応、審査に承認され次第配信されます。" id="windows">
          <!-- <ms-store-badge productid="9NTFB2PN3GJ1" language="ja-JP" animation="on"></ms-store-badge> -->
        </AppDownload>
        <AppDownload title="macOS" version="macOS 12.5 以上" desc="Intelチップもサポートするネイティブ版は、審査に承認され次第配信されます。" id="macos">
          <a href="https://apps.apple.com/jp/app/open-filetrucker/id6504818191">
            <img class="storeIcon" src="/assets/store/appstore_mac.svg" alt="Download on the App Store">
          </a>
        </AppDownload>
        <AppDownload title="Linux (Bundle)" version="Desktop"
          desc="GUIアプリのため、デスクトップの環境が必要です。※広範囲な動作確認は困難なため、一部環境では動作しない可能性があります。" id="linux">
          <a class="btn"
            href="https://github.com/CoreNion/OpenFileTrucker/releases/latest/download/linux-x86_64.zip">Download
            x86_64</a>
          <a class="btn"
            href="https://github.com/CoreNion/OpenFileTrucker/releases/latest/download/linux-aarch64.zip">Download
            aarch64 (arm64)</a>
        </AppDownload>
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