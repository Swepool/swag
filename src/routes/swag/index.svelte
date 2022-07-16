<script>
    export let items
</script>

<div style="margin: 0 auto; display: flex; justify-content: center; max-width: 1000px; padding: 30px">
    <p style="font-size: 4rem; text-align: center">GOTTA REP THE SET</p>
</div>
<div class="grid">
    <a  href="/swag/{items.hat.slug}">
        <img class="card"g src="{items.hat.variations[0].cartImage}" alt="">
    </a>
    <a  href="/swag/{items.mug.slug}">
        <img class="card" src={items.mug.variations[0].cartImage} alt="">
    </a>
    <a  href="/swag/{items.mousepad.slug}">
        <img class="card" src={items.mousepad.variations[0].cartImage} alt="">
    </a>
    <a  href="/swag/{items.beanie.slug}">
        <img class="card" src={items.beanie.variations[0].cartImage} alt="">
    </a>
</div>

<style lang="scss">

  .grid {
    padding: 30px;
    display: grid;
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;

    @media screen and (max-width: 568px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }

      a {
        column-span: 1span/1span;

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .card {
      width: 100%;
      background-color: #171717;
      border-radius: 0.4rem;
      border: 1px solid #252525;
    }
</style>