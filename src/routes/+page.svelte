<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Ivan Castro - Full Stack Developer</title>
  <meta name="description" content="Full Stack Developer especializado en crear experiencias web modernas y eficientes" />
</svelte:head>

<section class="relative flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 min-h-screen px-5 lg:px-16 py-8 md:py-12 lg:py-20">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-20 -left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-20 -right-20 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 flex flex-col gap-4 md:gap-6 lg:gap-10 max-w-3xl">
    {#if mounted}
      <div in:fly={{ y: 30, duration: 800, delay: 100 }}>
        <p class="text-primary-400 font-medium text-base md:text-lg mb-2 tracking-wide">
          👋 Hola, soy
        </p>
        <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-2 md:mb-4">
          <span class="text-gradient">Ivan Castro</span>
        </h1>
      </div>

      <div in:fly={{ y: 30, duration: 800, delay: 300 }}>
        <h2 class="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 md:mb-6 text-white/90">
          Full Stack Developer
        </h2>
        <p class="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
          Transformo ideas en
          <span class="text-primary-400 font-semibold">experiencias digitales</span>
          excepcionales. Especializado en
          <span class="text-primary-400 font-semibold">desarrollo</span>,
          <span class="text-primary-400 font-semibold">automatización</span>
          y <span class="text-primary-400 font-semibold">optimización</span> de procesos.
        </p>
      </div>

      <div in:fly={{ y: 30, duration: 800, delay: 500 }} class="flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-4">
        <a
          href="/work"
          class="px-6 md:px-8 py-3 md:py-4 bg-gradient-primary text-white font-semibold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
        >
          Ver proyectos
        </a>
        <a
          href="/aboutme"
          class="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          Conoce más
        </a>
      </div>

      <!-- Tech badges -->
      <div in:fade={{ duration: 800, delay: 700 }} class="flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-6">
        {#each ['Angular', 'Svelte', 'TypeScript', 'Tailwind', 'Bootstrap', 'JavaScript', 'HTML', 'CSS', 'Shadcn'] as tech}
          <span class="px-3 md:px-4 py-1.5 md:py-2 bg-base-200/50 backdrop-blur-sm border border-primary-500/30 rounded-full text-xs md:text-sm font-medium text-primary-300">
            {tech}
          </span>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Image with modern styling -->
  {#if mounted}
    <div in:fly={{ x: 100, duration: 1000, delay: 400 }} class="relative z-10 flex-shrink-0">
      <div class="relative group">
        <div class="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        <img
          src="./images/introduce.jpg"
          alt="Ivan Castro - Full Stack Developer"
          class="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] rounded-2xl border-2 border-primary-500/30 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  {/if}
</section>
