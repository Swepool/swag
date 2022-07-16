<script>
    import {fly, fade} from 'svelte/transition'
    import {cartOpen} from "../stores/state.js";
    import {cart} from "../stores/cart.js";
    import Close from "./buttons/Close.svelte";
    import {onDestroy, onMount} from "svelte";
    import {goto} from "$app/navigation";

    onMount(() => {
        document.body.classList.toggle('fixed')
    })

    onDestroy(() => {
        document.body.classList.toggle('fixed')
    })

    let stripe = Stripe('pk_test_51KRclxLDkY00e1cBqedI0wWcpBb87sdT2oiO6MlosOYzqnA6U26DCQfP0nB2oMrU7fwxOKLQ5laozxEdS8Qb0ggy00HsdT7ret');

    const checkout = async () => {

        let order = []
        $cart.forEach(function (a) {
            if (!this[a.priceId]) {
                this[a.priceId] = {price: a.priceId, quantity: 0};
                ;
                order.push(this[a.priceId]);
            }
            this[a.priceId].quantity += a.quantity;
        }, Object.create(null));

        console.log('Checkout', order);

        const {error} = await stripe.redirectToCheckout({
            lineItems: order,
            mode: 'payment',
            successUrl: 'https://google.com',
            cancelUrl: 'https://google.com',
            shippingAddressCollection: {allowedCountries: ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MK', 'ML', 'MM', 'MN', 'MO', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW',]}
        })
    }

    let price = 0

    const deleteItem = (id) => {
        let arr = $cart.filter(item => item.id !== id)
        cart.set(arr)
    }

    $: {
        price = 0
        $cart.forEach(item => {
            console.log(price += item.price)
        })
    }

</script>

<div in:fade out:fade on:click|self={() => cartOpen(false)} class="background"></div>
<div in:fly|local="{{x: 50}}" out:fly|local="{{x: 50}}" class="cart">
    <div style="display: flex; align-items: center; justify-content: space-between">
        <h2>Cart</h2>
        <p on:click={() => {goto('/faq'); cartOpen(false)}} style="margin: 0; opacity: 50%; cursor: pointer">FAQ</p>
    </div>
    <h4>{price.toFixed(2)} EUR</h4>
    <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px">
        <button style="background-color: #747474" on:click={() => cartOpen(false)}>Keep shopping</button>
        {#if $cart.length > 0}
            <button style="background-color: #37ff6b; color: black" on:click={() => checkout()}>Checkout</button>
        {/if}
    </div>
    <div class="items">
        {#if $cart.length > 0}
            {#each $cart as item}
                <div class="card">
                    <img height="64px" src={item.image} alt="">
                    <div>
                        <h4 style="margin: 0;">{item.title}</h4>
                        <h4 style="margin: 0;">{item.price} EUR</h4>
                    </div>
                    <div>
                        <Close on:click={() => deleteItem(item.id)}/>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</div>

<style lang="scss">

  .background {
    top: 0;
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(8px);
    background-color: rgba(18, 18, 18, 0.1);

    @media screen and (max-width: 568px) {
      display: none;
    }
  }

  .cart {
    overflow: scroll;
    color: white;
    z-index: 999;
    width: 100%;
    max-width: 400px;
    position: fixed;
    height: 100vh;
    background-color: #202020;
    right: 0;
    top: 0;
    padding: 30px;

    @media screen and (max-width: 568px) {
      max-width: none;
    }
  }

  .items {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .card {
    padding: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    background-color: #323232;
    border-radius: 0.4rem;
  }

  button {
    cursor: pointer;
    background-color: #121212;
    padding: 10px 15px;
    width: 100%;
    color: white;
    border: none;
    border-radius: 0.4rem;
    transition: 200ms ease-in-out;

    &:hover {
      background-color: #323232;
    }
  }
</style>