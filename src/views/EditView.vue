<template>
  <div class="modal">
    <router-link to="/">
      <div class="return">

      </div>
    </router-link>
    <div class="window">
      <p class="window-title">Изменить запись номер {{i+1}}</p>
      <div class="editor-wrap">
        <p class="window-text">Имя клиента</p>
        <input type="text" class="window-input" v-model="users[i].name">
        <p class="window-text">Номер накладной</p>
        <input type="text" class="window-input" v-model="users[i].waybill">
        <p class="window-text">Тип доставки</p>
        <input type="text" class="window-input" v-model="users[i].typeorder">
        <p class="window-text">Дата создания</p>
        <input type="text" class="window-input-last" v-model="users[i].createdate">
      </div>
      <div class="pag-wraper">
        <button class="pag" v-on:click="i--">Prev</button>
        <button class="pag" v-on:click="i++">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalView",
  data() {
    return {
      name: '',
      waybill: '',
      typeorder: '',
      createdate: '',
      inputStr: '',
      list: [],
      i: 0,
    }
  },
  methods: {
    addRecord: function () {
      if (!this.waybill || !this.createdate || !this.typeorder) return;
      const record = {
        id:Date.now(),
        name: this.name,
        waybill: this.waybill,
        typeorder: this.typeorder,
        createdate: this.createdate,
        isInvisible: true,
      };
      this.$emit('addRecord', record);
      this.name='';
      this.waybill='';
      this.typeorder='';
      this.createdate='';
    },
  },
  props: {
    users: Array,
  }
}
</script>

<style scoped>

.modal, .return {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal {
  background: rgba(43, 40, 57, 0.2);
}

.editor-wrap {

}

.window {
  background: #FFFFFF;
  position: absolute;
  top: 27.5%;
  left: 27.5%;
  width: 45%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.window-title {
  margin: 10px auto;
  width: 30%;
  text-align: center;
}

.window-text {
  padding-left: 20px;
}

.window-input {
  margin-left: 20px;
  margin-bottom: 15px;
}

.window-input-last {
  margin-left: 20px;
  margin-bottom: 15px;
  margin-right: 15px;
}

.pag-wraper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.pag {

}

</style>
