<template>
<div>
  <AppBar></AppBar>
  <div>
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
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="">{{ad.text}}</div>
          </v-row>
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
  data () {
      return {
        ads:[
          {
            id:1,
            text:'Тесты и программы стимуляции когнитивных функций',
            img:'',
            color:'yellow darken-2'
          },
          {
            id:2,
            text:'Тренировка мозга для повседневной жизни',
            img:'',
            color:'red'
          },
          {
            id:3,
            text:'Развивайте свои когнитивные способности',
            img:'',
            color:'orange'
          },
        ],
       
        showArrows: true,
        hideDelimiters: true,
        cycle: true,
      }
    },
}
</script>
