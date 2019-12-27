<template>
  <v-app app>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
    
};
</script>
<style>
/* для того чтоб не было полосы прокутки */
html { overflow-y: auto; }
.container{
  padding: 0px;
}
</style>
