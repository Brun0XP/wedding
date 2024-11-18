<template>
  <ContentSection title="Você comparecerá ao nosso dia especial?" class="flex-grow" variant="secondary">
    <form @submit="onSubmit" class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[700px] mx-auto">
      <CustomInputText name="firstname" label="Nome" placeholder="Digite seu nome" />
      <CustomInputText name="lastname" label="Sobrenome" placeholder="Digite seu sobrenome" />
      <CustomInputText
        name="email"
        label="Whatsapp / Email"
        placeholder="Digite seu whatsapp ou email"
        class="sm:col-span-2"
      />
      <div class="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CustomRadioButton name="confirmation" inputValue="true" label="Eu vou estar lá" />
        <CustomRadioButton name="confirmation" inputValue="false" label="Desculpe, não posso ir" />
      </div>
      <CustomSelect
        name="guestsAmount"
        label="Número de confirmados (incluindo você)"
        placeholder="Número de confirmados"
        :options="numberOfConfirmation"
        optionLabel="number"
        optionValue="number"
        class="sm:col-span-2"
      />
      <CustomTextarea name="message" label="Mensagem" class="sm:col-span-2" />
      <Button class="sm:col-span-2" label="Confirmar presença" type="submit"></Button>
    </form>
  </ContentSection>
  <ModalError
    v-model:visible="modalAlreadyAnsweredVisible"
    header="Falha ao confirmar presença"
    :message="errorMessage"
  />
  <ModalSuccess
    v-model:visible="modalSuccessVisible"
    header="Confirmação de presença respondida!"
    message="Agradecemos por responder ao nosso convite! Estamos felizes em saber sua decisão e agradecemos por fazer parte deste momento especial. As senhas de acesso ao evento serão enviadas alguns dias antes da festa. Esperamos poder celebrar juntos em breve. Até lá, nos vemos!"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { object, string, boolean, number } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import axios from '@/plugins/axios'

import ContentSection from '@/components/ContentSection.vue'
import CustomInputText from '@/components/form/CustomInputText.vue'
import CustomRadioButton from '@/components/form/CustomRadioButton.vue'
import CustomSelect from '@/components/form/CustomSelect.vue'
import CustomTextarea from '@/components/form/CustomTextarea.vue'
import ModalError from '@/components/modal/ModalError.vue'
import ModalSuccess from '@/components/modal/ModalSuccess.vue'

const numberOfConfirmation = ref([
  { number: '0' },
  { number: '1' },
  { number: '2' },
  { number: '3' },
  { number: '4' },
  { number: '5' }
])
const modalAlreadyAnsweredVisible = ref(false)
const modalSuccessVisible = ref(false)
const errorMessage = ref('')

const emailOrPhoneRegex = /^(\+?[1-9]\d{1,14}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    object({
      firstname: string().required('O nome é obrigatório.'),
      lastname: string().required('O sobrenome é obrigatório.'),
      email: string()
        .matches(emailOrPhoneRegex, 'Por favor, insira um email ou whatsapp válido.')
        .required('O email é obrigatório.'),
      confirmation: boolean().required(),
      guestsAmount: number().when('confirmation', {
        is: true,
        then: (schema) => schema.required('O número de convidados é obrigatório'),
        otherwise: (schema) => schema.notRequired()
      }),
      message: string()
    })
  )
})

const onSubmit = handleSubmit((values) => {
  const payload = {
    ...values,
    name: `${values.firstname} ${values.lastname}`
  }
  const { firstname, lastname, ...finalPayload } = payload

  axios
    .post('/rsvps', finalPayload)
    .then(() => {
      modalSuccessVisible.value = true
      resetForm()
    })
    .catch((error) => {
      modalAlreadyAnsweredVisible.value = true
      errorMessage.value = error.response.data.message
    })
})
</script>
