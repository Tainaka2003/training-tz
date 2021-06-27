import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import messageFunctionsMixin from './stubs/mixins/messageFunctionsMixin';

Vue.config.productionTip = false

Vue.mixin(messageFunctionsMixin);

new Vue({
  data: {
    messages: {
      'rowsCounter.of': 'из',
    },
  },
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
