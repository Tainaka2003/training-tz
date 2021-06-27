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
        <div>
        </div>
      </div>
      <div class="right">
        <div class="right-head">
          <Sorting></Sorting>
          <SwitchView></SwitchView>
        </div>
        <div class="card-wraper">
          <TheTable></TheTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddButton from "@/components/AddButton";
import TheTable from "@/components/table/TheTable";
import Sorting from "@/components/Sorting";
import SwitchView from "@/components/Switch-view";
export default {
name: "KckTableView",
  components: {SwitchView, Sorting, AddButton, TheTable},
  data() {
    return {
      inputStr: '',
    }
  },
  methods: {
    sortArray: function () {
      if (!this.name) return;
      const search = {
        name: this.inputStr,
      };
      this.$emit('searchRecord', search);
    }
  },
  computed: {
    searched () {
      return this.$store.getters.stateUsers.filter(item => {
        return item.name.includes(this.inputStr);
      });
    }
  }
}

</script>

<style scoped>

</style>
