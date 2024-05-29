<template>
  <div
    class="flex flex-column align-items-center justify-content-center min-h-screen"
  >
    <h1 class="font-semibold text-3xl text-gray-900">Realizar login</h1>
    <Card class="shadow-2">
      <template #content>
        <form @submit.prevent="" class="flex flex-column gap-3">
          <div class="flex flex-column gap-2">
            <label for="username">Email</label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-envelope"></i>
              </InputGroupAddon>
              <InputText />
            </InputGroup>
          </div>
          <div class="flex flex-column gap-2">
            <label for="username">Senha</label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-lock"></i>
              </InputGroupAddon>
              <InputText />
            </InputGroup>
          </div>
          <Button class="mt-4" label="Entrar" icon="pi pi-sign-in"></Button>
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/Button';
</script>
