<template>
  <div class="modal">
    <router-link to="/">
      <div class="return">

      </div>
    </router-link>
    <div class="window">
      <p class="window-title">Изменить запись</p>
      <p class="window-text">Имя клиента</p>
      <input type="text" class="window-input" v-model="name">
      <p class="window-text">Номер накладной</p>
      <input type="text" class="window-input" v-model="waybill">
      <p class="window-text">Тип доставки</p>
      <select class="window-input" v-model="typeorder">
        <option value="доставка оптом">доставка оптом</option>
        <option value="покупка в розницу">покупка в розницу</option>
        <option value="курьером на дом">курьером на дом</option>
      </select>
      <p class="window-text">Дата создания</p>
      <input type="date" class="window-input" v-model="createdate">
      <button class="window-record" @click="addRecord">
        <span class="window-record-text">изменить</span>
      </button>
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
    }
  },
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
  width: 20%;
  text-align: center;
}

.window-text {
  padding-left: 20px;
}
.window-input {
  margin-left: 20px;
  margin-bottom: 15px;
}

.window-record {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4943CD;
  box-shadow: 0px 4px 4px #EBEBEB;
  border-radius: 2px;
  border: 0;
  outline: 0;
  width: 20%;
  height: 50px;
  margin: 10px auto;
}

.window-record-text {
  text-transform: uppercase;
  margin-left: 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: #FFFFFF;
}

</style>
