<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/profile.svg',
    },
    {
      rel: 'alternate icon',
      type: 'image/ico',
      href: '/favicon.ico',
    }
  ],
});

useSeoMeta({
  title: 'About CoreNion',
  ogTitle: 'About CoreNion',
  description: "CoreNion / Yuta Obara's profile page.",
  ogDescription: "CoreNion / Yuta Obara's profile page.",
  ogImage: 'https://corenion.github.io/profile.png',
  ogUrl: 'https://corenion.github.io/',
  ogType: 'website',
  ogSiteName: "CoreNion's Page",
  twitterCard: 'summary',
  twitterSite: '@CoreiNion',
  twitterCreator: '@CoreiNion',
});
</script>

<template>
  <div class="hero min-h-screen bg-slate-100">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <div class="flex-row">
          <img class="rounded-badge w-52 lg:w-60 xl:w-72 m-auto" src="/profile.svg" alt="Profile icon">
          <div class="mt-3">
            <h1 class="text-5xl md:text-6xl font-bold">CoreNion</h1>
            <h2 class="text-4xl font-light">Yuta Obara</h2>
          </div>
        </div>
        <p class="py-6 text-xl">
          18 years old. Student of N High School. (6th term)
          <br>
          Active Learner (commute cource).
          <br>
          <br>
          Interested in Flutter / Node.js / Web.
        </p>
      </div>
    </div>
  </div>

  <div class="mx-auto my-7 max-w-screen-2xl">
    <div class="m-3">
      <h1 class="text-4xl font-bold my-5"># Nion's Works</h1>
      <div class="flex flex-wrap justify-center">
        <IndexArch icon="/leasy/icon.svg" title="Leasy" desc="「あなただけの」使いやすい暗記帳で学習しよう。" repo="CoreNion/Leasy" pagePath="/leasy" :newBadge="true" />
        <IndexArch icon="/trucker/icon.svg" title="Open FileTrucker" desc="どんな端末でも使える、サーバーを介さないファイル共有アプリ。" repo="CoreNion/OpenFileTrucker" pagePath="/trucker" :newBadge="false" />
        <IndexArch icon="/ny0bi_tool/icon.png" title="Ny0bi Tool" desc="N予備校をダークモードにするChrome拡張機能。" repo="CoreNion/Ny0bi_Tool" pagePath="https://chrome.google.com/webstore/detail/lkmfjlmabmkedlocaclfgbemmdofjfjg" :newBadge="false" />
        <IndexArch icon="/archivtter/icon.png" title="Archivtter" desc="過去のXポストを簡単に検索できるウェブサイト。" repo="CoreNion/Archivtter" pagePath="/archivtter" :newBadge="false" />
      </div>
    </div>
    <div class="m-3">
      <h1 class="text-4xl font-bold my-5"># Timeline</h1>
      <div class="ml-3 md:ml-10 2xl:ml-3">
        <ol class="relative border-l-4 border-green-200">
          <IndexTl class="mb-5 ml-4" time="Aug 2020" title="Archivtterを公開">
            <a class="link" href="https://progedu.github.io/webappcontest/2020/summer/result/" target="_blank"
              rel="noreferrer">動くWEBページコンテスト 2020夏</a>
            に応募しました。
          </IndexTl>
          <IndexTl class="mb-5 ml-4" time="Jan 2021" title="Ny0bi Toolの初版をリリース">
            当時はファイル形式でのインストールでしたが、後にChrome Web Storeでの配信も開始しました。
          </IndexTl>
          <IndexTl class="mb-3 ml-4" time="Apr 2021" title="N高等学校に入学" color="bg-zinc-400" />
          <IndexTl class="mb-10 ml-4" time="Apr 2021" title="Ny0bi Toolを「磁石祭 2021」(N/S高・N中等部文化祭)のプログラミングブースに出展">
            <a class="link" href="https://twitter.com/nhigh_info/status/1386241067222249473" target="_blank"
              rel="noreferrer">N/S高の公式Twitter</a>
            や文化祭の紹介番組内でも紹介されました。
            <br>
            (現在はブースは公開終了)
          </IndexTl>
          <IndexTl class="mb-10 ml-4" time="Oct 2021" title="nnnCheckerを公開">
            初めて公開した、サーバーを用いた自作のWeb Appです。
            <br>
            N予備校でのプログラミング(Web系)講座での学習を生かし、開発しました。
          </IndexTl>
          <IndexTl class="mb-10 ml-4" time="Oct 2021" title="Open FileTruckerの初版をリリース、「磁石祭 2022」に出展">
            今回はCoreNion独自の企画で<a class="link" href="https://nnn.ed.jp/school_festival/2022/plan/jqv9kyeuht-b/"
              target="_blank" rel="noreferrer">オンラインで出展</a>しました。
            <br>
            また、私が初めて本格的にFlutterを使用して開発したアプリです。
          </IndexTl>
          <IndexTl class="mb-8 ml-4" time="Sep 2022 ~ Oct 2022" title="Open FileTruckerをアプリ甲子園へ提出、ファイナリストに">
            初の外部コンテストへの応募でしたが、
            <a class="link" href="https://applikoshien.jp/award2022" target="_blank" rel="noreferrer">ファイナリスト</a>
            まで登ることができました！
            <br>
            また、決勝大会では、公開された場では初めて
            <a class="link" href="https://www.youtube.com/watch?v=rnzmYaCPlzs" target="_blank"
              rel="noreferrer">自分の制作物についてのプレゼンテーション</a>
            を行いました。
          </IndexTl>
          <IndexTl class="mb-10 ml-4" time="Apr 2023" title="Leasyの初版をリリース、「磁石祭 2023」に出展">
            私が初めてアプリストアでリリースしたアプリです！<br>
            今回も
            <a class="link" href="https://nnn.ed.jp/school_festival/s2023/plan/#ex-okejlp_3-l8v" target="_blank"
              rel="noreferrer">オンラインで出展</a>
            しました。
          </IndexTl>
        </ol>
      </div>
    </div>
  </div>
</template>