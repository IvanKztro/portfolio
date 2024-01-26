<script>
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section
  class=" flex flex-col lg:flex-row items-center gap-10 h-screen px-5 lg:px-0"
>
  <div class="flex flex-col">
    <h1
      class="font-semibold text-3xl md:text-[3rem] lg:text-[4rem] pt-8 lg:pt-0"
    >
      Hola, Soy <span class="text-green-400">Ivan Castro</span>
    </h1>
    <h1
      class="font-semibold text-3xl md:text-[3rem] lg:text-[4rem] pt-8 lg:pt-0 mb-4"
    >
      <span class="text-green-400">Frontend Developer</span>
    </h1>
    <p class="font-semibold text-lg md:text-[1.4rem] lg:text-[1.5rem]">
      Puedo ayudarte a <span class="text-green-400">desarrollar</span>,
      <span class="text-green-400">automatizar</span>
      y <span class="text-green-400">mejorar</span> tus procesos.
    </p>
  </div>
  <img
    src="./images/introduce.jpg"
    alt=""
    srcset=""
    class="shadow-xl shadow-green-400 rounded-lg"
  />
</section>

<style>
  .content {
    background-image: url("./images/introduce.jpg");
    background-position: right center;
    background-repeat: no-repeat;
    padding-left: 100px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
</style>
