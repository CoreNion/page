<script setup lang="ts">
const siteURL = useSiteConfig().url;
const baseURL = useRuntimeConfig().app.baseURL;

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: `${useRuntimeConfig().app.baseURL}leasy/icon.svg'`
    },
    {
      rel: 'alternate icon',
      type: 'image/ico',
      href: `${useRuntimeConfig().app.baseURL}leasy/favicon.ico`,
    }
  ],
});

useSeoMeta({
  title: 'プライバシーポリシー | Leasy',
  ogTitle: 'Leasy プライバシーポリシー',
  ogUrl: `${siteURL}${baseURL}leasy/privacy`,
  ogType: 'website',
  ogSiteName: "CoreNion's Page",
  twitterCard: 'summary',
  twitterSite: '@CoreiNion',
  twitterCreator: '@CoreiNion',
});
</script>

<template>
  <div class="mx-auto max-w-screen-2xl">
    <div class="m-4 flex flex-col gap-3 justify-center">
      <p>
        <h1 class="text-3xl font-bold">Leasy プライバシーポリシー</h1>
        開発者は、Leasyにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
      </p>
      <p>
        <h2 class="text-2xl font-bold">個人情報の定義</h2>
        「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
      </p>
      <p>
        <h2 class="text-2xl font-bold">ユーザーデータの定義</h2>
        「ユーザーデータ」とは、ユーザーがLeasyを利用する際に、アプリ内で保持されるデータを指します。
      </p>
      <p>
        <h2 class="text-2xl font-bold">個人情報やユーザーデータの利用目的</h2>
        開発者は、お問い合わせや適切なユーザーサポートなどを行うために、お名前やメールアドレスなどの個人情報を入力いただいたり、ユーザーデータの提出を求める場合があります。取得した個人情報やユーザーデータは、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
      </p>
      <p>
        <h2 class="text-2xl font-bold">クラウドサービスについて (About Cloud Services)</h2>
        Leasyでは、ユーザーデータを他社のクラウドサービスに保存することができます。クラウドサービスを利用する場合は、他社の規約やプライバシーポリシーに同意したものとみなします。
        <br />
        Leasy can save user data to other cloud services. If you use a cloud service, you are deemed to have agreed to the terms and conditions and privacy policy of the other company.

        <h3 class="text-xl font-bold">Googleドライブへのアクセスついて (About Access to Google Drive)</h3>
        Leasyでは、学習帳データをGoogleドライブに保存(同期)し、他の端末からGoogleドライブにある学習帳データを読み込むことができます。
        <br />
        Leasy can save (sync) learning notebook data to Google Drive and read learning notebook data from Google Drive on other devices.
        <br />
        <br />
        本サービスは、上記目的以外で、ユーザーが利用するGoogleドライブのデータにアクセスすることはありません。また、情報はユーザーの同意なく開発者や第三者に提供することはありません。
        <br />
        For purposes other than the above, this service does not access the data of Google Drive used by the user. In addition, information will not be provided to developers or third parties without the user's consent.
        <h3 class="text-xl font-bold">
        iCloud Driveへのアクセスについて (About Access to iCloud Drive)</h3>
        Leasyでは、学習帳データをiCloud Driveに保存(同期)し、他の端末からiCloud Driveにある学習帳データを読み込むことができます。
        <br />
        Leasy can save (sync) learning notebook data to iCloud Drive and read learning notebook data from iCloud Drive on other devices.
        <br />
        <br />
        本サービスは、上記目的以外で、ユーザーが利用するiCloud Driveのデータにアクセスすることはありません。また、情報はユーザーの同意なく開発者や第三者に提供することはありません。
        <br />
        For purposes other than the above, this service does not access the data of iCloud Drive used by the user. In addition, information will not be provided to developers or third parties without the user's consent.
      </p>
      <p>
        <h2 class="text-2xl font-bold">個人情報やユーザーデータの第三者提供</h2>
        開発者は、個人情報やユーザーデータの取扱いについて、以下の場合を除いて、あらかじめご本人の同意を得ることなく第三者に提供することはありません。
        <br />1.法令に基づく場合
        <br />2.裁判所、警察などの公的機関から開示を求められた場合
      </p>
      <p>
        <h2 class="text-2xl font-bold">改定について</h2>
        開発者は法令の変更やサービスの提供内容変更などに伴い、本ウェブサイトポリシーを予告なく変更する場合があります。
      </p>
      <p>
        2023年8月24日 改定
      </p>
    </div>
  </div>
</template>