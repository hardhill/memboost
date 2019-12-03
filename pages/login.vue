<template>


  <v-row>
    <v-card elevation="15" style="width:420px;">
      <v-card-title style="background-color:#6dd;">Вход</v-card-title>
      <v-card-text>
        <v-form style="padding:15px;" v-model="valid" validation>
          <v-row>
          <v-icon style="margin-right:5px;">mdi-face</v-icon>
          <v-text-field label="Логин" counter type="text" v-model="username" :rules="[loginRules.req,loginRules.min]">
          </v-text-field>
          </v-row>
          <v-row>
            <v-icon style="margin-right:5px;">mdi-lock</v-icon>
            <v-text-field label="Пароль" type="password" clearable></v-text-field>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="cancelForm">Отменить</v-btn>
        <v-btn outlined class="b2" @click="userlogin">Принять</v-btn>
      </v-card-actions>
    </v-card>
  </v-row>


</template>
<script>
export default {
  layout: "begin",
  data(){
    return {
      username: '',
      valid:false,
      loginRules:{
        req:v=>!!v||'Логин обязателен',
        min:v=>v.length>=5||'Длина логина не менее 5'
      }
      }
  },
  computed:{

    counter(){
      return this.$store.state.counter
    }
  },
  methods:{
    userlogin(){

    },
    cancelForm(){
      this.$router.push('/')
    },
    inc(){
      this.$store.commit('increment')
      console.log(this.$store.state.counter)
    }
  }
};
</script>
<style scoped>

.panel {
  max-width: 640px;
}
v-icon{
  margin-right: 15px;
}
.b2{
  margin:10px;
}
</style>
