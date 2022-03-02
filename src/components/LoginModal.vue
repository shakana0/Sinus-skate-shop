<template>
  <div class="form-wrapper">
    <!-- <div v-if="!getUser"> -->
    <form
      v-if="isloggedIn || isRegistered"
      class="form"
      @submit.prevent="login"
    >
      <h2 class="form-heading">Log in</h2>
      <label for="Email">Email</label>
      <input
        class="input-field"
        type="email"
        id="Email"
        placeholder="Email"
        required
        v-model="registrationData.email"
      />
      <label for="Password">Password</label>
      <input
        class="input-field"
        type="Password"
        id="Password"
        placeholder="Password"
        required
        v-model="registrationData.password"
      />
      <p class="error" v-if="loginError">Invalid credentials</p>
      <button class="submit-button">Log in</button>
    </form>
    <div v-if="isloggedIn || isRegistered" class="Toogle-container">
      <p class="toogle-text">New at Sinus?</p>
      <button class="toogle-button" @click="toogleIsLogin">
        Register here
      </button>
    </div>
    <form
      v-if="!isloggedIn && !isRegistered"
      class="form"
      @submit.prevent="register"
    >
      <h2 class="form-heading">Create account</h2>
      <label for="First-name">First name</label>
      <input
        class="input-field"
        type="text"
        id="First-name"
        placeholder="First name"
        required
        v-model="firstName"
      />
      <label for="Last-name">Last name</label>
      <input
        class="input-field"
        type="text"
        id="Last-name"
        placeholder="Last name"
        required
        v-model="lastName"
      />
      <label for="Email">Email</label>
      <input
        class="input-field"
        type="email"
        id="Email"
        placeholder="Email"
        required
        v-model="registrationData.email"
      />
      <label for="Password">Password</label>
      <input
        class="input-field"
        type="Password"
        id="Password"
        placeholder="Password"
        required
        v-model="registrationData.password"
      />
      <label for="zip">Zip</label>
      <input
        class="input-field"
        type="Number"
        id="zip"
        placeholder="Zip"
        required
        v-model="registrationData.address.zip"
      />
      <label for="city">City</label>
      <input
        class="input-field"
        type="text"
        id="city"
        placeholder="City"
        required
        v-model="registrationData.address.city"
      />
      <label for="street">Street</label>
      <input
        class="input-field"
        type="text"
        id="street"
        placeholder="Street"
        required
        v-model="registrationData.address.street"
      />
      <p class="error" v-if="registrationError">Invalid input</p>
      <button class="submit-button">Register</button>
    </form>
    <div v-if="!isloggedIn && !isRegistered" class="Toogle-container">
      <p class="toogle-text">Already have an account?</p>
      <button class="toogle-button" @click="toogleIsLogin">Sign in</button>
    </div>
    <!-- </div> -->
    <!-- <div v-else>
      <p>Logged in</p>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    isLogIn: {
      default: true,
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      isloggedIn: "",
      registrationData: {
        email: "",
        password: "",
        name: "",
        address: {
          zip: "",
          city: "",
          street: "",
        },
      },
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    loginError() {
      return this.$store.state.errors.loginError;
    },
    registrationError() {
      return this.$store.state.errors.registrationError;
    },
    getUser() {
      return Object.keys(this.$store.state.user).includes("email");
    },
    isRegistered() {
      return this.$store.state.isRegistered;
    },
  },
  methods: {
    login() {
      const loginData = {
        email: this.registrationData.email,
        password: this.registrationData.password,
      };
      this.$store.dispatch("handleLogIn", loginData);
      //dispatch email and username
    },
    register() {
      this.registrationData.name = this.fullName;
      // console.log(this.registrationData);
      this.$store.dispatch("handleRegistration", this.registrationData);
      // if(!this.registrationError){
      //   this.isloggedIn = true;
      // }
      // if(this.isRegistered){
      //    this.isloggedIn = true;
      // }
      //dispatch email, username , firstname, lastname
      // let registerData = this.$store.dispatch('handleRegistration', this.registrationData);
      // console.log(registerData + "hejhejehej")
    },
    toogleIsLogin() {
      this.isloggedIn = !this.isloggedIn;
      this.$store.dispatch("getRegistrationStatus", false);
    },
  },
  created() {
    this.isloggedIn = this.isLogIn;
  },
};
</script>

<style scoped lang="scss">
  
  button{
    background-color: #DF0000;
    text-align: center;
    font-size: 1.4rem;
    cursor:pointer;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
  button:hover{
      background-color: #E18C8C;
    }
  .form-wrapper{
    background-color: #fff;
    padding: 3rem;
    height: 360px;
    overflow: scroll;
    .form{
    display: flex;
    flex-direction: column;

    .form-heading {
      margin-bottom: 1.2rem;
      font-size: 1.6rem;
    }
    label {
      font-size: 1.2rem;
      font-family: "Roboto", sans-serif;
    }
    .input-field {
      padding: 0.6rem 0.3rem;
      margin-bottom: 0.8rem;
      margin-top: 0.3rem;
      font-size: 1rem;
    }
    p{
      font-family: "Roboto", sans-serif;;
    }

    .submit-button {
      padding: 0.6rem 0.4rem;
    }
  }
  .Toogle-container {
    margin-top: 2.5rem;
  }
  .toogle-button {
    margin-top: 0.4rem;
    padding: 0.3rem 0.5rem;
  }
  .error {
    color: #df0000;
  }
}
</style>
