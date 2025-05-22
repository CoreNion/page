import React from "react";
import { Icon } from '@iconify/react';

import Account from "@/components/top/contact";

export const metadata = {
  title: 'Accounts | CoreNion',
  description: "CoreNion / Yuta Obaraの連絡先一覧ページ。",
  openGraph: {
    title: 'Accounts | CoreNion',
    description: "CoreNion / Yuta Obaraの連絡先一覧ページ。",
    url: 'https://cnion.dev/accounts',
    siteName: "CoreNion's Page",
    images: [
      {
        url: '/profile.png',
        width: 1000,
        height: 1000,
        alt: "Profile picture",
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

export default function AccountsPage() {
  const mail = process.env.NEXT_PUBLIC_MAIL!;
  return (
    <main className="w-full pt-24 max-w-screen-xl p-4 xl:mx-auto">
      <section className="grid gap-4 my-5">
        <h1 className="text-3xl font-bold">各アカウント一覧</h1>
        <div className="bg-amber-300 p-3 rounded-2xl">
          <Icon icon="carbon:warning" className="inline text-2xl mr-2" />
          <span>学内Slackなどの非公開の連絡先を持っている場合、そちらの方を使用することを推奨します。</span>
        </div>
      </section>

      <section className="grid gap-2 my-5">
        <h2 className="text-2xl font-medium"># Email Adress</h2>
        <Account title="Primary Adress" icon="carbon:email" url={`mailto:${mail}`} accountID={mail} bgColor="bg-blue-50 border border-grey-200" textColor="text-black"></Account>
        <p>ここで公開しているメールアドレスは、GoogleアカウントやGitなどでも使用しています。</p>
      </section>

      <section className="grid gap-2 my-5">
        <h2 className="text-2xl font-medium"># Social Accounts</h2>
        <div className="flex flex-wrap gap-5 lg:gap-7 justify-start">
          <Account title="X (Twitter)" icon="carbon:logo-x" url="https://x.com/CoreiNion/" accountID="@CoreiNion" bgColor="bg-white border border-grey-200" textColor="text-black"></Account>
          <Account title="GitHub" icon="carbon:logo-github" url="https://github.com/CoreNion" accountID="@CoreNion" bgColor="bg-gray-100 border border-grey-200" textColor="text-black"></Account>
        </div>
      </section>
    </main>
  );
}
