import ArchivtterClient from "./client";

export const metadata = {
  title: 'Archivtter | CoreNion',
  description: 'X(旧Twitter)で日付検索をする人のための支援ツールです。過去のツイートを簡単に検索できるリンクを簡単に発行できます。',
  openGraph: {
    title: 'Archivtter - X(旧Twitter)での日付検索の支援ツール',
    description: 'X(旧Twitter)で日付検索をする人のための支援ツールです。過去のツイートを簡単に検索できるリンクを簡単に発行できます。',
    images: ['/archivtter/ogp.jpg'],
    type: 'website',
    siteName: "CoreNion's Page",
    url: 'https://page.cnion.dev/archivtter/',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CoreiNion',
    creator: '@CoreiNion',
    images: ['/archivtter/ogp.jpg'],
  },
  icons: {
    icon: '/archivtter/icon.png',
  },
};

export default function ArchivtterPage() {
  return (
    <main className="bg-[#faf7f5] text-black pb-10 h-full w-full">
      <section className="bg-gradient-to-r from-sky-100 to-blue-100 pt-24 pb-10 px-4 grid items-center gap-4 text-center">
        <h1 className="text-5xl font-bold text-black">Archivtter</h1>
        <p className="text-lg text-black">過去のXポスト(ツイート)を、日付の範囲で簡単に検索できるリンクを3 STEPで発行します！</p>
      </section>
      
      <ArchivtterClient />
    </main>
  );
}
