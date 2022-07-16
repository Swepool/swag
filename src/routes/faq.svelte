<script>
    import {Accordion, AccordionItem} from 'svelte-simple-accordion';
</script>

<div>
    <h1>Frequently asked questions</h1>
    <Accordion>

        <AccordionItem>
            <div slot="title">
                <h2>How much will shipping and taxes cost?</h2>
            </div>
            <div slot="content">
                <p>Shipping and VATincluded!</p>
                <p>Every price you see is the final price for that item, worldwide shipping and VAT included.</p>
            </div>
        </AccordionItem>

        <AccordionItem>
            <div slot="title">
                <h2>Are returns accepted?</h2>
            </div>
            <div slot="content">
                <p>Unfortunately, no. Each item is made custom for each order, so returns can't be accepted.</p>
            </div>
        </AccordionItem>

        <AccordionItem>
            <div slot="title">
                <h2>How long does shipping take?</h2>
            </div>
            <div slot="content">
                <p>Instead of having a bunch of items sitting in a warehouse, all items are produced when you order them. It takes 2 - 7 days for production and about 4 days for shipping, on average (but it mostly depends on what country you're shipping to).</p>
                <p>In short: items will reach most destinations in 1 - 2 weeks.</p>
            </div>
        </AccordionItem>

    </Accordion>
</div>

<style lang="scss">
   div {
     margin: 0 auto;
     width: 100%;
     max-width: 1000px;
     padding: 0 30px;

     @media screen and (max-width: 568px) {
       padding: 0 20px;
     }
   }
</style>