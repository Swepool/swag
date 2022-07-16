import products from "../../store/_products.js";

/** @type {import('./__types/items').RequestHandler} */
export async function get() {
    const items = products
    console.log(items)

    return {
        body: { items }
    };
}