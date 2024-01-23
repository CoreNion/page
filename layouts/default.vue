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

          <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" tabindex="0">
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
      <aside class="items-center grid-flow-col">
        <p>
          <span>Copyright © 2024 CoreNion</span>
          <br>
          <NuxtLink class="link text-white mr-2" to="/privacy">Site's Privacy Policy</NuxtLink>
        </p>
      </aside>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/CoreNion">
          <img class="h-9" src="../assets/sns/github.svg">
        </a>
        <a href="https://twitter.com/CoreiNion">
          <img class="h-9" src="../assets/sns/x.svg">
        </a>
      </nav>
    </footer>
  </div>
</template>