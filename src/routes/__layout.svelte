<script>
    import Navbar from "../lib/components/Navbar.svelte";
    import Footer from "../lib/components/Footer.svelte";
    import Cart from "../lib/components/Cart.svelte";
    import {state} from "../lib/stores/state.js";
    import {onMount} from "svelte";
    import LoadingScreen from "../lib/components/LoadingScreen.svelte";

    let ready

    onMount(() => {
        ready = true;
    });

    $: {
        if (ready) {
            setInterval(() => {
                state.update(current => {
                    return{
                        ...current,
                        loading: false
                    }
                })
            }, 1000)
        }
    }
</script>

{#if $state.loading}
    <LoadingScreen/>
{/if}

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