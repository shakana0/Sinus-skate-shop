<template>
  <form @submit.prevent="sendForm">
    <h2>YOUR INFORMATION</h2>
    <select name="" id="">
      <option value="">Sweden</option>
      <option value="">Norway</option>
      <option value="">Denmark</option>
    </select>
    <div>
      <input type="text" placeholder="Email" required v-model="formData.email"/>
      <input type="text" placeholder="Zip Code" v-model="formData.address.zip"/>
    </div>
    <div>
      <input type="text" placeholder="Name" required v-model="formFirstName"/>
      <input type="text" placeholder="Lastname" required />
    </div>
    <div>
      <input type="text" placeholder="Adress" required v-model="formData.address.street"/>
    </div>
    <div>
      <input type="text" placeholder="District" required v-model="formData.address.city"/>
      <input type="text" placeholder="Phone Number" required />
    </div>
     </form>
</template>

<script>
export default {
  methods: {
    sendForm() {
      // this.$emit(formData)
    }
  },
  computed: {
    // loggedInUser() {
    //   return this.$store.state.user
    // },
    formFirstName() {
      let fullName = ""
      var firstName = ""
      if(this.$store.state.user) {
        fullName = this.$store.state.user.name
        firstName = fullName.split(" ")[0]
      }
      // console.log(firstName[0])
      return firstName
      },
      // return this.$store.state.user ? this.$store.state.user.name.split(' ')[0] : ""
    // },
    formData() {
      // let loggedInUser = this.$store.state.user
      // if(this.$store.state.user) {
      //   let firstName = this.$store.state.user.name.split(' ')[0]
      //   let lastName = this.$store.state.user.name.split(' ')[1]
      // }
      return {
        "email": "", 
        "password" : "",
        "name": "",
        "address": {
          "city": "",
          "street": "",
          "zip": "",
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
form {
  margin: 2rem;
  width: 400px;
  h2 {
    margin-bottom: 2rem;
  }
  select {
    width: 100%;
    padding: 1.1rem 0;
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    margin-bottom: 1rem;
  }
  div:nth-child(6) {
    margin-bottom: 3rem;
  }
  input {
    width: 100%;
    padding: 1.1rem 0 1.1rem .5rem;
    border: 1px solid black;
  }
  div input:nth-child(2) {
    border-left: none;
  }
 
}
</style>
