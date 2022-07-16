<script>
    import {cart} from "../lib/stores/cart.cjs";
    import {onMount} from "svelte";

    let copyOfCart
    let price = 0;

    onMount(() => {
        copyOfCart = $cart
        $cart.forEach(item => {
            price += item.price
        })

        cart.set([])
    })
</script>

<div class="wrapper">
    <div class="message">
        <h1>THANK YOU!</h1>
        <p>YOUR ORDER</p>
        <p style="color: #37FF6B">{price.toFixed(2)} EUR</p>
    </div>
    {#if copyOfCart}
        <div class="order">
            {#each copyOfCart as item}
                <div class="card">
                    <img src={item.image} alt="">
                    <div style="display: flex; flex-direction: column">
                        <h3 style="margin: 0">{item.title}</h3>
                        <p style="margin: 0">{item.price} EUR</p>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;

    @media screen and (max-width: 568px) {
      padding: 20px;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  .message {
    column-span:  span1/span1;
  }

  .order {
    column-span:  span1/span1;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    @media screen and (max-width: 868px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  .card {
    column-span: span1/span1;
    display: flex;
    gap: 20px;
    padding: 20px;
    align-items: center;
    background-color: #171717;
    border: 1px solid #252525;
    border-radius: 0.4rem;

    img {
      height: 40px;
      width: 40px;
      border-radius: 5px;
    }
  }
</style>