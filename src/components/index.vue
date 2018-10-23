<template>
  <v-content>
  
    <v-card class="hide-overflow shadow" color="box-blue" dark>
      <v-toolbar card color="blueONblue">
      
          <v-toolbar-title  ><b class="wh box-red pd-4">Review</b>&nbsp;Company&nbsp;</v-toolbar-title>
     
        <v-divider vertical></v-divider>
        <v-spacer></v-spacer>
  
        
  
        <v-btn color="white" fab small @click="isEditing = !isEditing">
          <v-icon color="blue">mdi-account</v-icon>
        </v-btn>
  
      </v-toolbar>
    </v-card>
    <v-divider class="pd-2 box-blueFX"></v-divider>
  
    <v-carousel class="shadow">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade" transition="fade"></v-carousel-item>
    </v-carousel>
  
    <v-divider class="pd-2 box-blueFX"></v-divider>
   
   <v-layout class="box-blue pd-40 ">
     <v-flex xs12>
        <center>
        <h1 class="wh">ค้นหาหรือสร้างรีวิวบริษัทที่น่าสนใจ</h1>
        <h3 class="wh nm">จากตารางท็อปรีวิวที่น่าสนใจของเรา !</h3>
        <v-layout>
          <v-flex xs10>
             <v-text-field   
          name="name"
          label="ค้นหา"
          id="id"
        ></v-text-field> 
          </v-flex>
          <v-flex xs2> 
             <v-btn fab dark color="box-red">  <v-icon dark>add</v-icon> </v-btn>
          <v-btn fab dark color="box-pink">  <v-icon dark>favorite</v-icon> </v-btn>
          </v-flex>
        </v-layout>
      </center>
     </v-flex>
   </v-layout>

   <v-layout>
     <v-container grid-list-md text-xs-center>
                <v-layout row wrap >
                    <v-flex xs6 v-for="i in 10"  class="mrt-10">
                      <v-card>
                        <v-layout row class="pd-20" >
                          <v-flex xs4 >
                          <img style="width:150px; height:150px; border-radius:50%;" src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg?width=700&crop=2:1" alt="">
                          </v-flex>
                           <v-flex xs8>
                             <h1>Google</h1>
                             <v-divider></v-divider><br>
                             <span style="text-align: left!important;">บริษัทมหาชนอเมริกัน มีรายได้หลักจากการโฆษณาออนไลน์ที่ปรากฏในเสิร์ชเอนจินของกูเกิล</span>
                           <br><br> <v-divider></v-divider>
                           <v-layout>
                             <v-flex xs4> <v-btn class="blueONblue wh" round><b>ดูรายระเอียด</b></v-btn></v-flex>
                              <v-flex xs8> <v-rating   color="yellow" v-model="rating"></v-rating></v-flex>
                           </v-layout> 
                          </v-flex>

                        </v-layout>
                        
                      </v-card>
                    </v-flex>

                </v-layout>


            </v-container>
   </v-layout>
  
 
  
  </v-content>
</template>



<script>
export default {
  data() {
    return {
      page: 1,

      rating: 4.3,

      icons: [
        "mdi-facebook-box",
        "mdi-twitter-box",
        "mdi-google-plus-box",
        "mdi-instagram"
      ],

      items: [
        {
          src: "http://aceseurope.eu/wp-content/uploads/2017/10/company.jpg"
        },
        {
          src: "http://irplus.in.th/listed/planet/images/RATCH-76-3-570x350.jpg"
        },
        {
          src:
            "https://www.jobbkk.com/upload/employer/05/A95/00AA95/images/zoU3GARdw5.jpg"
        },
        {
          src: "http://asiaprecision.com/assets/uploads/company.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>
>
