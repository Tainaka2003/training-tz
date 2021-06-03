<template>
  <div id="app">
    <div class="head">
      <div class="head-title">
        Тестовое задание
      </div>
    </div>
    <div class="main">
      <div class="left">
        <AddButton></AddButton>
        <FilterComponent></FilterComponent>
      </div>
      <div class="right">
        <div class="right-head">
          <Sorting></Sorting>
          <SwitchView></SwitchView>
        </div>
        <div  class="card-wraper" :class="{ invisibleCard: isInvisibleCard }">
          <Card v-bind:users="users" :isInvisibleCard="isInvisibleCard"></Card>
        </div>
        <div :isInvisibleList="isInvisibleList" class="list-wraper" :class="{ invisibleList: isInvisibleList }">
          <List v-bind:users="users" :isInvisibleList="isInvisibleList"></List>
        </div>
      </div>
    </div>
    <pre>
      {{$data}}
    </pre>
  </div>
</template>

<script>

import AddButton from "@/components/AddButton";
import FilterComponent from "@/components/FilterComponent";
import Sorting from "@/components/Sorting";
import SwitchView from "@/components/Switch-view";
import List from "@/components/List";
import Card from "@/components/Card";
export default {
  name: 'App',
  components: {
    Card,
    List,
    SwitchView,
    Sorting,
    FilterComponent,
    AddButton
  },
  data() {
    return {
      isInvisibleList: false,
      isInvisibleCard: false,
      users: [
        {id:0, name: 'Аня', waybill: '5846', typeOrder:'доставка оптом', createDate: '02.06.2021', isInvisible: true,},
        {id:1, name: 'Борис', waybill: '3980', typeOrder:'покупка в розницу', createDate: '02.06.2021', isInvisible: true,},
        {id:2, name: 'Клара', waybill: '7690', typeOrder:'доставка оптом', createDate: '02.06.2021', isInvisible: true,},
        {id:3, name: 'Дональд', waybill: '3764', typeOrder:'покупка в розницу', createDate: '02.06.2021', isInvisible: true,},
        {id:4, name: 'Эдвард', waybill: '2754', typeOrder:'доставка оптом', createDate: '02.06.2021', isInvisible: true,},

      ],
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.head {
  background: linear-gradient(270deg, #900793 0%, #01003C 100%);
  height: 100px;
}

.main {
  display: flex;
  flex-direction: row;
  margin: 30px 110px 0 110px;
}

.head-title {
  padding: 25px 0 0 30px;
  text-align: left;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  color: #FFFFFF;

  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.right-head {
  display: flex;
  flex-direction: row;
}

.invisibleList,
.invisibleCard {
  display: none;
}

</style>
