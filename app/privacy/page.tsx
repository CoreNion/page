export const metadata = {
  title: "プライバシーポリシー | CoreNion",
  description: "CoreNionが提供するアプリやサービス、Webサイトのプライバシーポリシー。",
}

export default function PrivacyPolicy() {
  return (
    <main className="pt-22 bg-white text-black max-w-6xl mx-auto">
      <article className="m-4 flex flex-col gap-3 justify-center">
        <h1 className="text-3xl font-bold">プライバシーポリシー</h1>
        CoreNionは、本ウェブサイト上やCoreNionが開発したアプリで提供するサービスにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。

        <h2 className="text-2xl font-bold">個人情報の定義</h2>
        「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。

        <h2 className="text-2xl font-bold">個人情報の利用目的</h2>
        CoreNionは、お問い合わせや適切なユーザーサポートなどを行うために、お名前やメールアドレスなどの個人情報を入力いただく場合があります。取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
        <div>
          <h3 className="text-xl font-bold">アクセス解析ツールについて</h3>
          本ウェブサイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </div>

        <h2 className="text-2xl font-bold">個人情報の第三者提供</h2>
        CoreNionは、個人情報の取扱いについて、以下の場合を除いて、あらかじめご本人の同意を得ることなく第三者に提供することはありません。
        <br />
        1.法令に基づく場合
        <br />
        2.裁判所、警察などの公的機関から開示を求められた場合
        
        <h2 className="text-2xl font-bold">改定について</h2>
        CoreNionは法令の変更やサービスの提供内容変更などに伴い、本ウェブサイトポリシーを予告なく変更する場合があります。
        <br />
        <br />
        2024年1月23日 改定
      </article>
    </main>
  );
}