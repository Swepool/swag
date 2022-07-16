import products from "$lib/_products";

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
    // `params.id` comes from [id].js

    const item = products[params.slug]
    console.log(item)

    if (item) {
        return {
            status: 200,
            headers: {},
            body: { item }
        };
    }

    return {
        status: 404
    };
}