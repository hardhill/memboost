<template>
  <v-row>
    <v-form  v-model="valid" validation ref="form">
    <v-card elevation="10" style="width:420px;">
      <v-card-title style="background-color:#6dd;">Вход</v-card-title>
      <v-card-text style="padding:0px 30px;">
        
          <v-row>
          <v-text-field prepend-icon="mdi-face" label="Логин" counter type="text" v-model.trim="username" :rules="[loginRules.req,loginRules.min]">
          </v-text-field>
          </v-row>
          <v-row>
            <v-text-field prepend-icon="mdi-lock" label="Пароль" type="password" clearable></v-text-field>
          </v-row>
        
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="cancelForm">Отменить</v-btn>
        <v-btn outlined class="ma-4" @click="userlogin" :disabled="!valid">Принять</v-btn>
      </v-card-actions>
    </v-card>
    </v-form>
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
  },
  mounted(){
      const {message} = this.$route.query
      switch (message){
      case 'login':
        //this.$message.info('Для начала надо авторизоваться')
        break
        case 'logout':
        //this.$message.success('Вы успешно вышли из системы')
        break
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
