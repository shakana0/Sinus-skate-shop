<template>
  <footer>
    <section>
      <h4>SINUS SKATEBOARDS</h4>
      <p>About</p>
      <p>News</p>
      <p>Contact</p>
    </section>
    <section>
      <h4>CUSTOMER SERVICE</h4>
      <p>Delivery & Returns</p>
      <p>FAQS</p>
      <p>Find Your Local Stockist</p>
      <p>COVID-19 Information</p>
    </section>
    <section>
      <h4>LEGAL</h4>
      <p>Acceptable Use Policy</p>
      <p>Terms and Conditions</p>
      <p>Privacy Policy</p>
      <p>Cookie Policy</p>
      <p>EU Declaration of Conformity</p>
    </section>

    <section class="iconsWrapper">
      <div class="icons"> 
        <h4>FOLLOW US</h4>
        <img src="../assets/icons/instagram.png" width="45" alt="intagram icon">
        <img src="../assets/icons/fb.png" width="45" alt="facebook icon">
        <img src="../assets/icons/twitter.png" width="45" alt="twitter icon">
      </div>

      <div class="payIcons">
        <img src="../assets/icons/mastercard.png" alt="">
        <img src="../assets/icons/visa.png" alt="">
        <img src="../assets/icons/american-express.png" alt="">
      </div>
    </section>


  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
footer {
  background-color: black;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  height: 13rem;
  align-items: center;
 
  

h4, p{
  color: white;
}
p{
  font-size: 0.8rem;
  padding: 0.3rem 0rem;
}
.iconsWrapper{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
.icons{
  text-align: center;
}
.payIcons img{
padding: 0.5rem;
}
section{
  height: 75%;
}
}
</style>