<script setup lang="ts">
const config = useRuntimeConfig()

const siteURL = useSiteConfig().url;
const baseURL = config.app.baseURL;
const mailAdress = config.public.mailAdress;

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: `${baseURL}profile.svg`,
    },
    {
      rel: 'alternate icon',
      type: 'image/ico',
      href: `${baseURL}favicon.ico`,
    }
  ],
});

useSeoMeta({
  title: 'Accounts | CoreNion',
  ogTitle: 'Accounts | CoreNion',
  description: "CoreNionが使用している各アカウントやメールアドレスの一覧ページ。",
  ogDescription: "CoreNionが使用している各アカウントやメールアドレスの一覧ページ。",
  ogImage: `${siteURL}${baseURL}profile.png`,
  ogUrl: `${siteURL}${baseURL}`,
  ogType: 'website',
  ogSiteName: "CoreNion's Page",
  twitterCard: 'summary',
  twitterSite: '@CoreiNion',
  twitterCreator: '@CoreiNion',
});
</script>

<template>
  <main class="w-full max-w-screen-xl p-4 xl:mx-auto">
    <section class="my-4">
      <h1 class="text-3xl font-medium">各アカウント一覧</h1>
      <div class="alert my-3">
        <Icon name="ic:outline-info" size="24px"></Icon>
        <span>学内Slackなどの非公開の連絡先を持っている場合、そちらの方を使用することを推奨します。</span>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold my-5"># Email Adress</h2>
      <IndexAccount icon="ic:outline-mail" title="Primary Adress" :url="`mailto:${mailAdress}`" :accountID="mailAdress"
          bgColor="bg-secondary" textColor="secondary-content" class="max-w-min lg:ml-7" />
      <p class="mt-3">ここで公開しているメールアドレスは、GoogleアカウントやGitなどでも使用しています。</p>
    </section>

    <section>
      <h2 class="text-2xl font-bold my-5"># Service Accounts</h2>
      <div class="flex flex-wrap gap-5 lg:gap-7 justify-start lg:ml-7">
        <IndexAccount icon="grommet-icons:github" title="GitHub" url="https://github.com/CoreNion" accountID="@CoreNion"
          bgColor="bg-[#171515]" textColor="text-white" />
        <IndexAccount icon="carbon:logo-x" title="X (Twitter)" url="https://x.com/CoreiNion"
          accountID="@CoreiNion" bgColor="bg-sky-900" textColor="text-white" />
      </div>
    </section>
  </main>
</template>