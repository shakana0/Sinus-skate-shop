<template>
    <nav>
        <div>
            <router-link to="/Products" class="product-link">Products</router-link>
            <!-- <router-link to="/Products">APPAREL</router-link> -->
        </div>
        <div class="icons-wrapper">
            <input type="text">
            <button @click="toogleLogInModal">
                <span class="material-icons">
                    person_outline
                </span>
            </button>    
            <button>
                <span class="material-icons">
                    shopping_cart
                </span>
            </button>
        </div>
        <LogInModal class="login-Module" v-if="showLogInModal"/>
    </nav>
</template>

<script>
import LogInModal from "@/components/LoginModal.vue"
export default {
    components:{LogInModal},
    data(){
        return {
            showLogInModal : false
        }
    },
    methods:{
        toogleLogInModal(){
            this.showLogInModal = !this.showLogInModal;
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/fonts.scss";
nav {
    padding: 0.6rem;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 3rem;
}
.product-link {
    font-size: 1.2rem;
    align-self: center;
}
a {
  font-size: 0.8rem;
//   display: flex;
//   align-items: center;  
    align-self: center
}
input {
    height: 1.2rem;
    align-self: center;
}
// .login-container{
//     display:flex;
//     flex-direction:column;
// }
span{
    display: block;
}
.icons-wrapper{
    display: flex;
    justify-content: space-around;
}
button{
    align-self:center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: 1rem;
}
.material-icons {
    color: white;
}
.login-Module{
    position:absolute;
    left:0;
    right: 0;
    top:0;
    bottom: 0;
    margin: auto;
    

}
</style>