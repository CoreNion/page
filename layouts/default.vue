<script setup lang="ts">
const enableGA = enableGoogleAnalytics();
</script>

<template>
  <div class="min-h-screen grid grid-rows-[auto_1fr]">
    <div class="navbar bg-slate-300">
      <div class="flex-none">
        <div class="dropdown sm:hidden">
          <label class="btn btn-ghost btn-circle" tabindex="0">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
            </svg>
          </label>

          <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50" tabindex="0">
            <li>
              <NuxtLink to="/trucker/" no-prefetch>FileTrucker</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/archivtter/" no-prefetch>Archivtter</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/leasy/" no-prefetch>Leasy</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-1">
        <NuxtLink class="btn btn-ghost normal-case text-xl" to="/" no-prefetch>CoreNion</NuxtLink>
      </div>
      <div class="max-sm:hidden ul menu menu-horizontal justify-end px-1">
        <li>
          <NuxtLink to="/trucker/" no-prefetch>FileTrucker</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/archivtter/" no-prefetch>Archivtter</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/leasy/" no-prefetch>Leasy</NuxtLink>
        </li>
      </div>
    </div>

    <slot></slot>

    <footer class="footer items-center p-4 bg-black text-neutral-content ">
      <div class="w-full flex flex-row justify-stretch">
        <p class="flex-1">
          <span>© 2024 CoreNion</span>
          <br>
          <NuxtLink class="link text-white mr-2" to="/privacy">Privacy</NuxtLink>
          <a class="link text-blue-200" href="https://github.com/CoreNion/page">Source Code</a>
        </p>
        <p class="flex-1 flex flex-row justify-end items-center gap-4">
          <a href="https://github.com/CoreNion">
            <Icon name="carbon:logo-github" size="40px"></Icon>
          </a>
          <a href="https://twitter.com/CoreiNion">
            <Icon name="carbon:logo-x" size="40px"></Icon>
          </a>

          <button class="btn btn-primary" onclick="analyticsModal.showModal()">
            <Icon name="carbon:data-analytics" size="25px"></Icon>
          </button>
        </p>
      </div>
    </footer>

    <dialog id="analyticsModal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">解析データの設定</h3>
        <p class="py-3">
          当サイトでは、使用状況のデータの収集のために解析ツールなどを使用することがあります。
          <br>
          このデータは匿名で収集されており、個人を特定するものではありません。
          <br>
          <NuxtLink class="link" to="/privacy">プライバシーポリシー</NuxtLink>
        </p>
        <p>
          <label class="label cursor-pointer">
            <span class="label-text">Google Analytics</span>
            <input type="checkbox" class="toggle" v-model="enableGA" />
          </label>
        </p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>