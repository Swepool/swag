import {writable} from "svelte/store";

export const state = writable({
    cartOpen: false,
    loading: true
})