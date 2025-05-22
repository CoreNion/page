import Image from "next/image";
import Link from "next/link";
import AppFeature from "@/components/app/feature";
import AppDownload from "@/components/app/download";

export const metadata = {
  title: "Leasy | CoreNion",
  description: "「あなただけの」使いやすい暗記帳で学習しよう。",
  openGraph: {
    title: "Leasy | CoreNion",
    description: "「あなただけの」使いやすい暗記帳で学習しよう。",
    images: ["/leasy/ogp.png"],
    url: "/leasy/",
    type: "website",
    siteName: "CoreNion's Page",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CoreiNion",
    creator: "@CoreiNion",
  },
  appleItunesApp: {
    appId: "6448246576"
  },
};

function OSLink({ color, text, hoverColor, label, href }:
  { color: string; text: string; hoverColor: string; label: string; href: string }) {
  return (
    <a
      className={`px-4 py-2 rounded-lg font-semibold text-center transition min-w-[120px] ${color} ${text} ${hoverColor}`}
      href={href}
    >
      {label}
    </a>
  );
}

export default function LeasyPage() {
  return (
    <main className="bg-[#faf7f5] text-black">
      <section className="min-h-screen bg-gradient-to-r from-pink-100 to-teal-100 flex items-center justify-center py-16">
        <div className="max-w-screen-2xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-5">
          <div className="order-2 lg:order-1 hidden lg:flex justify-center">
            <Image className="drop-shadow-xl h-[60vh] object-contain" src="/leasy/screen/sc1.png" alt="Leasy スクリーンショット" width={400} height={800} />
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-center gap-7 w-full">
            <div className="flex flex-col items-center gap-4 w-full lg:flex-row lg:items-center lg:justify-center lg:gap-8">
              <Image className="rounded-3xl w-32 h-32 shadow-xl mb-2 lg:mb-0" src="/leasy/icon.svg" alt="アイコン" width={500} height={500} />
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h1 className="text-5xl font-bold text-black text-center lg:text-left">Leasy</h1>
                <p className="text-lg text-black text-center lg:text-left">「あなただけの」暗記帳で学習しよう！</p>
                <Link className="underline text-blue-700 hover:text-blue-900" href="/leasy/privacy">プライバシーポリシー</Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <OSLink color="bg-gray-300" text="text-black" hoverColor="hover:bg-gray-400" label="iOS" href="#ios" />
              <OSLink color="bg-green-400" text="text-black" hoverColor="hover:bg-green-500" label="Android" href="#android" />
              <OSLink color="bg-sky-800" text="text-white" hoverColor="hover:bg-sky-900" label="Windows" href="#windows" />
              <OSLink color="bg-zinc-800" text="text-white" hoverColor="hover:bg-zinc-900" label="macOS" href="#macos" />
              <OSLink color="bg-yellow-400" text="text-black" hoverColor="hover:bg-yellow-500" label="Web (PWA)" href="#web" />
            </div>
            <a className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold text-center transition hover:bg-gray-900 w-full max-w-xs" href="https://github.com/CoreNion/Leasy" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <div className="relative lg:hidden -top-20 sm:-top-40 -mb-28 sm:-mb-40">
        <Image className="m-auto max-w-xs drop-shadow-2xl" src="/leasy/screen/sc1.png" alt="スクリーンショット" width={400} height={800} />
      </div>

      <section className="mx-auto max-w-screen-2xl my-12">
        <h2 className="text-4xl font-bold text-center text-black">主な特徴</h2>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-7 m-5">
          <AppFeature title="使いやすい暗記帳！">
            <p className="my-2 text-black">
              このアプリは、自分で覚えたい単語やフレーズなどを登録して、暗記帳のように暗記学習が出来るアプリです。
              <br />
              問題形式は4択問題か入力問題で、不正解だった問題に絞って復習できる学習モードや、ランダムに出題されるテストモードもあります！
            </p>
          </AppFeature>
          <AppFeature title="端末内で完結、そしてオープンソース！">
            <p className="my-2 text-black">
              問題などは全て端末内のみに保存されます。そのため、アカウントを作成する必要はなく、作成した問題が不正に利用されることもありません！
              <br />
              アプリは無料で、GitHubでソースコードを公開しています！
            </p>
          </AppFeature>
        </div>
      </section>

      <section className="mx-auto my-7 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-black m-5">Downloads</h2>
        <div className="flex flex-row justify-center gap-5 m-5 flex-wrap">
          <AppDownload className="flex-1" title="Android" version="Android 8.1 以降" desc="Chromebookにもインストール可能です。" id="android">
            <a href="https://play.google.com/store/apps/details?id=com.corenion.mimosa&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank" rel="noreferrer">
              <Image className="h-14 w-auto" alt="Google Play で手に入れよう" src="/assets/store/play.svg" width={160} height={55} />
            </a>
          </AppDownload>
          <AppDownload className="flex-1" title="iOS" version="iOS 14 以降" desc="iCloud Driveによるデータの同期に対応しています。" id="ios">
            <a href="https://apps.apple.com/jp/app/leasy/id6448246576?itsct=apps_box_badge&amp;itscg=30200" target="_blank" rel="noreferrer">
              <Image className="h-14 w-auto" src="/assets/store/appstore.svg" alt="Download on the App Store" width={160} height={55} />
            </a>
          </AppDownload>
        </div>
        <div className="flex flex-row justify-center gap-5 m-5 flex-wrap">
          <AppDownload className="flex-1" title="Windows" version="Windows 10 以降" desc="x64のみ対応しています。" id="windows">
            <a href="https://apps.microsoft.com/detail/9pnxgm6npf1q?referrer=appbadge&launch=true&mode=full" target="_blank" rel="noreferrer">
              <Image className="h-14 w-auto" src="/assets/store/ms.svg" alt="Microsoft Storeからダウンロード" width={160} height={55} />
            </a>
          </AppDownload>
          <AppDownload className="flex-1" title="macOS" version="macOS 11.0 以降" desc="iCloud Driveによるデータの同期に対応しています。" id="macos">
            <a href="https://apps.apple.com/jp/app/leasy/id6448246576?itsct=apps_box_badge&amp;itscg=30200" target="_blank" rel="noreferrer">
              <Image className="h-14 w-auto" src="/assets/store/appstore_mac.svg" alt="Download on the Mac App Store" width={160} height={55} />
            </a>
          </AppDownload>
        </div>
        <div className="flex flex-row justify-center gap-5 m-5 flex-wrap">
          <AppDownload className="flex-1" title={"Web (PWA)"} version={"Preview"} desc={"ブラウザ(ウェブ)上で完結するバージョンです。PWA版を開いた後に共有ボタンなどからホーム画面に追加することで、アプリのように使えます。\n安定性の都合上、アプリ版の利用を推奨しますが、アプリをインストールできない場合などはこちらをご利用ください。\nなお、バックアップ機能を利用し、後からアプリ版に学習データを移行することは可能です。"} id={"web"}>
            <a className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold text-center transition hover:bg-yellow-500" href="https://leasy-pwa.cnion.dev/" target="_blank" rel="noreferrer">PWA版を開く</a>
          </AppDownload>
        </div>
      </section>
    </main>
  );
}
