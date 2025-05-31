import Image from "next/image";
import Link from "next/link";

import Account from "@/components/top/contact";
import Timeline from "@/components/top/timeline";
import Achievement from "@/components/top/arch";

export const metadata = {
  title: 'About CoreNion',
  description: "CoreNion / Yuta Obara's profile page.",
  openGraph: {
    title: 'About CoreNion',
    description: "CoreNion / Yuta Obara's profile page.",
    url: 'https://cnion.dev/',
    siteName: "CoreNion's Page",
    images: [
      {
        url: '/profile.png',
        width: 1000,
        height: 1000,
        alt: "CoreNion's profile picture",
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@CoreiNion',
    creator: '@CoreiNion',
  },
};

export default function Home() {
  return (
    <main className="bg-white text-black">
      <section className="min-h-screen bg-[#232F45] text-white">
        <div className={`min-h-screen mx-auto max-w-[1800px]
                         max-lg:flex max-lg:flex-col-reverse justify-center gap-4
                         max-lg:landscape:grid lg:grid grid-cols-2 grid-rows-1 items-center 2xl:landscape:items-end`}>

          <div className="h-full grid content-center gap-2 text-center">
            <h1 className="font-bold text-6xl">CoreNion</h1>
            <h2 className="font-medium text-4xl">Yuta Obara</h2>

            <p className="font-light text-xl my-3">
              Student Programmer
              <br />
              Interested in Web Development.<br />
              (Next,js, React, etc...)
            </p>
          </div>

          <Image
            src="/profile.svg"
            alt="Profile Picture"
            priority={true}
            height={1000}
            width={1000}
            className="max-lg:portrait:max-h-[60vh] max-lg:mx-auto max-lg:portrait:w-1/2 max-sm:portrait:w-3/4 max-lg:landscape:h-[80vh] max-sm:mt-8"
          />
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 md:py-12 xl:py-24 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-4xl">小原 悠太</h2>
          <span className="text-xl">KADOKAWAドワンゴ情報工科学院<br />専門部所属 2年生 (3年制, 27卒)</span>
          <span className="w-fit rounded-full border py-1 px-2">Web制作会社でアルバイト中</span>

          <p className="mt-4">
            物心付いた頃からパソコンに触れ、中学生の頃にはプログラミングに興味を持ち始めました。
            <br />
            高校生の頃は、日頃の生活の中で「あったらいいな」と思ったアイデアを、さまざまな技術を活用してカタチにすることに挑戦してきました。
          </p>
          <p>
            専門学校に入学してからは、実務や学校での学びを通して、より実践的なスキルの習得に励んでいます。
            <br />
            現在は、主にWebアプリケーションの開発に興味を持ち、Next.jsやReactなどの勉強をしています。
          </p>
        </div>

        <div className="grid gap-4">
          <Achievement title={"Campus Dashboard"} description={"必要な情報を一目で確認できる、タイマー付きのダッシュボードサイト。\nキャンパスで使う時計やタイマーなどを、一つのサイトにまとめて使いやすくしたいと思い開発しました。"} url="https://cpd.cnion.dev/"
            icon={<Image src={"/cp-dashboard/icon.svg"} alt={"Campus Dashboardのアイコン"} width={"400"} height={"400"}></Image>}>
          </Achievement>
          <Achievement title={"Open FileTrucker"} description={"どんな端末でも使える、サーバーを介さないファイル共有アプリ。\n多デバイス間でのファイル共有に不便を感じたことから生まれました。"} url="/trucker"
            icon={<Image src={"/trucker/icon.svg"} alt={"FileTruckerのアイコン"} width={"400"} height={"400"}></Image>}>
          </Achievement>
          <Achievement title={"Leasy"} description={"「あなただけの」使いやすい暗記帳で学習しよう。"} url="/leasy"
            icon={<Image src={"/leasy/icon.svg"} alt={"Leasyのアイコン"} width={"400"} height={"400"}></Image>}>
          </Achievement>
        </div>
      </section>

      <section className="pl-6 pr-4 py-12 md:p-12 bg-slate-900 text-white grid justify-center items-center">
        <h2 className="font-bold text-4xl text-center">Timeline</h2>

        <ol className="relative border-l-4 border-green-200">
          <Timeline className="mb-5 ml-4" time="Aug 2020" title="Archivtterを公開">
            X/旧Twitterのツイート検索コマンド(since/until)をより簡単に使えるようにするために開発しました。
            <br />
            また、
            <Link className="underline" href="https://progedu.github.io/webappcontest/2020/summer/result/" target="_blank"
              rel="noreferrer">動くWEBページコンテスト 2020夏</Link>
            にも応募しました。
          </Timeline>
          <Timeline className="mb-5 ml-4" time="Jan 2021" title="Ny0bi Toolの初版をリリース">
            当時学習に使っていたN予備校にダークモードが欲しいと思い、Chrome拡張機能を開発しました。
            <br />
            公開当初はファイル形式でのインストールでしたが、後にChrome Web Storeでの配信も開始しました。
            <br />
            また、この作品は同年4月に開催された「磁石祭 2021」(N/S高・N中等部文化祭)のプログラミングブースに出展し、
            <Link className="underline" href="https://x.com/nhigh_info/status/1386241067222249473" target="_blank"
              rel="noreferrer">N/S高の公式X</Link>
            などでも紹介されました。
          </Timeline>
          <Timeline className="mb-3 ml-4" time="Apr 2021" title="N高等学校に入学、通学コースに所属" color="bg-zinc-400" />
          <Timeline className="mb-10 ml-4" time="Oct 2021" title="nnnCheckerを公開">
            初めて公開した、サーバーを用いた自作のWebアプリです。
            <br />
            N/S高生であることを手軽に確実に証明できるようにするために開発しました。
          </Timeline>
          <Timeline className="mb-10 ml-4" time="Apr 2022" title="Open FileTruckerの初版をリリース、「磁石祭 2022」に出展">
            Windows PCからiPhoneなど異なるプラットフォーム間でのファイル共有に不便を感じ、ローカルネットワークを生かしたシンプルな仕様で共有できるようにするために開発しました。
            <br />
            磁石祭には今回はCoreNion独自の企画で<Link className="underline" href="https://nnn.ed.jp/school_festival/2022/plan/jqv9kyeuht-b/"
              target="_blank" rel="noreferrer">オンラインで出展</Link>しました。
          </Timeline>
          <Timeline className="mb-8 ml-4" time="Sep 2022 ~ Oct 2022" title="Open FileTruckerをアプリ甲子園へ提出、ファイナリストに">
            初の外部コンテストへの応募でしたが、ファイナリストまで登ることができました！
            <br />
            また、決勝大会では、公開された場では初めて
            <Link className="underline" href="https://www.youtube.com/watch?v=rnzmYaCPlzs" target="_blank"
              rel="noreferrer">自分の制作物についてのプレゼンテーション</Link>
            を行いました。
            <br />
            <Link className="underline" href="https://nnn.ed.jp/news/blog/archives/15912/" target="_blank">N高に掲載されたニュース</Link>
          </Timeline>
          <Timeline className="mb-10 ml-4" time="Apr 2023" title="Leasyの初版をリリース、「磁石祭 2023」に出展">
            私が初めてアプリストアでリリースしたアプリです！
            <br />
            単語帳感覚で使える、繰り返し学習などに便利な暗記帳アプリを作りたいと思い、開発しました。
            <br />
            今回も磁石祭には
            <Link className="underline" href="https://nnn.ed.jp/school_festival/2023/plan/#ex-okejlp_3-l8v" target="_blank"
              rel="noreferrer">オンラインで出展</Link>
            しました。
          </Timeline>
          <Timeline className="mb-5 ml-4" time="Dec 2023 ~ Mar 2024" title="CP Dashboardを開発/公開">
            キャンパスの時計やタイマー機能を改善しようと思い、それらを1画面にまとめたダッシュボードWebアプリを開発しました。
            <br />
            今回は電子工作への挑戦も兼ねて、Arudinoに接続されたセンサーからの温湿度や気圧データを表示する機能も追加しました。
            <br />
            一部の機能は生徒や先生のフィードバックを受けて追加しました！
            <br />
            <Link className="underline" href="https://nnn.ed.jp/blog/archives/jp_hg75o5jt/" target="_blank">N高ブログでのインタビュー</Link>
          </Timeline>
          <Timeline className="ml-4" time="Mar 2024" title="N高等学校を卒業" color="bg-zinc-300" />
          <Timeline className="ml-4" time="Apr 2024" title="KADOKAWAドワンゴ情報工科学院(バンタングループ) 専門部に入学" color="bg-red-300">
            高校卒業後は、より実践的なプログラミングを学ぼうと思い、KADOKAWAドワンゴ情報工科学院に進学しました。
            <br />
            また、この頃から、将来はWeb系のエンジニアとして働きたいと思うようになりました。
          </Timeline>
          <Timeline className="ml-4" time="Oct 2024" title="株式会社アストラザスタジオにアルバイト採用" color="bg-red-300">
            現在も学校に通いながら勤務しています。
          </Timeline>
          <Timeline className="ml-4" time="Mar 2025" title="社内向けの出退勤管理Webアプリを開発">
            社内の出退勤管理をより簡単に行えるようにするために、Next.js / Reactを用いて開発しました。
            <br />
            静的なWebアプリとして開発し、データベースにはSqlite.wasmを使用しました。
          </Timeline>
          <Timeline className="ml-4" time="Mar 2025" title="プロフィールサイトをNext.js / Reactに移行">
            サイトデザインのリニューアルも行いました。
          </Timeline>
        </ol>
      </section>

      <section className="px-4 py-12 md:p-12 grid justify-center items-center">
        <h2 className="font-bold text-4xl text-center">Contact</h2>
        <p className="my-3 text-center"> 
          ＊メールアドレスなどの詳細は、 
          <Link href="/accounts" className="underline">各アカウント一覧</Link>
          を参照してください。 
        </p>
        <div className="mt-4 flex flex-row flex-wrap gap-4 justify-center">
          <Account title="X (Twitter)" icon="carbon:logo-x" url="https://x.com/CoreiNion/" accountID="@CoreiNion" bgColor="bg-white border border-grey-200" textColor="text-black"></Account>
          <Account title="GitHub" icon="carbon:logo-github" url="https://github.com/CoreNion" accountID="@CoreNion" bgColor="bg-gray-100 border border-grey-200" textColor="text-black"></Account>
        </div>
      </section>
    </main>
  );
}
