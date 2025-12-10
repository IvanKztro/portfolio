<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  const highlights = [
    { icon: '💼', text: '6 años y medio de experiencia', desc: 'Desarrollando soluciones web' },
    { icon: '🎯', text: 'Especialista Frontend', desc: 'Angular, Svelte, Vue' },
    { icon: '🚀', text: 'Proyectos exitosos', desc: 'Ecommerce, Dashboards, SaaS' },
    { icon: '⚡', text: 'Performance', desc: 'Optimización y mejores prácticas' }
  ];
</script>

<section class="min-h-screen flex items-center px-5 lg:px-16 py-8 md:py-12">
  <div class="w-full max-w-7xl mx-auto">
    <div class="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
      <!-- Image -->
      {#if mounted}
        <div in:fly={{ x: -100, duration: 800, delay: 200 }} class="lg:w-1/2 flex justify-center">
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img
              src="./images/principal.jpg"
              alt="Ivan Castro"
              class="relative w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px] rounded-3xl border-2 border-primary-500/30 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      {/if}

      <!-- Content -->
      <div class="lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8">
        {#if mounted}
          <div in:fly={{ x: 100, duration: 800, delay: 300 }}>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span class="text-white/90">Sobre</span> <span class="text-gradient">Mí</span>
            </h1>
            <div class="space-y-4 md:space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                Soy <span class="text-primary-400 font-semibold">Full Stack Developer</span> con <span class="text-primary-400 font-semibold">6 años y medio de experiencia</span>,
                apasionado por la creación de experiencias digitales impactantes que marquen la diferencia.
              </p>
              <p>
                Mi experiencia en frameworks modernos como
                <span class="text-primary-400 font-semibold">Angular</span>,
                <span class="text-primary-400 font-semibold">Svelte</span> y
                <span class="text-primary-400 font-semibold">Vue</span>
                me permite convertir diseños en sitios web y aplicaciones atractivas, funcionales y de alto rendimiento.
              </p>
              <p>
                Siempre estoy listo para nuevos desafíos y aprendizaje continuo, manteniéndome actualizado con las últimas tecnologías y mejores prácticas del desarrollo web.
              </p>
              <p class="text-primary-400 font-semibold text-xl">
                ¡Hablemos y exploremos oportunidades juntos!
              </p>
            </div>
          </div>

          <!-- Highlights -->
          <div in:fade={{ duration: 800, delay: 600 }} class="grid grid-cols-2 gap-4 mt-8">
            {#each highlights as highlight}
              <div class="card-glass rounded-xl p-4 hover-lift">
                <div class="text-3xl mb-2">{highlight.icon}</div>
                <h3 class="font-semibold text-white mb-1">{highlight.text}</h3>
                <p class="text-sm text-gray-400">{highlight.desc}</p>
              </div>
            {/each}
          </div>

          <!-- CTA Buttons -->
          <div in:fade={{ duration: 800, delay: 800 }} class="flex flex-wrap gap-4 mt-8">
            <a
              href="/work"
              class="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              Ver proyectos
            </a>
            <a
              href="https://www.linkedin.com/in/ivan-ricardo-castro-rubi-9a954518a/"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
