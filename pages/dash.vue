<template>
  <div>
    <AppBar/>
    
    <NuxtLink to="/">
      Вернуться на главную страницу
    </NuxtLink>
  </div>
</template>

<script>
import AppBar from '@/components/AppBar'
export default {
  components:{
    AppBar
  },
   middleware: 'auth'
}
</script>
