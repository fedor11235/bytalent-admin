<template>
  <div class="login-view">
    <Card class="login-view__card">
      <template #title>Пожалуйста войдите в свою учётную запись</template>
    <template #content>
      <div class="login-view__card_content">
        <InputText type="text" v-model="login" placeholder="логин"/>
        <Password v-model="password" :feedback="false" toggleMask />
        <Button type="submit" label="Войти" @click="handlerEnter" />
      </div>
    </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';

const router = useRouter();

const login =  ref('')
const password =  ref('')

function handlerEnter() {
  if(login.value === "admin" && password.value === "admin") {
    localStorage.setItem('enter', 'enabled')
    router.push({ name: 'home' })
  }
}
</script>

<style lang="scss">
.login-view {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  &__card {
    width: 60vw;
    &_content {
      display: flex;
      flex-direction: column;
      row-gap: 12px;
    }
  }
}
</style>


