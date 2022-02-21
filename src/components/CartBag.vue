<template>
    <section>
        <div class="lineWrapper">
            <p>Product</p>
            <p>Price</p>
            <p>Amount</p>
            <p>Sum</p>
        </div>
        <div class="line"></div><br><br>
        <div class="line"></div>
            <p>Order Value</p>
            <p>Delivery</p>
        <div class="line"></div>
             <p>Total</p>
        <div class="line"></div>
            <p class="orderInfo">SINUS offers free returns within 30 days of purchase. Read more about our full Return and refund policy</p>
        
    </section>  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
section{
    width: 470px;

}
.line{
    width:100%;
    height: 1px;
    background-color: #CDCDCD;
}
.lineWrapper{
    display: flex;
    justify-content: space-around;
}
.orderInfo{
    font-size: 12px;
    text-align: center;
}
p{
    padding: 10px 0;
}

</style>>
