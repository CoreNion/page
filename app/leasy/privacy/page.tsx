export const metadata = {
  title: 'プライバシーポリシー | Leasy',
  description: 'Leasyのプライバシーポリシー。',
  openGraph: {
    title: 'Leasy プライバシーポリシー',
    url: '/leasy/privacy',
    type: 'website',
    siteName: "CoreNion's Page",
  },
  twitter: {
    card: 'summary',
    site: '@CoreiNion',
    creator: '@CoreiNion',
  },
};

export default function LeasyPrivacyPage() {
  return (
    <div className="mx-auto max-w-screen-2xl py-24 px-4 grid gap-4">
      <section>
        <h1 className="text-3xl font-bold">Leasy プライバシーポリシー</h1>
        <p>
          開発者は、Leasyにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">個人情報の定義</h2>
        <p>
          「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">ユーザーデータの定義</h2>
        <p>
          「ユーザーデータ」とは、ユーザーがLeasyを利用する際に、アプリ内で保持されるデータを指します。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">個人情報やユーザーデータの利用目的</h2>
        <p>
          開発者は、お問い合わせや適切なユーザーサポートなどを行うために、お名前やメールアドレスなどの個人情報を入力いただいたり、ユーザーデータの提出を求める場合があります。取得した個人情報やユーザーデータは、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">クラウドサービスについて (About Cloud Services)</h2>
        <p>
          Leasyでは、ユーザーデータを他社のクラウドサービスに保存することができます。クラウドサービスを利用する場合は、他社の規約やプライバシーポリシーに同意したものとみなします。
          <br />
          Leasy can save user data to other cloud services. If you use a cloud service, you are deemed to have agreed to the terms and conditions and privacy policy of the other company.
        </p>
        <h3 className="text-xl font-bold mt-2">Googleドライブへのアクセスついて (About Access to Google Drive)</h3>
        <p>
          Leasyでは、学習帳データをGoogleドライブに保存(同期)し、他の端末からGoogleドライブにある学習帳データを読み込むことができます。
          <br />
          本サービスは、上記目的以外で、ユーザーが利用するGoogleドライブのデータにアクセスすることはありません。また、情報はユーザーの同意なく開発者や第三者に提供することはありません。
          <br />
          Leasy can save (sync) learning notebook data to Google Drive and read learning notebook data from Google Drive on other devices.
          <br />
          For purposes other than the above, this service does not access the data of Google Drive used by the user. In addition, information will not be provided to developers or third parties without the user&apos;s consent.
        </p>
        <h3 className="text-xl font-bold mt-2">iCloud Driveへのアクセスについて (About Access to iCloud Drive)</h3>
        <p>
          Leasyでは、学習帳データをiCloud Driveに保存(同期)し、他の端末からiCloud Driveにある学習帳データを読み込むことができます。
          <br />
          本サービスは、上記目的以外で、ユーザーが利用するiCloud Driveのデータにアクセスすることはありません。また、情報はユーザーの同意なく開発者や第三者に提供することはありません。
          <br />
          Leasy can save (sync) learning notebook data to iCloud Drive and read learning notebook data from iCloud Drive on other devices.
          <br />
          For purposes other than the above, this service does not access the data of iCloud Drive used by the user. In addition, information will not be provided to developers or third parties without the user&apos;s consent.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">個人情報やユーザーデータの第三者提供</h2>
        <p>
          開発者は、個人情報やユーザーデータの取扱いについて、以下の場合を除いて、あらかじめご本人の同意を得ることなく第三者に提供することはありません。
        </p>
        <ol className="list-decimal list-inside">
          <li>法令に基づく場合</li>
          <li>裁判所、警察などの公的機関から開示を求められた場合</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-bold">改定について</h2>
        <p>
          開発者は法令の変更やサービスの提供内容変更などに伴い、本ウェブサイトポリシーを予告なく変更する場合があります。
        </p>
        <p>2023年8月24日 改定</p>
      </section>
    </div>
  );
}
