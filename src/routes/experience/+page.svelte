<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  const experiences = [
    {
      company: "Urion Studio",
      role: "Desarrollador Frontend",
      period: "Julio 2024 - Actualidad",
      current: true,
      summary: "Desarrollo de una plataforma modular para freelancers implementando gestor de proyectos con estructura jerárquica (workspaces → portfolios → proyectos → milestones → sprints → tareas) y tableros Kanban. Constructor de perfil tipo CV dividido en secciones (experiencia, skills, educación, certificaciones, testimonios). Marketplace de servicios con integración de Stripe, creación y contratación de paquetes. Módulo de mensajería interna entre usuarios.",
      stack: ["Svelte", "Firebase", "Tailwind", "Shadcn", "Stripe"]
    },
    {
      company: "Dbugger Studio",
      role: "Desarrollador Full Stack",
      period: "Junio 2023 - Junio 2024",
      current: false,
      summary: "Desarrollo de un sistema de ticketera dividido en 4 módulos: Cliente (vista de eventos, compra de boletos, registro y gestión de tickets), Admin (administración de órdenes, usuarios, eventos y servicios externos), Checker (escaneo de códigos QR para validar accesos en eventos asignados).",
      stack: ["Svelte", "Angular", "Firebase", "Shopify", "WordPress", "Mailgun", "Onvo", "NodeJs"]
    },
    {
      company: "Tank Lab",
      role: "Desarrollador Frontend y Backend",
      period: "Diciembre 2021 - Mayo 2023",
      current: false,
      summary: "Desarrollo y soporte de sistemas a medida con foco en frontend: Gestor de eventos para San Francisco (admin + interfaz pública), sitio de contenido multimedia con membresías y control de acceso, sistema de gastos por sucursales con reportes y gráficas, generador de calendarios y agendas con lógica personalizada.",
      stack: ["Svelte", "Angular", "Firebase", "Tailwind", "NodeJs"]
    },
    {
      company: "Planeta Preescolar",
      role: "Desarrollador Full Stack",
      period: "Abril 2020 - Noviembre 2021",
      current: false,
      summary: "Implementación de un sistema de membresías para docentes: Módulos de login, registro, blog y búsqueda avanzada. Carga de PDF, Word y archivos de audio. Pagos con Stripe y gestión de roles en Firebase.",
      stack: ["Vue", "Firebase", "Tailwind", "Stripe", "JavaScript"]
    },
    {
      company: "Volkswagen de México",
      role: "Desarrollador de Software (Practicante)",
      period: "Enero - Agosto 2019",
      current: false,
      summary: "Desarrollo de sistema de inventario con escaneo QR y reportes personalizados. Gestión de permisos de usuarios y documentación técnica. Colaboración directa con gerencia y stakeholders.",
      stack: ["JavaScript", "HTML", "CSS", "jQuery", "PHP", "MySQL", "QR", "XP Methodology"]
    }
  ];
</script>

<div class="h-[100dvh] px-5 lg:px-16 py-12 overflow-y-auto">
  <!-- Header -->
  <div class="text-center space-y-6 mb-16">
    {#if mounted}
      <div in:fade={{ duration: 600 }}>
        <img
          src="./images/profile-github.png"
          alt="GitHub Profile"
          class="w-full max-w-3xl h-[200px] md:h-[280px] object-cover rounded-2xl shadow-card-hover mx-auto mb-8 border border-primary-500/30"
        />
        <h1 class="text-4xl lg:text-5xl font-bold mb-3">
          <span class="text-white/90">Mi</span> <span class="text-gradient">Experiencia</span>
        </h1>
        <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-card border border-primary-500/30 rounded-full">
          <div class="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
          <p class="text-primary-400 font-semibold text-lg">6 años y medio de experiencia profesional</p>
        </div>
      </div>
    {/if}
  </div>

  <!-- Timeline -->
  <div class="max-w-5xl mx-auto">
    <div class="relative">
      <!-- Timeline line -->
      <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-accent-cyan to-transparent"></div>

      <!-- Experiences -->
      {#each experiences as exp, i}
        {#if mounted}
          <div
            in:fly={{ y: 50, duration: 600, delay: i * 150 }}
            class="relative mb-12 md:mb-20"
          >
            <!-- Timeline dot -->
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-6 h-6 items-center justify-center">
              <div class="w-6 h-6 bg-gradient-primary rounded-full border-4 border-base-100 shadow-glow z-10"></div>
              {#if exp.current}
                <div class="absolute w-6 h-6 bg-primary-400 rounded-full animate-ping"></div>
              {/if}
            </div>

            <!-- Content -->
            <div class="md:flex md:gap-8 items-start {i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}">
              <!-- Spacer -->
              <div class="hidden md:block md:w-1/2"></div>

              <!-- Card -->
              <div class="md:w-1/2">
                <div class="group card-glass rounded-2xl p-6 hover-lift">
                  <!-- Header -->
                  <div class="mb-4">
                    {#if exp.current}
                      <span class="inline-block px-3 py-1 bg-primary-500/20 border border-primary-500/50 rounded-full text-xs font-medium text-primary-300 mb-3">
                        Actual
                      </span>
                    {/if}
                    <h3 class="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                      {exp.company}
                    </h3>
                    <p class="text-primary-400 font-semibold text-lg mb-2">{exp.role}</p>
                    <p class="text-gray-400 text-sm flex items-center gap-2 {i % 2 === 0 ? 'md:justify-end' : ''}">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </p>
                  </div>

                  <!-- Summary -->
                  <p class="text-gray-300 mb-4 leading-relaxed">
                    {exp.summary}
                  </p>

                  <!-- Stack -->
                  <div class="space-y-2">
                    <p class="text-sm font-semibold text-white/80">Stack:</p>
                    <div class="flex flex-wrap gap-2 {i % 2 === 0 ? 'md:justify-end' : ''}">
                      {#each exp.stack as tech}
                        <span class="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs font-medium text-primary-300">
                          {tech}
                        </span>
                      {/each}
                    </div>
                  </div>

                  <!-- Hover gradient -->
                  <div class="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
