<script>
    import {cart} from "../stores/cart.js";
    import {cartOpen} from "../stores/state.js";


    let price = 0
    $: {
        price = 0
        $cart.forEach(item => {
            console.log(price += item.price)
        })
    }
</script>

<div class="wrapper">
    <div class="banner">
        <p style="margin: 0">Total: {price.toFixed(2)} EUR</p>
        <button class:in-cart={$cart.length > 0} on:click={() => cartOpen(true)}>
            Cart {$cart.length > 0 ? '(' + $cart.length + ')' : ''}</button>
    </div>
</div>

<style lang="scss">

  .wrapper {
    width: 100%;
    z-index: 99;
    background-color: var(--cart-banner-color);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    position: fixed;
    bottom: 0;


    @media screen and (max-width: 568px) {
      border-top: 1px solid var(--card-border-color);
    }
  }

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px;

    @media screen and (max-width: 568px) {
      padding: 20px 40px;
    }
  }

  button {
    cursor: pointer;
    font-weight: bold;
    background-color: var(--button-background-color);
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    color: white;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 60%;
    }
  }

  .in-cart {
    background-color: var(--success-color);
    color: #121212;
  }
</style>