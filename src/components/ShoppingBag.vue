<template>
  <article>
    <h2>Shopping Bag</h2>
    <section>
      <div class="headers">
        <p>Product</p>
        <div>
          <p>Price</p>
          <p>Amount</p>
          <p>Sum</p>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
article {
  width: 370px;
  height: 480px;
  border: 2px solid black;
  background-color: white;

  h2 {
    text-align: center;
    margin-top: .5rem;
  }

  div.headers {
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem 1rem 1rem;
    border-bottom: 1px solid rgb(207, 203, 203);

    p {
      font-size: 0.8rem;
      font-weight: 600;
    }

    div {
      display: flex;
      p {
        margin: 0 1rem;
      }
    }
  }
}
</style>
