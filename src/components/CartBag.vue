<template>
  <section class="cartbag-wrapper">
    <div class="lineWrapper">
      <p>Product</p>
      <p>Price</p>
      <p>Amount</p>
      <p>Sum</p>
    </div>
    <div class="line"></div>
    <br /><br />
    <div class="line"></div>
    <div class="total">
      <p>Order Value</p>
      <p>£{{ getTotalPrice }}</p>
    </div>
    <div class="total">
      <p>Delivery</p>
      <p>Free</p>
    </div>
    <div class="line"></div>
    <div class="total">
      <p>Total</p>
      <p class="total-price">£{{ getTotalPrice }}</p>
    </div>
    <div class="line"></div>
    <p class="orderInfo">
      SINUS offers free returns within 30 days of purchase. Read more about our
      full Return and refund policy
    </p>
  </section>
</template>

<script>
export default {
  computed: {
    getTotalPrice() {
      return this.$store.getters.calcTotalPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
.cartbag-wrapper {
  margin-top: 2rem;
  width: 400px;

  div.total {
    display: flex;
    justify-content: space-between;
    p.total-price{
      font-weight: 600;
    }
  }
}
.line {
  width: 100%;
  height: 1px;
  background-color: #cdcdcd;
}

.lineWrapper {
  display: flex;
  justify-content: space-around;
}
.orderInfo {
  font-size: 12px;
  text-align: center;
}
p {
  padding: 10px 0;
}
</style>
>
