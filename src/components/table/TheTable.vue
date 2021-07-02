<template>
  <div id="table">
    <a-table
      :headers="headers"
      :items="items"
      :searched="searched"
      :sortParams="sortParams"
      :sortParamsDefault="sortParamsDefault"
      :useExtRowComponent="getExtRowComponent"
      :getRowClassesByItem="getRowClassesByItem"
    ></a-table>
  </div>
</template>

<script>
import ATable from './components/ATable';
import TableCustomHeader from './../../stubs/components/TableCustomHeader';
import TableExtRowComponent from './../../stubs/components/TableExtRowComponent';
import TableCustomCellActions from './../../stubs/components/TableCustomCellActions';
import {mapGetters} from "vuex";

export default {
  name: 'TheTable',

  components: {
    ATable,
  },

  data() {
    return {
      headers: [
        {
          key: 'id',
          title: '№',
          headerAlign: 'center',
          dataAlign: 'center',
          classes: 'order-col width-4',
        },
        {
          key: 'name',
          name: 'number',
          title: 'Имя клиента',
          headerAlign: 'center',
          dataAlign: 'left',
          sortControl: true,
          useHeaderComponent: TableCustomHeader,
        },
        {
          key: 'waybill',
          name: 'number',
          title: 'Номер накладной',
          headerAlign: 'center',
          dataAlign: 'left',
          sortControl: true,
          useHeaderComponent: TableCustomHeader,
        },
        {
          key: 'typeorder',
          name: 'number',
          title: 'Тип доставки',
          headerAlign: 'center',
          dataAlign: 'left',
          sortControl: true,
          useHeaderComponent: TableCustomHeader,
        },
        {
          key: 'createdate',
          name: 'number',
          title: 'Дата создания',
          headerAlign: 'center',
          dataAlign: 'left',
          sortControl: true,
          useHeaderComponent: TableCustomHeader,
        },
        {
          key: 'actions',
          title: 'Actions',
          headerAlign: 'center',
          dataAlign: 'center',
          useComponent: TableCustomCellActions,
        },
        {
          key: 'mobileDescription',
          title: 'Description',
          headerAlign: 'center',
          dataAlign: 'center',
          classes: 'no-info mobile-col',
          position: 'afterAll',
        },
      ],
      sortParamsDefault: {
        sidx: 'number',
        sord: 'desc',
      },
      sortParams: {
        sidx: '',
        sord: '',
      },
    };
  },

  props: { searched: Array
  },

  computed: {
    getExtRowComponent() {
      return TableExtRowComponent;
    },
    ...mapGetters ([
      'items',
    ]),
  },

  methods: {
    getRowClassesByItem(item) {
      return `custom-class-${item.id}`;
    },
  },
};
</script>

<style lang="scss">
  @import "./scss/table";
</style>
