<template>
  <ContentSection variant="secondary" class="flex-grow">
    <div class="flex flex-col items-center my-6">
      <h1 class="text-primary-500 font-bold text-9xl">404</h1>
      <h2 class="text-lg font-bold">Parece que esta página não existe!</h2>
      <p class="mt-1">Volte para tela inicial e continue explorando</p>
      <RouterLink to="/">
        <Button label="Voltar para tela inicial" icon="pi pi-home" class="mt-4"></Button>
      </RouterLink>
    </div>
  </ContentSection>
</template>
