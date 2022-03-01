<template>
  <form @submit.prevent="emitbuyEvent"> 
    <section class="delivery">
      <h2>DELIVERY</h2>
      <div>
        <input type="radio" name="delivery"/>
        <p>Standard home delivery</p>
        <img src="@/assets/icons/fedex.png" width="40px" alt="Fedex icon"/>
      </div>
      <div>
        <input type="radio" name="delivery"/>
        <p>Standard pick up location</p>
        <img src="@/assets/icons/ups.png" width="20px" alt="Fedex icon" />
      </div>
      <div>
        <input type="radio" name="delivery"/>
        <p>Parcel locker</p>
        <img src="@/assets/icons/dhl.png" width="40px" alt="Fedex icon" />
      </div>
    </section>
    <section class="payment">
      <h2>PAYMENTS</h2>
      <div>
        <input type="radio" id="id" value="id" />
        <p>Pay with card</p>
        <span class="material-icons">credit_card</span>
      </div>
    </section>
    <section class="icons-wrapper">
      <img src="@/assets/icons/logos_mastercard.png" width="40px" alt="" />
      <img src="@/assets/icons/visa-color.png" width="40px" alt="" />
      <img src="@/assets/icons/american-color.png" width="40px" alt="" />
    </section>
    <button>BUY NOW</button>
  </form>
</template>

<script>
export default {
  methods:{
    emitbuyEvent(){
      this.$emit('buy-event');
    }
  }
}
</script>

<style scoped lang="scss">
form {
  margin: 2rem;
  width: 400px;
  h2 {
    margin: 2rem 0;
  }
  div {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.8rem 0.9rem;
    box-sizing: border-box;

    p {
      font-size: 0.8rem;
    }
  }
  section.icons-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 0;
  }
  button {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    padding: 1.2rem 0;
    width: 100%;
    background-color: #df0000;
    border: none;
    border-radius: 5px;
  }
}
</style>
