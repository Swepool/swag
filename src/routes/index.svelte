<script>
    export let items
</script>

<div class="quote" style="margin: 0 auto; display: flex; flex-direction: column; justify-content: center; max-width: 1000px; padding: 30px">
    <h4>A KRYPTOKRONA STORE</h4>
    <p class="rep">GOTTA REP THE SET</p>
</div>
<div class="grid">
    <a href="/swag/{items.hat.slug}">
        <img class="card"g src="{items.hat.variations[0].cartImage}" alt="">
    </a>
    <a href="/swag/{items.mug.slug}">
        <img class="card" src={items.mug.variations[0].cartImage} alt="">
    </a>
    <a  href="/swag/{items.mousepad.slug}">
        <img class="card" src={items.mousepad.variations[0].cartImage} alt="">
    </a>
    <a href="/swag/{items.beanie.slug}">
        <img class="card" src={items.beanie.variations[0].cartImage} alt="">
    </a>
</div>

<style lang="scss">

  .quote {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    padding: 20px;
    text-align: center;

    h4 {
      opacity: 60%;
    }
  }
  .rep {
    margin: 0;
    font-size: 4rem;
    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }
  }

  .grid {
    padding: var(--padding-desktop);
    display: grid;
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;

    @media screen and (max-width: 568px) {
      padding: var(--padding-mobile);
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }

      a {
        width: 100%;
        column-span: 1span/1span;

        img {
          padding: 20px;
          width: 100%;
          height: auto;
          background-color: var(--card-background-color);
          border-radius: 0.4rem;
          border: 1px solid var(--card-border-color);
          transition: 200ms ease-in-out;

          &:hover {
            border-color: var(--success-color);
          }

          @media screen and (max-width: 568px) {
            &:hover {
              border-color: var(--background-color);
            }
            &:active {
              border-color: var(--success-color);
            }
          }

        }
      }
    }
</style>