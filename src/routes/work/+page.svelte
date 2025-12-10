<script lang="ts">
  import { scale, fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  const arrayProjects = [
    {
      title: "Ofrendas (proyecto para turismo)",
      image: "./images/ofrendas.png",
      url: "https://ofrendas-huaquechula-2025.netlify.app/",
      tools: ["Svelte", "OpenStreetMap", "Tailwind"],
      description: "Plataforma interactiva de turismo con mapas"
    },
    {
      title: "Diseño de inicio de sesión",
      image: "./images/vue_ncP.jpg",
      url: "https://sleepy-thompson-be6395.netlify.app",
      tools: ["HTML", "JS", "CSS", "Bootstrap"],
      description: "Interfaz de autenticación moderna y elegante"
    },
    {
      title: "Sistema gestor de almacén",
      image: "./images/shoes-shop.PNG",
      url: "https://shoes-shop-web.web.app/",
      tools: [
        "Angular",
        "Autenticator",
        "RXJS",
        "Firebase",
        "Angular Material UI",
      ],
      description: "Sistema completo de gestión de inventario"
    },
    {
      title: "Gestión de tickets (tasks/tareas)",
      image: "./images/tickets.jpg",
      url: "https://overcome-test.web.app",
      tools: [
        "Angular",
        "Autenticator",
        "Tailwind",
        "Firebase",
        "RXJS",
        "Drag-Drop",
      ],
      description: "Sistema de tickets con drag & drop"
    },
    {
      title: "PokeDex",
      image: "./images/pokedex-api.PNG",
      url: "https://pokedex-api-alpha.vercel.app/",
      tools: ["Svelte", "Consumo de API", "Tailwind"],
      description: "Explorador interactivo de Pokémon con API"
    },
    {
      title: "Peliculas",
      image: "./images/vue_movies.jpg",
      url: "https://cartelera-vue.netlify.app/",
      tools: ["Vue", "CSS", "Bootstrap", "Consumo de API"],
      description: "Cartelera de películas con TMDb API"
    },
    {
      title: "Product Hunt clon",
      image: "./images/react_productHunt.JPG",
      url: "https://product-hund-next.web.app/",
      tools: ["Svelte", "Firebase", "Bootstrap"],
      description: "Clon de Product Hunt con Firebase"
    },
  ];
</script>

<div id="Proyectos" class="h-[100dvh] px-5 lg:px-16 py-12 overflow-y-auto">
  <!-- Header -->
  <div class="text-center space-y-4 mb-12">
    {#if mounted}
      <div in:fade={{ duration: 600 }}>
        <h1 class="text-4xl lg:text-5xl font-bold mb-3">
          <span class="text-gradient">Proyectos</span> <span class="text-white/90">Destacados</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Una selección de proyectos que demuestran mis habilidades técnicas y creatividad
        </p>
      </div>
    {/if}
  </div>

  <!-- Projects Grid -->
  <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-center">
    {#each arrayProjects as p, i}
      {#if mounted}
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          in:scale={{ duration: 400, delay: i * 100, start: 0.8 }}
          class="group relative card-glass rounded-2xl overflow-hidden hover-lift block"
        >
          <!-- Image Container -->
          <div class="relative overflow-hidden h-[14rem]">
            <img
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              src={p.image}
              alt={p.title}
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <!-- Live indicator -->
            <div class="absolute top-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <div class="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
              <span class="text-white text-xs font-medium">Live</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 space-y-4">
            <h3 class="font-bold text-xl text-white group-hover:text-primary-400 transition-colors duration-300">
              {p.title}
            </h3>

            <p class="text-gray-400 text-sm">
              {p.description}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              {#each p.tools as t}
                <span
                  class="px-3 py-1.5 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs font-medium text-primary-300 hover:bg-primary-500/20 transition-colors"
                >
                  {t}
                </span>
              {/each}
            </div>

            <!-- View project link -->
            <div class="flex items-center gap-2 text-primary-400 font-medium text-sm group-hover:gap-3 transition-all">
              <span>Ver proyecto</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          <!-- Hover gradient overlay -->
          <div class="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
        </a>
      {/if}
    {/each}
  </div>
</div>
