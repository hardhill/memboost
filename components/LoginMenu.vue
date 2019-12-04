
<template>
  <div>
    <v-btn class="d-inline" @click="tologin" v-if="!show">Вход</v-btn>
    <v-menu
      :close-on-content-click="true"
      :nudge-width="200"
      offset-y
      v-if="show"
    >
    <template v-slot:activator="{ on }">
      <div class="d-inline mx-6 pointer" v-on="on">{{username}}</div>
    </template>
    <v-list>
        <v-list-item class="pointer">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title @click="dologoff">Выход</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  props:{
      show:{
        type:Boolean,
        default:false
      },
      username:{
        type:String,
        default:'User Name'
      }

  },
  data:()=>({

  }),
  methods:{
    tologin(){
      this.$router.push('login')
    },
    dologoff(){
      this.$store.dispatch('actlogoff',false)
      
    }
  }
}
</script>
<style scoped>
.pointer{
  cursor: pointer;
}
</style>
