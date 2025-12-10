<script>
  import { onMount } from "svelte";
  import { fade, scale } from 'svelte/transition';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  const arrayfrontend = [
    {
      title: "HTML",
      ago: "5 años",
      url: "html.png",
      level: 95
    },
    {
      title: "CSS",
      ago: "5 años",
      url: "css.png",
      level: 95
    },
    {
      title: "JavaScript",
      ago: "5 años",
      url: "javascript.png",
      level: 90
    },
    {
      title: "TypeScript",
      ago: "4 años",
      url: "typescript.png",
      level: 85
    },
    {
      title: "Bootstrap",
      ago: "Un año",
      url: "bootstrap.png",
      level: 80
    },
    {
      title: "Tailwind",
      ago: "4 años",
      url: "tailwind.png",
      level: 90
    },
    {
      title: "Vue",
      ago: "Un año",
      url: "vue.png",
      level: 75
    },
    {
      title: "Svelte",
      ago: "2 años",
      url: "svelte.png",
      level: 85
    },
    {
      title: "Angular",
      ago: "3 años",
      url: "angular.png",
      level: 90
    },
  ];

  const arraybackend = [
    {
      title: "PHP",
      ago: "Un año",
      url: "php.png",
      level: 70
    },
    {
      title: "Node",
      ago: "3 años",
      url: "node.png",
      level: 85
    },
    {
      title: "MySQL",
      ago: "Un año",
      url: "mysql.png",
      level: 75
    },
    {
      title: "Firebase",
      ago: "4 años",
      url: "firebase.png",
      level: 90
    },
  ];
</script>

<div class="h-[100dvh] px-5 lg:px-16 py-12 overflow-y-auto ">
  <!-- Header -->
  <div class="text-center space-y-4 mb-16">
    {#if mounted}
      <div in:fade={{ duration: 600 }}>
        <h1 class="text-4xl lg:text-5xl font-bold mb-3">
          <span class="text-white/90">Mis</span> <span class="text-gradient">Habilidades</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Tecnologías y herramientas que domino para crear soluciones excepcionales
        </p>
      </div>
    {/if}
  </div>

  <!-- Frontend Section -->
  <div class="mb-20">
    <h2 class="text-3xl font-bold text-primary-400 text-center mb-12">
      Frontend Development
    </h2>
    <div class="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {#each arrayfrontend as skill, i}
        {#if mounted}
          <div
            in:scale={{ duration: 400, delay: i * 80, start: 0.8 }}
            class="group relative card-glass rounded-2xl p-6 hover-lift"
          >
            <!-- Glow effect on hover -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>

            <!-- Content -->
            <div class="relative flex flex-col items-center space-y-4">
              <div class="relative">
                <div class="absolute inset-0 bg-primary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="./images/{skill.url}"
                  alt={skill.title}
                  class="h-24 w-24 object-contain transform group-hover:scale-110 transition-transform duration-300 relative"
                />
              </div>

              <div class="text-center space-y-2 w-full">
                <h3 class="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {skill.title}
                </h3>
                <p class="text-sm text-gray-400">{skill.ago} de experiencia</p>

                <!-- Progress bar -->
                <div class="w-full bg-gray-800 rounded-full h-2 mt-3">
                  <div
                    class="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style="width: {mounted ? skill.level : 0}%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>

  <!-- Backend Section -->
  <div>
    <h2 class="text-3xl font-bold text-accent-cyan text-center mb-12">
      Backend Development
    </h2>
    <div class="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {#each arraybackend as skill, i}
        {#if mounted}
          <div
            in:scale={{ duration: 400, delay: (arrayfrontend.length * 80) + (i * 80), start: 0.8 }}
            class="group relative card-glass rounded-2xl p-6 hover-lift"
          >
            <!-- Glow effect on hover -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

            <!-- Content -->
            <div class="relative flex flex-col items-center space-y-4">
              <div class="relative">
                <div class="absolute inset-0 bg-accent-cyan/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="./images/{skill.url}"
                  alt={skill.title}
                  class="h-24 w-24 object-contain transform group-hover:scale-110 transition-transform duration-300 relative"
                />
              </div>

              <div class="text-center space-y-2 w-full">
                <h3 class="text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors">
                  {skill.title}
                </h3>
                <p class="text-sm text-gray-400">{skill.ago} de experiencia</p>

                <!-- Progress bar -->
                <div class="w-full bg-gray-800 rounded-full h-2 mt-3">
                  <div
                    class="bg-gradient-to-r from-accent-cyan to-accent-blue h-2 rounded-full transition-all duration-1000 ease-out"
                    style="width: {mounted ? skill.level : 0}%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
