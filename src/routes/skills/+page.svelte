<script>
  import { onMount } from "svelte";

  const arrayfrontend = [
    {
      title: "HTML ",
      ago: "5 años",
      url: "html.png",
    },
    {
      title: "CSS",
      ago: "5 años",
      url: "css.png",
    },
    {
      title: "JavaScript ",
      ago: "5 años",
      url: "javascript.png",
    },
    {
      title: "TypeScript",
      ago: "4 años",
      url: "typescript.png",
    },
    {
      title: "Bootstrap",
      ago: "Un año",
      url: "bootstrap.png",
    },
    {
      title: "Tailwind",
      ago: "4 años",
      url: "tailwind.png",
    },
    {
      title: "Vue",
      ago: "Un año",
      url: "vue.png",
    },
    // {
    // 	title: 'ReactUn año',
    // 	url: 'react.png'
    // },
    {
      title: "Svelte",
      ago: "2 años",
      url: "svelte.png",
    },
    {
      title: "Angular",
      ago: "3 años",
      url: "angular.png",
    },
  ];

  const arraybackend = [
    {
      title: "PHP",
      ago: "Un año",
      url: "php.png",
    },
    {
      title: "Node ",
      ago: "3 años ",
      url: "node.png",
    },
    // {
    // 	title: 'MongoDB',
    // 	url: 'mongodb.png'
    // },
    {
      title: "MySQL ",
      ago: "Un año",
      url: "mysql.png",
    },
    {
      title: "Firebase",
      ago: "4 años",
      url: "firebase.png",
    },
  ];
</script>

<div
  class="container mx-auto flex flex-col justify-center h-screen pt-[110rem] md:pt-[25rem] lg:pt-[20rem] overflow-y-auto"
>
  <h4 class=" text-3xl font-semibold text-[#10BD8B] text-center mb-8 pt-8">
    Frontend
  </h4>
  <div
    class="grid gap-5 text justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
  >
    {#each arrayfrontend as fr}
      <div class=" flex justify-center my-4 w-full">
        <div
          class=" px-4 py-2 rounded-lg hover:bg-gray-700 transition ease-in-out hover:-translate-y-3 text-white hover:text-green-500"
        >
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            style="height: 8rem"
            src="./images/{fr.url}"
            alt={fr.title}
            class=""
          />
          <p class="text-center mt-4">{@html fr.title}</p>
          <p class="text-center">{@html fr.ago}</p>
        </div>
        <div />
      </div>
    {/each}
  </div>
  <h4 class="text-3xl font-semibold text-[#10BD8B] text-center mb-8 mt-7">
    Backend
  </h4>
  <div
    class="grid gap-2 text justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
  >
    {#each arraybackend as ba}
      <div class=" flex justify-center my-4 w-full">
        <div
          class="px-4 py-2 rounded-lg hover:bg-gray-700 transition ease-in-out hover:-translate-y-3 text-white hover:text-green-500"
        >
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            style="height: 8rem"
            src="./images/{ba.url}"
            alt={ba.title}
            class=""
          />
          <p class="text-center mt-4">{@html ba.title}</p>
          <p class="text-center">{@html ba.ago}</p>
        </div>
        <div />
      </div>
    {/each}
  </div>
  <!-- </div> -->
</div>

<style>
  .tool {
    color: white;
  }
</style>
