<template>
  <ContentSection variant="secondary" class="flex-grow">
    <form class="flex justify-center" @submit.prevent="onSubmit">
      <Card class="w-[22rem]">
        <template #title>
          <h1 class="text-2xl font-semibold text-left">Login para acesso admin!</h1>
        </template>
        <template #content>
          <div class="flex flex-col gap-4">
            <CustomInputText name="email" label="E-mail" class="w-full" icon="pi pi-user"></CustomInputText>
            <CustomInputText
              name="password"
              label="Senha"
              class="w-full"
              type="password"
              icon="pi pi-lock"
            ></CustomInputText>
          </div>
        </template>
        <template #footer>
          <div class="flex justify-end mt-4">
            <Button label="Entrar" icon="pi pi-sign-in" type="submit"></Button>
          </div>
        </template>
      </Card>
    </form>
  </ContentSection>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import { useAuth } from '@/composables'

const { login } = useAuth()

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    object({
      email: string().email('Digite um email válido').required('Digite seu email'),
      password: string().required('Digite sua senha')
    })
  )
})

const onSubmit = handleSubmit((values) => {
  login(values)
})
</script>
