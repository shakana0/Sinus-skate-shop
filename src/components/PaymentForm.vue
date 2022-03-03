<template>
  <div class="wrapper">
    <form @submit.prevent="emitbuyEvent">
      <h2>YOUR INFORMATION</h2>
      <select name="" id="">
        <option value="">Sweden</option>
        <option value="">Norway</option>
        <option value="">Denmark</option>
      </select>
      <div>
        <input
          type="text"
          placeholder="Email"
          required
          v-model="formData.email"
        />
        <input
          type="text"
          placeholder="Zip Code"
          v-model="formData.address.zip"
          @input="$emit('zip', $event.target.value)"
        />
      </div>
      <div>
        <input type="text" placeholder="Name" required v-model="firstName" />
        <input type="text" placeholder="Lastname" required v-model="lastName" />
      </div>
      <div>
        <input
          type="text"
          placeholder="Adress"
          required
          v-model="formData.address.street"
          @input="$emit('street', $event.target.value)"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="District"
          required
          v-model="formData.address.city"
          @input="$emit('city', $event.target.value)"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    destructName(name) {
      let destrcutedName = name.split(" ");
      this.firstName = destrcutedName[0];
      this.lastName = destrcutedName[1];
    },
  },
  computed: {
    formData() {
      let loggedInUser = { ...this.$store.state.user };
      console.log(loggedInUser);
      if (Object.keys(loggedInUser).length > 0) {
        this.destructName(loggedInUser.name);
        return loggedInUser;
      } else {
        return {
          email: "",
          password: "",
          name: "",
          address: {
            city: "",
            street: "",
            zip: "",
          },
        };
      }
    },
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>

<style scoped lang="scss">
form {
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
    padding: 1.1rem 0 1.1rem 0.5rem;
    border: 1px solid black;
  }
  div input:nth-child(2) {
    border-left: none;
  }
}
</style>
