<template>
  <div id="table">
    <a-table
      :headers="headers"
      :items="items"
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
      items: [
        {
          num: 0,
          id: Date.now(),
          name: 'Аня',
          waybill: '5846',
          typeorder: 'доставка оптом',
          createdate: '2021-06-02',
          isInvisible: true,
        },
        {
          num: 1,
          id: Date.now() - 1,
          name: 'Борис',
          waybill: '3980',
          typeorder: 'покупка в розницу',
          createdate: '2021-06-02',
          isInvisible: true,
        },
        {
          num: 2,
          id: Date.now() - 2,
          name: 'Клара',
          waybill: '7690',
          typeorder: 'доставка оптом',
          createdate: '2021-06-03',
          isInvisible: true,
        },
        {
          num: 3,
          id: Date.now() - 3,
          name: 'Дональд',
          waybill: '3764',
          typeorder: 'покупка в розницу',
          createdate: '2021-06-03',
          isInvisible: true,
        },
        {
          num: 4,
          id: Date.now() - 4,
          name: 'Эдвард',
          waybill: '2754',
          typeorder: 'доставка оптом',
          createdate: '2021-06-04',
          isInvisible: true,
        },
        {
          num: 5,
          id: Date.now() - 5,
          name: 'Дарья',
          waybill: '8233',
          typeorder: 'доставка оптом',
          createdate: '2021-06-05',
          isInvisible: true,
        },
        {
          num: 6,
          id: Date.now() - 6,
          name: 'Виталий',
          waybill: '0254',
          typeorder: 'покупка в розницу',
          createdate: '2021-06-05',
          isInvisible: true,
        },
        {
          num: 7,
          id: Date.now() - 7,
          name: 'Тони',
          waybill: '5399',
          typeorder: 'доставка оптом',
          createdate: '2021-06-06',
          isInvisible: true,
        },
        {
          num: 8,
          id: Date.now() - 8,
          name: 'Мари',
          waybill: '1233',
          typeorder: 'покупка в розницу',
          createdate: '2021-06-07',
          isInvisible: true,
        },
      ],
    };
  },

  computed: {
    getExtRowComponent() {
      return TableExtRowComponent;
    },
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
