import { createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("add to cart");
const removeFromCart = createAction("remove from cart");

const actions = { addToCart, removeFromCart };

const STATUS = {
    ADDED: "movie is now added in cart",
    EXIST: "movie already exist in cart"
}

const initialState = {
    status: null,
    movies: [],
    price: 149,
    total: 0
}

const reducer = createReducer(initialState, {
    [addToCart]: (state, action) => {
        let found = state.movies.find(cartItem => cartItem.title === action.payload.title)
        if (found) {
            return {
                ...state,
                status: STATUS.EXIST
            };
        } else {
            return {
                ...state,
                status: STATUS.ADDED,
                movies: [...state.movies, {image: action.payload.image, title: action.payload.title}],
                total: state.total + state.price
            };
        }
    },

    [removeFromCart]: (state, action) => {
        let found = state.movies.filter(cartItem => cartItem.title !== action.payload)
        return {
            ...state,
            movies: found,
            total: state.total - state.price
        }
    }
})

export { actions, reducer, STATUS };