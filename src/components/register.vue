<template>
  <v-content>
  
    <v-card class="hide-overflow shadow" color="box-blue" dark>
      <v-toolbar card color="box-blue">
        <v-toolbar-title class="font-weight-light ">SIGN UP</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn fab small @click="" color="white">
          <v-icon color="blue">mdi-home</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  
    <form class="">
<v-container fluid grid-list>
  <v-layout row>
      <v-flex xs6 >
          <v-text-field 
          v-validate="'required|max:12'" 
          v-model="username" 
          :counter="12" 
          :error-messages="errors.collect('username')" 
          label="Username" 
          data-vv-name="username" 
          required :rules="[rules.required, rules.min]"
          class="blue--text"
          
          style="color:blue;"
          ></v-text-field>

          <v-text-field 
          v-validate="'required|max:12'" 
          v-model="password" 
          :counter="12" 
          :error-messages="errors.collect('password')" 
          label="Password" 
          data-vv-name="password" 
          required :append-icon="show2 ? 'visibility_off' : 'visibility'" :rules="[rules.required, rules.minn]"
          :type="show2 ? 'text' : 'password'" 
          class="input-group--focused blue--text" 
          @click:append="show2 = !show2"
          
          style="color:blue;"
          ></v-text-field>

          <v-text-field 
          v-validate="'required|max:12'" 
          v-model="confirmpassword" 
          :counter="12" 
          :error-messages="errors.collect('confirmpassword')" 
          label="Confirm Password" 
          data-vv-name="confirmpassword" 
          required :append-icon="show2 ? 'visibility_off' : 'visibility'" :rules="[rules.required, rules.minn]"
          :type="show2 ? 'text' : 'password'" 
          class="input-group--focused blue--text" 
          @click:append="show2 = !show2"
          
          style="color:blue;"
          ></v-text-field>
          
          <v-text-field 
          v-validate="'required|max:30'" 
          v-model="email" 
          :error-messages="errors.collect('email')" 
          label="E-mail" 
          data-vv-name="email" 
          required :rules="[rules.required, rules.min]"
          class="blue--text"
          
          style="color:blue;"
          ></v-text-field>

          <v-btn @click="create" class="box-blue white--text">Create Account</v-btn>
          <v-btn @click="clear" class="box-blue white--text">clear</v-btn>
        </v-flex>

<v-divider
      class="mx-5 "
      inset
      vertical
      
    ></v-divider>

<v-flex xs6 class="pd-20">
        <v-btn class="box-blue white--text" large>
          <v-icon class="">mdi-google-plus-box</v-icon>
          <v-divider vertical  class="pd-4 box-blue"></v-divider>
          Sign Up with Google   
        </v-btn>
  <v-spacer></v-spacer>
    <v-btn class="box-blue white--text" large>
          <v-icon class="">mdi-facebook-box</v-icon>
          <v-divider vertical  class="pd-4 box-blue"></v-divider>
          Sign Up with Facebook
        </v-btn>
        </v-flex>

</v-layout>
<v-divider class="mrt-20"></v-divider>
</v-container>
</form>

    <v-footer dark height="auto" style="margin-top:4.5%">
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
import Vue from "vue";

import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    icons: [
      "mdi-facebook-box",

      "mdi-twitter-box",

      "mdi-google-plus-box",

      "mdi-instagram"
    ],

    gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)",

    username: "",

    password: "",

    show2: true,

    rules: {
      required: value => !!value || "Required.",

      min: v => v.length >= 6 || "Min 6 characters",

      minn: v => v.length >= 6 || "Min 6 characters"
    },

    dictionary: {
      attributes: {
        username: "Username",

        password: "Password",

        confirmpassword:"ConfirmPassword"

        // custom attributes
      },

      custom: {
        username: {
          required: () => "Username can not be empty",

          max: "Username field may not be greater than 12 characters"

          // custom messages
        },

        password: {
          required: () => "Password can not be empty",

          max: "Password field may not be greater than 12 characters"
        },
        confirmpassword: {
          required: () => "Password can not be empty",
          required: () => "Password and ConfirmPassword is not match",

          max: "Password field may not be greater than 12 characters"
        }
      }
    }
  }),

  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
    },

    clear() {
      this.username = "";

      this.password = "";

      this.confirmpassword = "";

      this.$validator.reset();
    }
  }
};
</script>