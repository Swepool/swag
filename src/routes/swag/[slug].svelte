<script>
    import {cart} from "$lib/stores/cart";

    export let item
    console.log(item)
    let selected = 0
    let selectedSize

    const  randomID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const addToCart = (item) => {
        cart.update(current => {
            return [
                {
                    id: randomID(),
                    title: item.title,
                    price: item.price,
                    variant: item.variations[selected].title,
                    size: selectedSize,
                    image: item.variations[selected].cartImage,
                    priceId: item.variations[selected].priceId,
                    quantity: 1
                },
                ...current
            ]
        })
    }

    $: console.log($cart)

    const buyNow = async (item) => {
        let stripe = Stripe('pk_live_51KRclxLDkY00e1cBGyrIPjf9Lc0qopqqiZtZ5JQ12wRYJy5T7dTGFF5fGsdZabaqfDGCshKA3Qra1flzg82ErdtT00XV5QgiKN');
        const {error} = await stripe.redirectToCheckout({
            lineItems: [{price: item, quantity: 1}],
            mode: 'payment',
            successUrl: 'https://store.kryptokrona.org/success',
            cancelUrl: 'https://store.kryptokrona.org',
            shippingAddressCollection: {allowedCountries: ['AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MK', 'ML', 'MM', 'MN', 'MO', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW',]}
        })
    }

</script>

<div class="grid">

    <div class="images">
        <img src={item.variations[selected].cartImage} alt="">
        <!--
        <div>
            {#each item.variations[selected].images as image}
                <img src={image} alt="">
            {/each}
        </div>
        -->
    </div>

    <div>
        <h4>KRYPTOKRONA</h4>
        <h1>{item.title.toUpperCase()}</h1>
        <div class="price">
            <h3>{item.price} EUR</h3>
            <p>Includes VAT and free shipping!</p>
        </div>
        <div class="colors">
            {#if item.variations}
                {#each item.variations as variation, i}
                    <div class:selected={selected === i}
                         on:click={() => {selected = i}}
                         style="background-color: {variation.color[0]}"></div>
                {/each}
            {/if}
        </div>
        <div class="sizes">
            {#if item.sizes}
                {#each item.sizes as size}
                    <div class:selected={selectedSize === size.letter}
                         on:click={() => selectedSize = size.letter}
                    ><h4>{size.letter}</h4></div>
                {/each}
            {/if}
        </div>
        <div class="buttons">
            <button on:click={() => addToCart(item)}>Add to cart</button>
            <button on:click={() => buyNow(item.variations[selected].priceId)}>Buy now</button>
        </div>
        <div class="description">
            <p>{item.description.text}</p>
            <ul>
                {#each item.description.features as feature}
                    <li><p>{feature}</p></li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style lang="scss">

  .grid {
    margin: 0 auto;
    padding: 30px;
    width: 100%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;

    div {

      img {
        width: 100%;
        border-radius: 0.4rem;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 20px;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  .images {

    div {
      margin-top: 10px;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      box-sizing: border-box;
      max-width: 100%;
      gap: 10px;
    }
  }

  .buttons {
    display: flex;
    gap: 10px;
    margin: 20px 0;

    button {
      cursor: pointer;
      font-weight: bold;
      background-color: #747474;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      color: white;
      transition: 200ms ease-in-out;

      &:hover {
        background-color: #989898;
      }
    }
  }

  .colors {
    display: flex;
    gap: 10px;
    cursor: pointer;
    margin-bottom: 20px;

    div {
      height: 36px;
      width: 36px;
      border-radius: 100px;
      border: 3px solid white;
      background-color: red;
    }

    .selected {
      border-color: dodgerblue;
    }
  }

  .sizes {
    display: flex;
    gap: 10px;
    cursor: pointer;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      width: 36px;
      border-radius: 100px;
      border: 3px solid white;
    }

    .selected {
      border-color: dodgerblue;
    }
  }

</style>