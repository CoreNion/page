<script setup lang="ts">
const siteURL = useSiteConfig().url;
const baseURL = useRuntimeConfig().app.baseURL;

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: `${baseURL}profile.svg`,
    },
    {
      rel: 'alternate icon',
      type: 'image/ico',
      href: `${baseURL}favicon.ico`,
    }
  ],
});

useSeoMeta({
  title: 'About CoreNion',
  ogTitle: 'About CoreNion',
  description: "CoreNion / Yuta Obara's profile page.",
  ogDescription: "CoreNion / Yuta Obara's profile page.",
  ogImage: `${siteURL}${baseURL}profile.png`,
  ogUrl: `${siteURL}${baseURL}`,
  ogType: 'website',
  ogSiteName: "CoreNion's Page",
  twitterCard: 'summary',
  twitterSite: '@CoreiNion',
  twitterCreator: '@CoreiNion',
});
</script>

<template>
  <div>
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
            18 years old. Student.
            <br>
            Interested in Web (Nuxt.js / Vue) / Flutter.
          </p>
          <div class="badge badge-lg badge-ghost badge-outline font-medium px-3">
            <NuxtLink to="/accounts">
              <span>Accounts</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto my-7 max-w-screen-2xl">
      <div class="m-3">
        <h1 class="text-4xl font-bold my-5"># Nion's Works</h1>
        <p class="mx-3">
          私の作品は、日頃の生活の中で「あったらいいな」と思ったアイデアを、さまざまな技術を活用してカタチにしたものが多いです。
          <br>
          少しでも人の役に立ってほしいという思いから、基本的にオープンソース/無料で公開しています。
        </p>
        <div class="flex flex-wrap justify-center">
          <IndexArch icon="cp-dashboard/icon.svg" title="CP Dashboard" desc="必要な情報を一目で確認できる、タイマー付きのダッシュボードサイト。"
            repo="CoreNion/cp-dashboard" pagePath="https://cpd.cnion.dev/" :newBadge="true" />
          <IndexArch icon="leasy/icon.svg" title="Leasy" desc="「あなただけの」使いやすい暗記帳で学習しよう。" repo="CoreNion/Leasy"
            pagePath="/leasy" :newBadge="false" />
          <IndexArch icon="trucker/icon.svg" title="Open FileTrucker" desc="どんな端末でも使える、サーバーを介さないファイル共有アプリ。"
            repo="CoreNion/OpenFileTrucker" pagePath="/trucker" :newBadge="false" />
          <IndexArch icon="ny0bi_tool/icon.png" title="Ny0bi Tool" desc="N予備校をダークモードにするChrome拡張機能。"
            repo="CoreNion/Ny0bi_Tool"
            pagePath="https://chrome.google.com/webstore/detail/lkmfjlmabmkedlocaclfgbemmdofjfjg" :newBadge="false" />
          <IndexArch icon="archivtter/icon.png" title="Archivtter" desc="過去のXポストを簡単に検索できるウェブサイト。"
            repo="CoreNion/Archivtter" pagePath="/archivtter" :newBadge="false" />
        </div>
      </div>
      <div class="m-3">
        <h1 class="text-4xl font-bold my-5"># Timeline</h1>
        <div class="ml-3 md:ml-10 2xl:ml-3">
          <ol class="relative border-l-4 border-green-200">
            <IndexTl class="mb-5 ml-4" time="Aug 2020" title="Archivtterを公開">
              Twitterのツイート検索コマンド(since/until)をより簡単に使えるようにするために開発しました。
              <br>
              また、
              <a class="link" href="https://progedu.github.io/webappcontest/2020/summer/result/" target="_blank"
                rel="noreferrer">動くWEBページコンテスト 2020夏</a>
              にも応募しました。
            </IndexTl>
            <IndexTl class="mb-5 ml-4" time="Jan 2021" title="Ny0bi Toolの初版をリリース">
              当時学習に使っていたN予備校にダークモードが欲しいと思い、Chrome拡張機能を開発しました。
              <br>
              公開当初はファイル形式でのインストールでしたが、後にChrome Web Storeでの配信も開始しました。
            </IndexTl>
            <IndexTl class="mb-3 ml-4" time="Apr 2021" title="N高等学校に入学、通学コースに所属" color="bg-zinc-400" />
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
              N/S高生であることを手軽に確実に証明できるようにするために作りました。
              <br>
              今回は、N予備校でのプログラミング(Web系)講座での学習を生かし、開発しました。
            </IndexTl>
            <IndexTl class="mb-10 ml-4" time="Apr 2022" title="Open FileTruckerの初版をリリース、「磁石祭 2022」に出展">
              Windows PCからiPhoneなど異なるプラットフォーム間でのファイル共有に不便を感じ、ローカルネットワークを生かしたシンプルな仕様で共有できるようにするために開発しました。
              <br>
              磁石祭には今回はCoreNion独自の企画で<a class="link" href="https://nnn.ed.jp/school_festival/2022/plan/jqv9kyeuht-b/"
                target="_blank" rel="noreferrer">オンラインで出展</a>しました。
              <br>
              また、私が初めて本格的にFlutterを使用して開発したアプリです。
            </IndexTl>
            <IndexTl class="mb-8 ml-4" time="Sep 2022 ~ Oct 2022" title="Open FileTruckerをアプリ甲子園へ提出、ファイナリストに">
              初の外部コンテストへの応募でしたが、ファイナリストまで登ることができました！
              <br>
              また、決勝大会では、公開された場では初めて
              <a class="link" href="https://www.youtube.com/watch?v=rnzmYaCPlzs" target="_blank"
                rel="noreferrer">自分の制作物についてのプレゼンテーション</a>
              を行いました。
            </IndexTl>
            <IndexTl class="mb-10 ml-4" time="Apr 2023" title="Leasyの初版をリリース、「磁石祭 2023」に出展">
              私が初めてアプリストアでリリースしたアプリです！
              <br>
              単語帳感覚で使える、繰り返し学習などに便利な暗記帳アプリを作りたいと思い、開発しました。
              <br>
              今回も磁石祭には
              <a class="link" href="https://nnn.ed.jp/school_festival/s2023/plan/#ex-okejlp_3-l8v" target="_blank"
                rel="noreferrer">オンラインで出展</a>
              しました。
            </IndexTl>
            <IndexTl class="mb-5 ml-4" time="Dec 2023 ~ Mar 2024" title="CP Dashboardを開発/公開">
              キャンパスの時計やタイマー機能を改善しようと思い、それらを1画面にまとめたダッシュボードサイトを開発しました。
              <br>
              今回は電子工作への挑戦も兼ねて、Arudinoに接続されたセンサーからの温湿度や気圧データを表示する機能も追加しました。
              <br>
              一部の機能は生徒や先生のフィードバックを受けて追加しました！
              <br>
              なお、開発にはNuxt.jsを使用し、後のこのサイトのリニューアルにも活かしました。
            </IndexTl>
            <IndexTl class="ml-4" time="Mar 2024" title="N高等学校を卒業" color="bg-zinc-400" />
          </ol>
        </div>
      </div>

      <div class="mx-3 max-w-screen-2xl">
        <h1 class="text-4xl font-bold my-5"># Accounts / Contact</h1>

        <p class="mb-2 font-bold">
          ＊メールアドレスなどの詳細は、
          <NuxtLink class="link" to="/accounts">各アカウント一覧</NuxtLink>
          を参照してください。
        </p>
        <div class="flex flex-wrap gap-5 lg:gap-7 justify-center lg:justify-start lg:ml-7">
          <IndexAccount icon="grommet-icons:github" title="GitHub" url="https://github.com/CoreNion"
            accountID="@CoreNion" bgColor="bg-[#171515]" textColor="text-white" />
          <IndexAccount icon="carbon:logo-x" title="X (Twitter)" url="https://twitter.com/CoreiNion"
            accountID="@CoreiNion" bgColor="bg-sky-900" textColor="text-white" />
        </div>
      </div>
    </div>
  </div>
</template>