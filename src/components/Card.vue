<template>
  <div class="right-main_card-wrap">
    <div class="main_card" :users="users" v-for="(user, index) in users" v-bind:key="user.id">
    <div class="right-main_card-head">
      <span class="card-title">Card {{user.id+1}}</span>
      <div class="btn-wrap">
        <button class="dots" v-bind:class="{ invisible: user.isInvisible }">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M13.2933 7.82832L6.75539 14.3662L6.01437 17.384C5.97286 17.5529 6.02269 17.7313 6.14571 17.8543C6.26913 17.9777 6.44759 18.027 6.61603 17.9856L9.63382 17.2446L16.1717 10.7067L13.2933 7.82832ZM6.95806 17.0419L7.21284 16.0043L7.99566 16.7872L6.95806 17.0419Z" fill="#647A8C"/>
              <path d="M17.7797 8.0348L15.9653 6.22036C15.6714 5.92655 15.1951 5.92655 14.9013 6.22036L14.1788 6.94282L17.0572 9.82123L17.7797 9.09877C18.0735 8.80498 18.0735 8.32861 17.7797 8.0348Z" fill="#647A8C"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="12" height="12" fill="white" transform="translate(6 6)"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <button class="dots" v-bind:class="{ invisible: user.isInvisible }" v-on:click="users.splice(index, 1);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.943 9.33334H8.0571C7.81846 9.33334 7.625 9.51431 7.625 9.7376V16.0532C7.625 17.1267 8.55841 18 9.70559 18H14.2943C15.4416 18 16.375 17.1267 16.375 16.0532V9.7376C16.375 9.51437 16.1817 9.33334 15.943 9.33334ZM10.9613 15.5651C10.9613 15.8394 10.7237 16.0617 10.4305 16.0617C10.1374 16.0617 9.89961 15.8394 9.89961 15.5651V11.7683C9.89961 11.4939 10.1373 11.2716 10.4305 11.2716C10.7236 11.2716 10.9613 11.494 10.9613 11.7683V15.5651ZM14.1004 15.5651C14.1004 15.8394 13.8627 16.0617 13.5695 16.0617C13.2765 16.0617 13.0387 15.8394 13.0387 15.5651V11.7683C13.0387 11.4939 13.2764 11.2716 13.5695 11.2716C13.8627 11.2716 14.1004 11.494 14.1004 11.7683V15.5651Z" fill="#647A8C"/>
            <path d="M15.6433 6.58036H13.6897V6.43945C13.6897 6.19713 13.4527 6 13.1614 6H10.8387C10.5474 6 10.3103 6.19713 10.3103 6.43945V6.58036H8.35671C7.60864 6.58036 7 7.08655 7 7.70875V8.43233C7 8.56173 7.12613 8.66667 7.28178 8.66667H16.7183C16.8739 8.66667 17 8.56173 17 8.43233V7.70875C17 7.08656 16.3914 6.58036 15.6433 6.58036Z" fill="#647A8C"/>
          </svg>
        </button>
        <button class="dots" v-on:mouseover="user.isInvisible=!user.isInvisible">
          <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 1.75C4 0.7875 3.1 0 2 0C0.9 0 0 0.7875 0 1.75C0 2.7125 0.9 3.5 2 3.5C3.1 3.5 4 2.7125 4 1.75ZM4 12.25C4 11.2875 3.1 10.5 2 10.5C0.9 10.5 0 11.2875 0 12.25C0 13.2125 0.9 14 2 14C3.1 14 4 13.2125 4 12.25ZM4 7C4 6.0375 3.1 5.25 2 5.25C0.9 5.25 0 6.0375 0 7C0 7.9625 0.9 8.75 2 8.75C3.1 8.75 4 7.9625 4 7Z" fill="#647A8C"/>
          </svg>
        </button>
      </div>
    </div>
    <p class="right-main_card-text">
      ID: {{user.name}}
    </p>
    <p class="right-main_card-text">
      Номер накладной: {{user.waybill}}
    </p>
    <p class="right-main_card-text">
      Тип заказа: {{user.typeOrder}}
    </p>
    <p class="right-main_card-text">
      Дата создания: {{user.createDate}}
    </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
    }
  },
  props: {
    users: Array
  }
}
</script>

<style scoped>
@import "style/Card.scss";

</style>
