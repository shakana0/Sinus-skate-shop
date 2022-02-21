<template>
  <div class="form-wrapper">
    <form v-if="isloggedIn" class="form" @submit.prevent="login">
      <h2 class="form-heading">Log in</h2>
      <label for="Email">Email</label>
      <input class="input-field" type="email" id="Email" placeholder="Email" required v-model="email">
      <label for="Password">Password</label>
      <input class="input-field" type="Password" id="Password" placeholder="Password" required v-model="password">
      <button class="submit-button">Log in</button>
    </form>
    <div v-if="isloggedIn" class="Toogle-container">
      <p class="toogle-text">New at Sinus?</p>
      <button class="toogle-button" @click="toogleIsLogin">Register here</button>
    </div>
    <form v-if="!isloggedIn" class="form" @submit.prevent="register">
      <h2 class="form-heading">Create account</h2>
      <label for="First-name">First name</label>
      <input class="input-field" type="text" id="First-name" placeholder="First name" required v-model="firstName">
      <label for="Last-name">Last name</label>
      <input class="input-field" type="text" id="Last-name" placeholder="Last name" required v-model="lastName">
      <label for="Email">Email</label>
      <input class="input-field" type="email" id="Email" placeholder="Email" required v-model="email">
      <label for="Password">Password</label>
      <input class="input-field" type="Password" id="Password" placeholder="Password" required v-model="password">
      <button class="submit-button">Register</button>
    </form>
    <div v-if="!isloggedIn" class="Toogle-container">
      <p class="toogle-text">Already have an account?</p>
      <button class="toogle-button" @click="toogleIsLogin">Sign in</button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isLogIn:{
      default: true
    }
  },
  data(){
    return{
      email: "",
      password: "",
      isloggedIn : "",
      firstName : "",
      lastName: ""
    }
  },
  methods:{
    login(){
      console.log(this.email);
      console.log(this.password);
      //dispatch email and username
    },
    register(){
      console.log(this.email);
      console.log(this.password);
      console.log(this.firstName);
      console.log(this.lastName);
      //dispatch email, username , firstname, lastname
    },
    toogleIsLogin(){
      this.isloggedIn = !this.isloggedIn;
      this.password = "";
      this.email = "";
      this.firstName = "";
      this.lastName = "";
    }
  },
  created(){
    this.isloggedIn = this.isLogIn;
  }
}
</script>

<style scoped lang="scss">
  button{
    background-color: #DF0000;
    text-align: center;
    font-size: 1.4rem;
    cursor:pointer;
    color: #fff;
    border: none;
  }
  button:hover{
      background-color: #E18C8C;
    }
  .form-wrapper{
    padding: 1.2rem;
    max-width: 30%;
    .form{
    display: flex;
    flex-direction: column;

    .form-heading{
      margin-bottom: 0.8rem;
      font-size: 1.6rem;
    }
    label{
      font-size: 1.2rem;
    }
    .input-field{
      padding:0.6rem 0.3rem;
      margin-bottom: 0.8rem;
      margin-top: 0.3rem;
      font-size: 1rem;
    }
  
    .submit-button{
      padding: 0.6rem 0.4rem;
    }
  }
  .Toogle-container{
    margin-top: 2.5rem;
  }
  .toogle-button{
    margin-top: 0.4rem;
    padding: 0.3rem 0.5rem
  }
  
}
  
  
</style>