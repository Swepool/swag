<script>
    import {cart} from "../lib/stores/cart.js";
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
        <p style="color: var(--success-color);">{price.toFixed(2)} EUR</p>
    </div>
    {#if copyOfCart}
        <div class="order">
            {#each copyOfCart as item}
                <div class="card">
                    <img src={item.image} alt="">
                    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%">
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    max-width: 1000px;
    width: 100%;
    margin: 60px auto 0 auto;
    padding: 30px;

    @media screen and (max-width: 768px) {
      padding: 20px;
      grid-template-columns: repeat(1, minmax(0, 2fr));
    }
  }

  .message {
    grid-column-start: 1;
    grid-column:  span 1 / span 1;
  }

  .order {
    width: 100%;
    grid-column: span 2 /span 2;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .card {
    width: 100%;
    column-span: span1/span1;
    display: flex;
    gap: 20px;
    padding: 20px;
    align-items: center;
    background-color: var(--card-background-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.4rem;

    img {
      height: 40px;
      width: 40px;
      border-radius: 5px;
    }
  }
</style>