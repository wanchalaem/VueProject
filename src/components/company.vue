<template>
  <v-content>
  
  
    <v-card class="hide-overflow shadow"  dark>
      <v-toolbar card color="box-blue">
        <v-btn class="box-white blue--text">
          <v-toolbar-title class="font-weight-light">Company Name</v-toolbar-title>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-spacer></v-spacer>

        <v-btn fab small @click="" color="white">
          <v-icon color="blue">mdi-home</v-icon>
        </v-btn>
 
        <v-btn color="white" fab small @click="isEditing = !isEditing">
          <v-icon color="blue">mdi-account</v-icon>
        </v-btn>
  
      </v-toolbar>
    </v-card>

    <v-divider class="pd-2 box-white"></v-divider>

    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade" transition="fade"></v-carousel-item>
    </v-carousel>
  
    <v-divider class="pd-2 box-blueFX"></v-divider>
    <v-card class="hide-overflow shadow box-blueFX" >

      <v-toolbar card color="box-blue">
        <v-layout>
          <v-btn class="box-white blue--text">
            <v-toolbar-title class="font-weight-light">
              Company Name
            </v-toolbar-title>
          </v-btn>
          <v-divider vertical></v-divider>
          <v-chip color="white" text-color="blue">
            <v-avatar>
              <v-icon>account_circle</v-icon>
            </v-avatar>
            Poster
          </v-chip>
  
          <v-spacer></v-spacer>

          <span class="grey--text text--lighten-2 caption mr-2">  
                    ({{rating}})  
                  </span>
          <v-rating v-model="rating" background-color="white" color="yellow accent-4" dense half-increments hover size="30"></v-rating>
        </v-layout>
      </v-toolbar>

      <v-divider class="pd-2"></v-divider>
      <v-textarea name="input-7-1" 
      box label="Description"
       auto-grow value="Information" 
       class="pd-10  box-blue white--text"
       dark
       >
      </v-textarea>
 <v-divider></v-divider>
      <!-- background-color="blue" -->
      <!-- text-color="white" -->
      <!-- color="white"  -->

      <v-layout row wrap>
        <v-flex xs6 v-for="i in 6" class="pd-10">
          <v-textarea name="input-7-1" 
      box label="User1"
       auto-grow value="Comment" 
       class="pd-10 white--text box-blue"
       dark
       >
      
          </v-textarea>
        </v-flex>
      </v-layout>
  
      <div class="text-xs-center pdb-20 ">
        <v-pagination v-model="page" :length="5" circle></v-pagination>
      </div>
    </v-card>
  
    <v-form class="box-blueFX">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-textarea name="input-7-1" 
            box label="Comment" 
            auto-grow value="" 
            class="pd-10 box-blue white--text" 
            clear-icon="mdi-close-circle"
            dark
            >
            </v-textarea>
            <v-btn class="box-blue white--text ">Comment</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="box-blue white--text">
          <strong class="subheading">Get connected with us on social networks!</strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-actions class="box-blue justify-center">
          <strong>Review Company</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-content>
</template>


<script>
export default {
  data() {
    return {
      icons: [
        "mdi-facebook-box",
        "mdi-twitter-box",
        "mdi-google-plus-box",
        "mdi-instagram"
      ],

      page: 1,
      rating: 4.8,
      items: [
        {
          src:
            "https://smedia2.intoday.in/btmt/images/stories/google32789_660_092518073428.jpg"
        },
        {
          src:
            "https://cdn.vox-cdn.com/thumbor/r5VZn5enhfyVSf3sF31sCfWdcdM=/0x0:3000x2068/1200x800/filters:focal(1260x794:1740x1274)/cdn.vox-cdn.com/uploads/chorus_image/image/59989721/google.0.jpg"
        },
        {
          src:
            "https://static1.squarespace.com/static/55e5defce4b0b81c50fa20ff/55ef30d1e4b06257ab19fbbd/55ef41d2e4b06257ab1a7726/1495747514525/?format=1500w"
        },
        {
          src:
            "https://neilpatel.com/wp-content/uploads/2013/02/google-dublin.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>

