<script lang="ts">
  const arrayProjects = [
    // {
    // 	title: 'PetsCitas Veterinarias',
    // 	image: './images/react-citas.PNG',
    // 	url: 'https://react-vite-citas-pets.netlify.app',
    // 	tools: ['React', 'tailwindcss', 'localStorage', 'vite']
    // 	//React, Bootstrap, Next.js, Firebase
    // 	// tools: ['HTML', 'JS', 'CSS', 'Bootstrap']
    // },
    {
      title: "Diseño de inicio de sesión",
      image: "./images/vue_ncP.jpg",
      url: "https://sleepy-thompson-be6395.netlify.app",
      tools: ["HTML", "JS", "CSS", "Bootstrap"],
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
      //React, Bootstrap, Next.js, Firebase
      // tools: ['HTML', 'JS', 'CSS', 'Bootstrap']
    },
    {
      title: "Gestión de tickets (tasks/tareas)",
      image: "./images/tickets.jpg",
      url: "https://overcome-test.web.app",
      //React, Json, Bootstrap, Consumo de API de criptomonedas
      tools: [
        "Angular",
        "Autenticator",
        "Tailwind",
        "Firebase",
        "RXJS",
        "Drag-Drop",
      ],
    },
    {
      title: "PokeDex",
      image: "./images/pokedex-api.PNG",
      url: "https://pokedex-api-alpha.vercel.app/",
      //React, Json, Bootstrap, Consumo de API de criptomonedas
      tools: ["Svelte", "Consumo de API", "Tailwind"],
    },
    // {
    // 	title: 'Carrito de compras',
    // 	image: './images/vue_carrito.jpg',
    // 	url: 'https://ivankztro.github.io/carrito-de-compras/View/index.html',
    // 	tools: ['HTML', 'JS', 'CSS', 'Bootstrap']
    // },
    {
      title: "Peliculas",
      image: "./images/vue_movies.jpg",
      url: "https://cartelera-vue.netlify.app/",
      tools: ["Vue", "CSS", "Bootstrap", "Consumo de API"],
    },
    {
      title: "Product Hunt clon",
      image: "./images/react_productHunt.JPG",
      url: "https://product-hund-next.web.app/",
      tools: ["Svelte", "Firebase", "Bootstrap"],
      //React, Bootstrap, Next.js, Firebase
      // tools: ['HTML', 'JS', 'CSS', 'Bootstrap']
    },
  ];
</script>

<div id="Proyectos" class="container mx-auto h-[95vh] overflow-y-auto px-5">
  <!-- <div class="">
		<h2 class="text-center my-8 text-white text-4xl" >
			PROYECTOS PERSONALES
		</h2>
	</div> -->
  <div
    class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-center mt-8"
  >
    {#each arrayProjects as p}
      <a
        class=" rounded-lg shadow-lg my-2 border border-1 border-[#10BD8B] hover:shadow-lg hover:shadow-[#10BD8B] cursor-pointer"
        href={p.url}
      >
        <img
          class="w-full rounded-t-lg h-[12rem]"
          src={p.image}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">{p.title}</div>
          <!-- <p class="text-gray-700 text-base">Vue, CSS, Bootstrap, consumo de API</p> -->
        </div>
        <section class="">
          <div class="px-6 pt-3 pb-4">
            {#each p.tools as t}
              <span
                class="inline-block bg-neutral rounded-full px-3 py-1 text-sm font-semibold text-[#10BD8B] mr-2 mb-2"
                >{t}</span
              >
            {/each}
          </div>
          <!-- <div class="px-6 pt-3 pb-4">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              class="bg-transparent hover:bg-green-500 text-[#10BD8B] font-semibold hover:text-white py-2 px-4 border border-[#10BD8B] hover:border-transparent rounded"
              >Ver</a
            >
          </div> -->
        </section>
      </a>
    {/each}
  </div>

  <!-- <div class="card col-lg-4  col-12">
				<img src="./img/react_noticias.JPG" class="card-img-top mx-auto" style="height: 20rem;" />
				<div class="card-body">
					<h5 class="card-title">Noticias del momento</h5>

					<p class="card-text">React, Json, Bootstrap, consumo API de noticas de México</p>
					<a
						href="https://fervent-shirley-ddcb6a.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
						class="detalles btn btn-primary">Ver</a
					>
				</div>
			</div> -->
</div>
