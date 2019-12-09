<template>
  <div>
    <AppBar/>
    <h1>Super secret page</h1>
    <p>If you try to access this URL not connected, you will see the error
       page telling your that you are not connected.</p>
    <NuxtLink to="/">
      Back to the home page
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
