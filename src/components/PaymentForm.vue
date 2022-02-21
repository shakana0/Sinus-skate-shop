<template>
  <form @submit.prevent="sendForm">
    <h2>YOUR INFORMATION</h2>
    <select name="" id="">
      <option value="">Sweden</option>
      <option value="">Norway</option>
      <option value="">Denmark</option>
    </select>
    <div>
      <input type="text" placeholder="Email" required />
      <input type="text" placeholder="Zip Code" />
    </div>
    <div>
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Lastname" required />
    </div>
    <div>
      <input type="text" placeholder="Adress" required />
    </div>
    <div>
      <input type="text" placeholder="District" required />
      <input type="text" placeholder="Phone Number" required />
    </div>
     </form>
</template>

<script>
export default {
  methods: {
    sendForm() {
      console.log("sent :)");
    },
  },
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
