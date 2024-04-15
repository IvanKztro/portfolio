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
      class="drawer-side border border-b-1 border-[#10BD8B] shadow-lg shadow-[#10BD8B] mt-[4rem] lg:mt-0"
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
              ? 'bg-gray-700 text-[#10BD8B] '
              : ''}">Ivan Castro</a
          >
        </li>
        <div class="divider"></div>
        <li>
          <a
            href="/aboutme"
            on:click={() => handleSidebar()}
            class="text-xl font-semibold {data.url === '/aboutme'
              ? 'bg-gray-700 text-[#10BD8B] '
              : ''} ">Acerca de mi</a
          >
        </li>
        <li>
          <a
            href="/skills"
            on:click={() => handleSidebar()}
            class="text-xl font-semibold {data.url === '/skills'
              ? 'bg-gray-700 text-[#10BD8B] '
              : ''} ">Habilidades</a
          >
        </li>
        <li>
          <a
            href="/experience"
            on:click={() => handleSidebar()}
            class="text-xl font-semibold {data.url === '/experience'
              ? 'bg-gray-700 text-[#10BD8B] '
              : ''} ">Experiencia</a
          >
        </li>
        <li>
          <a
            href="/work"
            on:click={() => handleSidebar()}
            class="text-xl font-semibold {data.url === '/work'
              ? 'bg-gray-700 text-[#10BD8B] '
              : ''} ">Proyectos personales</a
          >
        </li>
        <div class="mt-[20%]">
          <h2 class="text-2xl font-semibold">Contacto:</h2>
          <div class="flex flex-col gap-3">
            <p class="text-md font-semibold mt-2">ivanc654@gmail.com</p>
            <p class="text-md font-semibold">+52(244)140-8001</p>
            <a
              class="text-md font-semibold btn bg-[#10BD8B] btn-sm text-white hover:bg-green-200 hover:text-black"
              href="https://www.linkedin.com/in/ivan-ricardo-castro-rubi-9a954518a/"
              target="_blank"
              rel="noopener noreferrer">Linkedin</a
            >
          </div>
        </div>
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
