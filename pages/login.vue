<template>
  <v-row>
    <v-card elevation="10" style="width:420px;">
      <v-card-title style="background-color:#6dd;">Вход</v-card-title>
      <v-card-text>
        <v-form style="padding:15px;" v-model="valid" validation>
          <v-row>
          <v-text-field prepend-icon="mdi-face" label="Логин" counter type="text" v-model.trim="username" :rules="[loginRules.req,loginRules.min]">
          </v-text-field>
          </v-row>
          <v-row>
            <v-text-field prepend-icon="mdi-lock" label="Пароль" type="password" clearable></v-text-field>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="cancelForm">Отменить</v-btn>
        <v-btn outlined class="ma-4" @click="userlogin" :disabled="btn_validator">Принять</v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>
<script>
export default {
  layout: "begin",
  data(){
    return {
      valid:false,
      loginRules:{
        req:v=>!!v||'Логин обязателен',
        min:v=>v.length>=5||'Длина логина не менее 5'
      }
      }
  },
  computed:{
    username:{
      get(){
        return this.$store.getters.GET_USERNAME
      },
      set(value){
        this.$store.dispatch('actsetusername',value)
      }
    },
    btn_validator(){
      return !(this.$store.getters.GET_USERNAME.length>4)
    }
  },
  methods:{
    userlogin(){
      this.$store.dispatch('actlogin',true)
      this.$router.push('/dash')
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
.v-card{
  background-color: aliceblue;
}

.b2{
  margin:10px;
}
</style>
