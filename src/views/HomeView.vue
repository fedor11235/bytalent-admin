<template>
  <div class="home-view">
    <TabView>
      <TabPanel header="Заказы">
        <DataTable :value="orders" @rowSelect="handlerRowSelect">
            <Column field="id" header="Id заказа"></Column>
            <Column field="name" header="Имя заказчика"></Column>
            <Column field="phone" header="Телефон заказчика"></Column>
            <Column field="email" header="Email заказчика"></Column>
            <Column field="author_id" header="Id заказчика"></Column>
        </DataTable>
      </TabPanel>
      <TabPanel header="Проекты">
        <DataTable :value="projects" @rowSelect="handlerRowSelect">
            <Column field="id" header="Id проекта"></Column>
            <Column field="type" header="Тип проекта"></Column>
            <Column field="class" header="Класс проекта"></Column>
            <Column field="address" header="Адресс проекта"></Column>
            <Column field="info" header="Информация о проекте"></Column>
            <Column field="images" header="Изображения проекта"></Column>
            <Column field="city" header="Город проекта"></Column>
            <Column field="links" header="Ссыдки проекта"></Column>
            <Column field="status" header="Статус проекта"></Column>
            <Column field="comments" header="Комментарии проекта"></Column>
            <Column field="likes" header="Лайки проекта"></Column>
            <Column field="author_id" header="Айди автора"></Column>
        </DataTable>
      </TabPanel>
    </TabView>
    <Button class="home-view__logout" type="button" label="Выйти" severity="danger" @click="handlerLogout" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from "vue-router";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import orderService from '@/services/order';
import projectService from '@/services/project';

const router = useRouter();

const orders =  ref([])
const projects =  ref([])

function handlerLogout() {
  localStorage.setItem('enter', '')
  router.push({ name: 'login' })
}

function handlerRowSelect() {
  console.log('select')
}

onMounted(() => {
  orderService.getAllOrders().then(res => orders.value = res.orders)
  projectService.getAllProjects().then(res => projects.value= res.projects)
});
</script>

<style lang="scss">
.home-view {
  height: 100vh;
  width: 100vw;
  .home-view__logout {
    position: fixed;
    bottom: 32px;
    right: 32px;
  }
}
</style>
