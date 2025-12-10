<script lang="ts">
  import "../app.css";
  import "./styles.css";
  import { fly } from "svelte/transition";
  import Navbar from "$lib/components/navbar.svelte";
  export let data;
  let btnsidebar: any;

  function handleSidebar() {
    btnsidebar.click();
  }

  const navItems = [
    { href: '/', label: 'Inicio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { href: '/aboutme', label: 'Acerca de mí', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { href: '/skills', label: 'Habilidades', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { href: '/experience', label: 'Experiencia', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { href: '/work', label: 'Proyectos', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' }
  ];
</script>

<div class="app bg-base-200" data-theme="light">
  <div class="lg:hidden w-full h-full">
    <Navbar></Navbar>
  </div>
  <div class="drawer lg:drawer-open mt-[4rem] lg:mt-0">
    <input
      id="my-drawer-2"
      type="checkbox"
      class="drawer-toggle"
      bind:this={btnsidebar}
    />
    <div
      class="drawer-content flex flex-col bg-base-100"
    >
      <section class="w-full min-h-screen bg-base-100">
        {#key data.url}
          <main
            in:fly={{ x: -200, duration: 300, delay: 300 }}
            out:fly={{ x: 200, duration: 300 }}
          >
            <slot />
          </main>
        {/key}

        <footer></footer>
      </section>
    </div>
    <div
      class="drawer-side border-r border-primary-500/20 shadow-2xl mt-[4rem] lg:mt-0 z-40"
    >
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay lg:!hidden"
      ></label>
      <div class="w-80 min-h-full bg-gradient-dark backdrop-blur-xl px-6 py-10 flex flex-col relative z-50">
        <!-- Brand -->
        <div class="mb-3">
          <a href="/" on:click={() => handleSidebar()} class="block group">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <span class="text-white text-xl font-bold">IC</span>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gradient">Ivan Castro</h2>
                <p class="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </div>
          </a>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 space-y-2">
          {#each navItems as item}
            <a
              href={item.href}
              on:click={() => handleSidebar()}
              class="flex items-center gap-4 px-4 py-2 rounded-xl font-medium transition-all duration-300 group {data.url === item.href
                ? 'bg-gradient-primary text-white shadow-glow'
                : 'text-gray-300 hover:bg-white/5 hover:text-primary-400'}"
            >
              <svg class="w-5 h-5 transition-transform duration-300 {data.url === item.href ? '' : 'group-hover:scale-110'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon} />
              </svg>
              <span class="text-base">{item.label}</span>
            </a>
          {/each}
        </nav>

        <!-- Divider -->
        <div class="my-8 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>

        <!-- Contact Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white mb-4">Contacto</h3>

          <a href="mailto:ivanc654@gmail.com" class="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="text-sm">ivanc654@gmail.com</span>
          </a>

          <a href="tel:+522441408001" class="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="text-sm">+52 244 140 8001</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ivan-ricardo-castro-rubi-9a954518a/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 mt-4"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  header {
    display: flex;
    justify-content: space-between;
    view-transition-name: header;
  }

  /* Ensure drawer sidebar is not transparent and clickable */
  .drawer-side > div {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
  }

  /* Hide overlay on desktop */
  @media (min-width: 1024px) {
    .drawer-overlay {
      display: none !important;
      pointer-events: none !important;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translateX(30px);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateX(-30px);
    }
  }

  :root::view-transition-old(root) {
    animation:
      90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation:
      210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }
</style>
