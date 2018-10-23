<template>
  <v-content>
  <v-card
    class="hide-overflow"
    color="box-white"
    
  >
    <v-toolbar
      card
      color="box-blue"
    >
      <v-icon class="white--text">mdi-account</v-icon>
      <v-toolbar-title class="white--text">Profile</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        class="box-white blue--text"
        fab
        small
        @click=""
      >
        <v-icon >mdi-home</v-icon> 
      </v-btn>

     
    </v-toolbar>

    <v-toolbar> 

      <v-spacer></v-spacer>
      <v-btn
        class="box-white blue--text"
        fab
        small
        @click="isEditing = !isEditing"
      >
        
        <v-icon v-if="isEditing">mdi-close</v-icon>
        <v-icon v-else>mdi-pencil</v-icon>
      </v-btn>
      </v-toolbar>

    <v-card-text>
      <v-text-field
        :disabled="!isEditing"
        color="blue"
        label="Fullname"  
      ></v-text-field>  

      <v-text-field
        :disabled="!isEditing"
        color="blue"
        label="Nickname"  
      ></v-text-field>  
      
      <!-- <v-autocomplete
        :disabled="!isEditing"
        :items="itemg"
        :filter="customFilter"
        color="blue"
        item-text="gender"
        label="Gender"
      > </v-autocomplete> -->

      <v-text-field
        :disabled="!isEditing"
        color="blue"
        label="Gender"  
      ></v-text-field>  

       <v-text-field
        :disabled="!isEditing"
        color="blue"
        label="Address"  
      ></v-text-field>

      <v-text-field
        :disabled="!isEditing"
        color="blue"
        label="Telephone"  
      ></v-text-field>

      <v-text-field
        :disabled="!isEditing"
        color="blue"
        label="E-mail"  
      ></v-text-field>

    </v-card-text>

 
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!isEditing"
        color="box-blue white--text"
        @click="save"
        
      >
        Save
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Your profile has been updated
    </v-snackbar>
  </v-card>

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
    data () {
      return {
        icons: [
      "mdi-facebook-box",

      "mdi-twitter-box",

      "mdi-google-plus-box",

      "mdi-instagram"
    ],
        hasSaved: false,
        isEditing: null,
        model: null,
        // itemg: [
        //   { name: 'Male', abbr: 'M', id: 1 },
        //   { name: 'Female', abbr: 'FE', id: 2 }
        // ]
      }
    },

    methods: {
      //  customFilter (itemg, queryText, itemText) {
      //   const textOne = itemg.name.toLowerCase()
      //   const textTwo = itemg.abbr.toLowerCase()
      //   const searchText = queryText.toLowerCase()

      //   return textOne.indexOf(searchText) > -1 ||
      //     textTwo.indexOf(searchText) > -1
      // },
      
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      }
    }
  }
</script>