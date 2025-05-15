import Image from "next/image";
import AppFeature from "@/components/app/feature";
import AppDownload from "@/components/app/download";

export const metadata = {
  title: "Open FileTrucker | CoreNion",
  description: "どんな端末でも使える、サーバーを介さないファイル共有アプリ。",
  openGraph: {
    title: "Open FileTrucker | CoreNion",
    description: "どんな端末でも使える、サーバーを介さないファイル共有アプリ。",
    url: "https://page.cnion.dev/trucker/",
    type: "website",
    siteName: "CoreNion's Page",
    images: [
      {
        url: "/trucker/ogp.png",
        width: 1200,
        height: 630,
        alt: "Open FileTruckerの紹介画像"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@CoreiNion",
    creator: "@CoreiNion",
    title: "Open FileTrucker | CoreNion",
    description: "どんな端末でも使える、サーバーを介さないファイル共有アプリ。",
    images: ["/trucker/ogp.png"]
  },
  appleItunesApp: {
    appId: "6504818191"
  },
};

export default function TruckerPage() {
  return (
    <main className="bg-[#faf7f5] text-black">
      <section className="min-h-screen bg-gradient-to-r from-blue-100 to-emerald-100 grid place-content-center">
        <div className="grid grid-cols-1 justify-items-center gap-2 max-w-screen-2xl p-5">
          <Image src="/trucker/icon.svg" alt="FileTruckerのアイコン" width={500} height={500} className="rounded-3xl w-44 md:w-60 shadow-xl" />
          <h1 className="text-4xl md:text-5xl font-bold">Open FileTrucker</h1>
          <p className="text-lg text-center">どんな端末でも使える、サーバーを介さないファイル共有アプリ。</p>
        </div>
      </section>

      <section className="mx-auto py-12 max-w-screen-2xl">
        <h2 className="text-4xl font-bold text-center mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 m-3 justify-center">
          <AppFeature title="Local Network">
            <span>このアプリは通信に外部のサーバーを用いないため、同じネットワークに接続された端末であれば高速に共有することが出来ます！</span>
            <br />
            <span>また、暗号化にも対応しているため、公共無線LANなど信用できないネットワークでも安全に共有することが出来ます！</span>
          </AppFeature>
          <AppFeature title="Cross-Platform">
            <span>このアプリはクロスプラットフォームで開発されているため、プラットフォームを気にすることなく、ファイルや写真共有を簡単に行うことができます！</span>
          </AppFeature>
          <AppFeature title="Simple">
            <span>ファイル共有に特化した、操作しやすく分かりやすいUIに設計しました。</span>
            <br />
            <span>デバイス検知機能により、ワンタップで他の端末にファイルを送信することが出来ます！</span>
          </AppFeature>
          <AppFeature title="Open Source">
            <span className="my-2">ソースコードは全てGitHubで公開されています！</span>
            <br />
            <a className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full mt-2 transition" href="https://github.com/CoreNion/OpenFileTrucker" target="_blank" rel="noreferrer">GitHub</a>
          </AppFeature>
        </div>
      </section>

      <section className="mx-auto py-12 max-w-screen-2xl">
        <h2 className="text-4xl font-bold text-center mb-6">Downloads</h2>
        <div className="flex flex-row justify-center items-stretch gap-5 m-3 flex-wrap">
          <AppDownload title="Android" version="Android 11 以上" desc="Chromebookにもインストール可能です。" id="android">
            <a href="https://play.google.com/store/apps/details?id=dev.cnion.trucker" target="_blank" rel="noreferrer">
              <Image className="h-14 w-auto" alt="Google Play で手に入れよう" src="/assets/store/play.svg" width={160} height={55} />
            </a>
          </AppDownload>
          <AppDownload title="iOS" version="iOS 15.6 以上" desc="ローカルネットワークの権限は必ず許可してください。" id="ios">
            <a href="https://apps.apple.com/jp/app/open-filetrucker/id6504818191" target="_blank" rel="noreferrer">
              <Image className="h-14 w-auto" src="/assets/store/appstore.svg" alt="Download on the App Store" width={160} height={55} />
            </a>
          </AppDownload>
        </div>
        <div className="flex flex-row justify-center items-stretch gap-5 m-3 flex-wrap">
          <AppDownload title="Windows" version="Windows 10 1903 以上" desc="x64のみ対応、Microsoft Storeには審査に承認され次第配信されます。" id="windows">
            <a className="inline-block bg-blue-300 hover:bg-blue-400 text-black font-semibold py-2 px-4 rounded-xl transition" href="https://github.com/CoreNion/OpenFileTrucker/releases/latest/download/windows-x64.zip" target="_blank" rel="noreferrer">Download x64</a>
          </AppDownload>
          <AppDownload title="macOS" version="macOS 12.5 以上" desc="Intelチップもサポートするネイティブ版は、審査に承認され次第配信されます。" id="macos">
            <a href="https://apps.apple.com/jp/app/open-filetrucker/id6504818191" target="_blank" rel="noreferrer">
              <Image className="h-14 w-auto" src="/assets/store/appstore_mac.svg" alt="Download on the App Store" width={160} height={55} />
            </a>
          </AppDownload>
          <AppDownload title="Linux (Bundle)" version="Desktop" desc="GUIアプリのため、デスクトップの環境が必要です。※広範囲な動作確認は困難なため、一部環境では動作しない可能性があります。" id="linux">
            <a className="block bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-xl transition" href="https://github.com/CoreNion/OpenFileTrucker/releases/latest/download/linux-x86_64.zip" target="_blank" rel="noreferrer">x86_64</a>
            <a className="block bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-xl transition" href="https://github.com/CoreNion/OpenFileTrucker/releases/latest/download/linux-aarch64.zip" target="_blank" rel="noreferrer">arm64</a>
          </AppDownload>
        </div>
      </section>
    </main>
  );
}
