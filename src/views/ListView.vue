<template>
  <div id="apps">
    <div class="main">
      <div class="left">
        <AddButton></AddButton>
        <!-- Filter -->
        <div class="filter">
          <p class="filter-caption">Filters</p>
          <p class="filter-subcaption">Input name</p>
          <div>
            <input type="text" class="filter-input" v-model="inputStr" @keyup="sortArray">
          </div>
        </div>
        <!-- Filter -->
      </div>
      <div class="right">
        <div class="right-head">
          <Sorting></Sorting>
          <SwitchView></SwitchView>
        </div>
        <div class="list-wraper">
          <List :list="list"></List>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AddButton from "@/components/AddButton";
import Sorting from "@/components/Sorting";
import SwitchView from "@/components/Switch-view";
import List from "@/components/List";
export default {
  name: 'App',
  components: {
    SwitchView,
    Sorting,
    AddButton,
    List,
  },
  created() {
    this.list = this.users;
  },
  data() {
    return {
      inputStr: '',
      list: [],
    }
  },
  methods: {
    sortArray() {
      // this.list = this.users.filter(item => {
      //   return item.name.includes(this.inputStr);
      // });
    }
  },
}
</script>

<style>
@import "./../components/style/FilterComponent.scss";
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
