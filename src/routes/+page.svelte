<script>
</script>

<svelte:head>
  <!-- <title>Home</title> -->
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section
  class=" flex flex-col lg:flex-row items-center gap-7 h-screen px-5 lg:px-5"
>
  <div class="flex flex-col gap-0 lg:gap-12">
    <h1
      class="font-semibold text-3xl md:text-[3rem] lg:text-[3.5rem] pt-8 lg:pt-0 leading-[55px]"
    >
      Hola, Soy <span class="text-green-400">Ivan Castro</span>
    </h1>
    <h1
      class="font-semibold text-3xl md:text-[3rem] lg:text-[3.5rem] pt-4 lg:pt-0 mb-4 leading-[55px]"
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
    class="shadow-xl shadow-green-400 rounded-lg w-[350px]"
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
