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
</script>

<div class="app bg-base-200" data-theme="light">
  <div class="lg:hidden w-full">
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
      class="drawer-content flex flex-col items-center justify-center bg-base-100"
    >
      <section class="container mx-auto h-screen bg-base-100">
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
      class="drawer-side border border-b-1 border-green-400 shadow-lg shadow-green-400 mt-[4rem] lg:mt-0"
    >
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"
      ></label>
      <ul class="menu px-4 w-80 min-h-full bg-base-200 text-base-content pt-10">
        <!-- Sidebar content here -->
        <li>
          <a
            href="/"
            on:click={() => handleSidebar()}
            class="text-xl font-semibold {data.url === '/'
              ? 'bg-gray-700 text-green-400 '
              : ''}">Ivan Castro</a
          >
        </li>
        <div class="divider"></div>
        <li>
          <a
            href="/aboutme"
            on:click={() => handleSidebar()}
            class="text-xl font-semibold {data.url === '/aboutme'
              ? 'bg-gray-700 text-green-400 '
              : ''} ">Acerca de mi</a
          >
        </li>
        <li>
          <a
            href="/skills"
            on:click={() => handleSidebar()}
            class="text-xl font-semibold {data.url === '/skills'
              ? 'bg-gray-700 text-green-400 '
              : ''} ">Habilidades</a
          >
        </li>
        <li>
          <a
            href="/experience"
            on:click={() => handleSidebar()}
            class="text-xl font-semibold {data.url === '/experience'
              ? 'bg-gray-700 text-green-400 '
              : ''} ">Experiencia</a
          >
        </li>
        <li>
          <a
            href="/work"
            on:click={() => handleSidebar()}
            class="text-xl font-semibold {data.url === '/work'
              ? 'bg-gray-700 text-green-400 '
              : ''} ">Proyectos personales</a
          >
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  header {
    display: flex;
    justify-content: space-between;
    view-transition-name: header;
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
