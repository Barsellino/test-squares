<template>
  <v-card class="registration-card">
    <v-form @submit.prevent="submitForm">
      <my-input label="Email" placeholder="Enter your email address" :validator="v$.email" v-model="state.email"/>
      <my-input label="Password" placeholder="Enter your password" :validator="v$.password" v-model="state.password" type="password"/>
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import MyInput from '@/components/ui/my-input.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

const state = ref({
  email: '',
  password: ''
})

const rules = {
  email: {
    required,
    email
  },
  password: {
    required,
    minLength: minLength(6)
  }
}

const v$ = useVuelidate(rules, state);

const router = useRouter()

function submitForm() {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    console.log('Auth successful');
    router.push('/game')
  }
}
</script>

<style scoped>
.registration-card {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

v-text-field {
  margin-bottom: 30px;
}

v-btn {
  width: 100%;
}
</style>


