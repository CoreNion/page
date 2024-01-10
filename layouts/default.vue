<template>
  <div class="navbar bg-slate-300">
    <div class="flex-none">
      <div class="dropdown sm:hidden">
        <label class="btn btn-ghost btn-circle" tabindex="0">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
          </svg>
        </label>

        <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" tabindex="0">
          <li><router-link to="/trucker/">FileTrucker</router-link></li>
          <li><router-link to="/archivtter/">Archivtter</router-link></li>
          <li><router-link to="/leasy/" class="rounded-xl">Leasy</router-link></li>
        </ul>
      </div>
    </div>
    <div class="flex-1"><router-link class="btn btn-ghost normal-case text-xl" to="/">CoreNion</router-link></div>
    <div class="max-sm:hidden ul menu menu-horizontal justify-end px-1">
      <li><router-link class="rounded-xl" to="/trucker/">FileTrucker</router-link></li>
      <li><router-link class="rounded-xl" to="/archivtter/">Archivtter</router-link></li>
      <li><router-link class="rounded-xl" to="/leasy/">Leasy</router-link></li>
    </div>
  </div>

  <slot></slot>

  <footer class="footer items-center p-4 bg-black text-neutral-content border-t-2 pt-5">
    <div class="items-center grid-flow-col flex flex-col">
      <p class="text-blue-200">Copyright © 2023 CoreNion</p><a class="link text-white" href="/privacy.html">
        Site's Privacy Policy
      </a>
    </div>
    <div class="grid-flow-col gap-4 place-self-center justify-self-end items-center">
      <span class="font-bold text-blue-200">Check my accounts!:</span>
      <a href="https://github.com/CoreNion">
        <img class="h-9" src="../assets/sns/x.svg"></a><a href="https://twitter.com/CoreiNion">
        <img class="h-9" src="../assets/sns/github.svg">
      </a>
    </div>
  </footer>
</template>