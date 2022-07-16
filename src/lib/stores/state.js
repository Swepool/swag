import {writable} from "svelte/store";

export const state = writable({
    cartOpen: false
})


export const cartOpen = (e) => {
    state.update(current => {
        return {
            ...current,
            cartOpen: e
        }
    })
}