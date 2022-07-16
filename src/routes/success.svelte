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
    <h1>REP THE SET</h1>
    {#if copyOfCart}
        <p>YOUR ORDER</p>
        <p>{price}</p>
        <div class="order">
            {#each copyOfCart as item}
                <div class="card">
                    <h1>{item.title}</h1>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
.wrapper {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 30px;

  @media screen and (max-width: 568px) {
    padding: 20px;
  }
}

.order {
  display: flex;
  flex-direction: column;
}
.card {
  background-color: #171717;
  border: 1px solid #252525;
  border-radius: 0.4rem;
}
</style>