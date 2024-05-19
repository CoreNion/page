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
          <div class="badge badge-lg badge-success m-2 inline font-medium p-1 px-3">
            アプリ甲子園 ファイナリスト選出作品
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto my-7 max-w-screen-2xl">
      <h1 class="text-4xl font-bold text-center">Features</h1>
      <div class="flex flex-wrap justify-center m-5 gap-7">
        <AppFeature title="Local Network">
          <span>ファイルの送受信などは、全てローカルネットワーク内のみで行われます。 </span>
          <span>そのため、外部には一切データが保存されません！</span>
        </AppFeature>
        <AppFeature title="Cross-Platform">
          <span>FileTruckerはiOS / Android / Windows / macOS / Linuxに対応しています！ </span>
          <span>また、macOS / Linuxはarm64(Apple Silicon)にネイティブに対応しています！</span>
        </AppFeature>
      </div>
      <div class="flex flex-wrap justify-center m-5 gap-7">
        <AppFeature title="Simple">
          <span>ファイル共有に特化した、操作しやすく分かりやすいUIに設計しました。</span>
        </AppFeature>
        <AppFeature title="Open Source">
          <span class="my-2">ソースコードは全てGitHubで公開されています！ </span>
          <a href="https://github.com/CoreNion/OpenFileTrucker" target="_blank" rel="noreferrer">
            <img class="inline"
              src="https://img.shields.io/badge/CoreNion-OpenFileTrucker-informational?style=flat&amp;logo=github"
              alt="View GitHub repository">
          </a>
        </AppFeature>
      </div>
    </div>

    <div class="mx-auto my-7 mb-20 max-w-screen-2xl">
      <h1 class="text-4xl font-bold text-center">Downloads</h1>

      <div class="flex flex-col sm:flex-row items-stretch gap-5 m-5 flex-wrap">
        <AppDownload title="Android" version="Android 8.1 以降" desc="配布方法の特性上、警告が出る場合があります。詳細ボタンなどを押してインストールを続行してください。"
          id="android">
          <a class="btn"
            href="https://github.com/CoreNion/OpenFileTrucker/releases/latest/download/android-single.apk">Download
            .apk</a>
        </AppDownload>
        <AppDownload title="iOS" version="iOS 12.4以降" desc="AltStoreなどを利用してインストールしてください。" id="ios">
          <a class="btn" href="https://github.com/CoreNion/OpenFileTrucker/releases/latest/download/ios.ipa">Download
            .ipa</a>
          <a class="btn btn-secondary"
            href="altstore://install/?url=https://github.com/CoreNion/OpenFileTrucker/releases/latest/download/ios.ipa">Install
            via AltStore</a>
        </AppDownload>
      </div>
      <div class="flex flex-col sm:flex-row items-stretch gap-5 m-5 flex-wrap xl:max-">
        <AppDownload title="Windows" version="Windows 10 以降"
          desc="Windows Defenderによる警告が出た場合、ダイアログにある「詳細情報」をクリックして開き、実行ボタンをクリックしてください。" id="windows">
          <a class="btn"
            href="https://github.com/CoreNion/OpenFileTrucker/releases/latest/download/windows-x64.zip">Download
            x64</a>
        </AppDownload>
        <AppDownload title="macOS" version="macOS 11.0 以降"
          desc="制約や都合によりアプリ署名がされていないため、macOSによる警告が出る場合があります。警告が表示された場合、FileTrucker.appを右クリックして「開く」をクリックし、次のダイアログでも「開く」をクリックすると起動できます。"
          id="macos">
          <a class="btn"
            href="https://github.com/CoreNion/OpenFileTrucker/releases/latest/download/macos-universal.dmg">Download
            dmg (Universal)</a>
        </AppDownload>
        <AppDownload title="Linux" version="Desktop" desc="GUIアプリのため、デスクトップの環境が必要です。※広範囲な動作確認は困難なため、一部環境では動作しない可能性があります。"
          id="linux">
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