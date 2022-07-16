import {writable} from "svelte/store";

//For the ui
export const cart = writable([])

//For stripe checkout
export const order = writable([])