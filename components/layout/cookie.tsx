"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Icon } from '@iconify/react';
import { GoogleTagManager } from "@next/third-parties/google";

import useLocalStorageState from "use-local-storage-state";

/**
 * Cookieに同意するか確認し、同意している場合のみに解析系のタグを読み込むコンポーネント
 */
export default function CookieConsent() {

  // サーバーレンダリングによる物かどうかを判定
  // https://github.com/astoilkov/use-local-storage-state/issues/56#issuecomment-1308599903
  const useIsServerRender = useSyncExternalStore(() => {
    return () => { }
  }, () => false, () => true);

  const [showDialog, setShowDialog] = useState(false);
  const [consent, setConsent] = useLocalStorageState<boolean | undefined>('cookie-consent', {
    defaultValue: undefined,
  });

  useEffect(() => {
    if (consent === undefined && !useIsServerRender) {
      setShowDialog(true);
    } else {
      setShowDialog(false);
    }
  }, [consent, useIsServerRender]);

  const handleAccept = () => {
    setConsent(true);
    setShowDialog(false);
  };

  const handleDecline = () => {
    const retracted = consent !== undefined;
    setConsent(false);
    setShowDialog(false);

    // 同意を取り消した場合、ページをリロードして解析タグを確実に削除
    if (retracted) {
      window.location.reload(); 
    }
  };

  return (
    <>
      <button className="cursor-pointer bg-yellow-100 hover:bg-yellow-300 transition-all duration-300 text-black rounded-full p-2 " onClick={() => setShowDialog(true)}>
        <Icon icon="carbon:data-analytics" height="25px"></Icon>
      </button>
      {consent ? <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTAG_ID!}></GoogleTagManager> : null}
      {showDialog && <div className="fixed z-50 bottom-0 left-0 right-0 m-4 p-3 max-w-5xl rounded-2xl bg-[#222b3adb] backdrop-blur-xs text-white max-md:text-center text-sm">
        <strong className="font-bold">当サイトでは、使用状況のデータの収集のために解析ツールなどを使用することがあります。</strong>
        <p>
          このデータは匿名で収集されており、個人を特定するものではありません。{ consent === undefined ? "データの収集に同意される場合は、「同意」ボタンを押してください。" : `現在の設定では、データの収集${consent ? "に同意しています。" : "を収集を拒否しています。"}` }
          <br />
          この設定は下部にある
          <Icon icon="carbon:data-analytics" width="1.2em" className="inline-block" />
          から、いつでも変更することができます。
        </p>
        <button onClick={handleAccept} className="bg-green-700 hover:bg-green-600 px-4 py-2 m-2 rounded-full font-bold cursor-pointer">
          同意
        </button>
        <button onClick={handleDecline} className="bg-red-700 hover:bg-red-600 px-4 py-2 m-2 rounded-full font-bold cursor-pointer">
          拒否
        </button>
      </div>
      }
    </>
  );
}