<template>
    <v-app-bar app class="primary">
      <div class="d-flex align-center text-uppercase app_title">
        <img
          alt="MemBoost"
          class="shrink mr-2"
          contain
          src="~/assets/winnercup.png"
          transition="scale-transition"
          width="50"
        />
        {{title}}
      </div>
      <v-spacer></v-spacer>
      <bm-login-menu :username="username" :show="logined"></bm-login-menu>
    </v-app-bar>
</template>
<script>
import BmLoginMenu from "@/components/LoginMenu";
export default {
    components:{
        BmLoginMenu
    },
    data: () => ({
    title: "Игры разума"
  }),
  computed: {
    logined(){
      return this.$store.getters.GET_LOGINED
      },
    username(){
      return this.$store.getters.GET_USERNAME
    }  
  }
}
</script>