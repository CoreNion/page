"use client";
import { useMemo, useState } from "react";

export default function ArchivtterClient() {
  const [username, setUsername] = useState('');
  const [sinceDate, setSinceDate] = useState('');
  const [untilDate, setUntilDate] = useState('');

  const searchUrl = useMemo(() => {
    if (!username || !sinceDate || !untilDate) return '';
    return `https://x.com/search?q=from%3A${username}%20since%3A${sinceDate}%20until%3A${untilDate}&src=typed_query&f=live`;
  }, [username, sinceDate, untilDate]);

  return (
    <article className="max-w-screen-2xl mx-auto px-4">
      <section className="grid max-lg:grid-rows-3 lg:grid-cols-3 gap-4 my-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-4">
          <h2 className="text-2xl font-bold text-center">Step 1: ユーザー名を入力</h2>
          <p>検索したいユーザーの、@から始まるユーザー名を入力してください。</p>
          <div className="grid grid-cols-[auto_1fr]">
            <span className="inline-flex items-center px-4 bg-gray-800 text-white text-lg rounded-l-lg">@</span>
            <input
              type="text"
              name="username"
              className="flex-1 p-3 border rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="ユーザー名"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-4">
          <h2 className="text-2xl font-bold text-center">Step 2: 検索する期間の開始日を設定</h2>
          <p>検索する日付の範囲の、開始日を入力してください。</p>
          <input
            type="date"
            name="sinceDate"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={sinceDate}
            onChange={e => setSinceDate(e.target.value)}
            required
          />
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-4">
          <h2 className="text-2xl font-bold text-center">Step 3: 検索する期間の終了日を設定</h2>
          <p>検索する日付の範囲の、終了日を入力してください。</p>
          <input
            type="date"
            name="sinceDate"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={untilDate}
            onChange={e => setUntilDate(e.target.value)}
            required
          />
        </div>
      </section>
      
      <div className="h-px bg-gray-200 my-8"></div>
      
      <section className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">作成結果</h2>
        <div className="w-full overflow-x-auto bg-gray-50 border rounded-lg p-4 mb-4 font-mono">
          <code className="whitespace-nowrap">{searchUrl || '入力が完了すると、ここにリンクが表示されます'}</code>
        </div>
        <a
          className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-colors
            ${searchUrl
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
          href={searchUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => !searchUrl && e.preventDefault()}
        >
          検索結果にアクセス
        </a>
      </section>
    </article>
  );
}