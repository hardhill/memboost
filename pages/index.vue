<template>
<div>
  <AppBar></AppBar>
  <div class="c">
      <v-carousel
      :show-arrows="showArrows"
      :hide-delimiters="hideDelimiters"
      :cycle="cycle"
      :style="{width:'100%'}"
      :show-arrows-on-hover="true"
    >
      <v-carousel-item
        v-for="ad in ads"
        :key="ad.id"
      >
        <v-sheet
          :color="ad.color"
          height="100%"
          tile
        >
          <div class="imgadd" :style="'background-image:url(\''+ad.img+'\')'">
            <div class="fonadd">
              <div class="textadd">{{ad.text}}</div>
              </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</div>
</template>

<script>

import AppBar from '@/components/AppBar'
export default {

  components: {
    AppBar
  },
  middleware:[],
  data () {
      return {
        ads:[
          {
            id:1,
            text:'Тесты и программы стимуляции когнитивных функций',
            color:'yellow darken-2',
            img:'add01.jpg'
          },
          {
            id:2,
            text:'Тренировка мозга для повседневной жизни',
            color:'red',
            img:'add02.jpg'
          },
          {
            id:3,
            text:'Развивайте свои когнитивные способности',
            color:'orange',
            img:'add03.jpg'
          },
        ],
       
        showArrows: true,
        hideDelimiters: true,
        cycle: true,
      }
    },
}
</script>
<style scoped>
.imgadd{
  height: 100%;
  width: 100%;
  background-size: cover;
}
.fonadd{
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(123, 122, 133, 0.705);
  justify-content: center;
  align-items: center;
  padding: 1rem 4rem;
}
.textadd{
  color: azure;
  font-size: 5rem;
}
</style>
