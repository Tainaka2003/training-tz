<template>
  <div id="app">
    <div class="head">
      <div class="head-title">
        Тестовое задание
      </div>
    </div>
    <router-view v-bind:users="users" @addRecord="addRecord" @searchRecord="searchRecord"/>
  </div>
</template>

<script>
import  { mapGetters } from "vuex"

export default {
  name: 'App',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    addRecord(record) {
      this.users.push(record);
    },
    searchRecord(search) {
      this.users.filter(search);
    }
  },
        //  computed: {
        //    users() {
        //      return this.$store.getters.users;
        //    }
        //  }
  computed: mapGetters(['users']),
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
