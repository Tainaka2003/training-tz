<template>
  <div id="app">
    <div class="head">
      <div class="head-title">
        Тестовое задание
      </div>
    </div>
    <router-view v-bind:users="users" @addRecord="addRecord"/>
    <pre>
      {{$data}}
    </pre>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      users: [
        {id:Date.now()-2**10, name: 'Аня', waybill: '5846', typeorder:'доставка оптом', createdate: '02.06.2021', isInvisible: true,},
        {id:Date.now()-2**11, name: 'Борис', waybill: '3980', typeorder:'покупка в розницу', createdate: '02.06.2021', isInvisible: true,},
        {id:Date.now()-2**12, name: 'Клара', waybill: '7690', typeorder:'доставка оптом', createdate: '02.06.2021', isInvisible: true,},
        {id:Date.now()-2**13, name: 'Дональд', waybill: '3764', typeorder:'покупка в розницу', createdate: '02.06.2021', isInvisible: true,},
        {id:Date.now()-2**14, name: 'Эдвард', waybill: '2754', typeorder:'доставка оптом', createdate: '02.06.2021', isInvisible: true,},
      ],
    }
  },
  methods: {
    addRecord(record) {
      this.users.push(record);
    }
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

.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}

</style>
