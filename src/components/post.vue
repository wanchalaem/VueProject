<template>
  <v-card>

    <v-card class="hide-overflow shadow" color="box-blue" dark>
      <v-toolbar card color="box-blue">
        <v-toolbar-title class="font-weight-light ">POST</v-toolbar-title>
        <v-divider vertical class="pd-10"></v-divider>
        <v-spacer></v-spacer>
  
        <v-btn fab small @click="" color="white">
          <v-icon color="blue">mdi-home</v-icon>
        </v-btn>
  
        <v-btn color="white" fab small @click="isEditing = !isEditing">
          <v-icon color="blue">mdi-account</v-icon>
        </v-btn>
      </v-toolbar></v-card>
    
<v-card-text>
<v-flex xs12 sm6 class="py-2">
 <v-toolbar dense>
    <v-overflow-btn
      :items="dropdown_font"
      label="Select font"
      hide-details
      class="pa-0"
    ></v-overflow-btn>

    <v-divider vertical></v-divider>

    <v-overflow-btn
      :items="dropdown_edit"
      editable
      label="Select size"
      hide-details
      class="pa-0"
      overflow
    ></v-overflow-btn>

    <v-divider
      class="mr-2"
      vertical
    ></v-divider>

    <v-btn-toggle v-model="toggle_multiple" multiple>
      <v-btn :value="1" flat>
        <v-icon>format_bold</v-icon>
      </v-btn>

      <v-btn :value="2" flat>
        <v-icon>format_italic</v-icon>
      </v-btn>

      <v-btn :value="3" flat>
        <v-icon>format_underlined</v-icon>
      </v-btn>
    </v-btn-toggle>
 </v-toolbar>
 <v-text-field 
      box label="Title" 
      value=""
    
      ></v-text-field>
</v-flex>


<v-flex xs12 sm6 class="py-2">
 <v-toolbar dense>
    <v-overflow-btn
      :items="dropdown_font"
      label="Select font"
      hide-details
      class="pa-0"
    ></v-overflow-btn>

    <v-divider vertical></v-divider>

    <v-overflow-btn
      :items="dropdown_edit"
      editable
      label="Select size"
      hide-details
      class="pa-0"
      overflow
    ></v-overflow-btn>

    <v-divider
      class="mr-2"
      vertical
    ></v-divider>

    <v-btn-toggle v-model="toggle_multiple" multiple>
      <v-btn :value="1" flat>
       <v-icon>format_bold</v-icon>
      </v-btn>

      <v-btn :value="2" flat>
        <v-icon>format_italic</v-icon>
      </v-btn>

      <v-btn :value="3" flat>
        <v-icon>format_underlined</v-icon>
      </v-btn>

      
    </v-btn-toggle>
 </v-toolbar>
<v-textarea
        box
        label="Description"
        value=""
        class=""
      ></v-textarea>  
</v-flex>



 <v-flex xs6>
   
     <v-btn class="box-blue white--text">
         <v-icon>mdi-file-upload</v-icon>
     </v-btn>
     <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
    </v-flex>


      <v-btn
        class="box-blue white--text"
        depressed

      >
        Post
      </v-btn>

</v-card-text>

    <v-card-actions>
    </v-card-actions>

<v-footer dark height="auto" style="margin-top:1%">
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

  </v-card>  
</template>

<script>
export default {
  data() {
    return {
      dropdown_font: [
          { text: 'Arial' },
          { text: 'Calibri' },
          { text: 'Courier' },
          { text: 'Verdana' }
        ],
        dropdown_edit: [
          { text: '100%' },
          { text: '75%' },
          { text: '50%' },
          { text: '25%' },
          { text: '0%' }
        ],
        toggle_exclusive: 2,
        toggle_multiple: [1, 2, 3],

      text: "center",
      icon: "justify",
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],

      icons: [
        "mdi-facebook-box",
        "mdi-twitter-box",
        "mdi-google-plus-box",
        "mdi-instagram"
      ],
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ],
    };
  }
};
</script>

