<template>
  <div class="modal">
    <router-link to="/">
      <div class="return">

      </div>
    </router-link>
    <div>
      <div class="window" v-for="(user, index) in editable" v-bind:key="index">
        <p class="window-title">Изменить запись {{user.id}}</p>
        <p class="window-text">Имя клиента</p>
        <input type="text" class="window-input" v-model="user.name">
        <p class="window-text">Номер накладной</p>
        <input type="text" class="window-input" v-model="user.waybill">
        <p class="window-text">Тип доставки</p>
        <select class="window-input" v-model="user.typeorder">
          <option value="доставка оптом">доставка оптом</option>
          <option value="покупка в розницу">покупка в розницу</option>
          <option value="курьером на дом">курьером на дом</option>
        </select>
        <p class="window-text">Дата создания</p>
        <input type="date" class="window-input" v-model="user.createdate">
        <button class="window-record" @click="addRecord">
          <span class="window-record-text">изменить</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
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
        id: Date.now(),
        name: this.name,
        waybill: this.waybill,
        typeorder: this.typeorder,
        createdate: this.createdate,
        isInvisible: true,
      };
      this.$emit('addRecord', record);
      this.name = '';
      this.waybill = '';
      this.typeorder = '';
      this.createdate = '';
    }
  },
  computed: {
    ...mapState([
      'users',
    ]),
    editable() {
      return this.$store.getters.stateUsers.filter(item => {
        return item.waybill.includes(this.userId);
      });
    }
  },
  props: ['userId']
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
  top: 200px;
  left: 560px;
  width: 800px;
  height: 480px;
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
