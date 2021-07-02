<template>
  <th>
    <div @click="sorting" :title="getMessageByKey(header.title) ">
      {{getMessageByKey(header.title)}}<br/>
    </div>
  </th>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'TableCustomHeader',

  props: {
    header: {
      type: Object,
      default() {
        return {};
      },
    },
    searched: Array
  },
  computed: {
    ...mapState ([
      'users',
    ]),
  },
  methods: {
    sorting() {
      return this.users.sort(function (a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      })
    },
  },
};
</script>
