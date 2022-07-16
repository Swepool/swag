<script>
    import Navbar from "../lib/components/Navbar.svelte";
    import Footer from "../lib/components/Footer.svelte";
    import Cart from "../lib/components/Cart.svelte";
    import {state} from "../lib/stores/state.js";

</script>

<Navbar/>
<main>
    <slot/>
</main>
{#if $state.cartOpen}
    <Cart/>
{/if}
<Footer/>

<style lang="scss" global>
  @import '../lib/theme/global.scss';
</style>