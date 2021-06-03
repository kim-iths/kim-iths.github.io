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
    movies: [
        { image: "img/black_panther.png", title: "Black Panther", price: 149 },
        { image: "img/the_lego_movie.png", title: "The Lego Movie", price: 149 }
    ],
    total: 198
}

const reducer = createReducer(initialState, {
    [addToCart]: (state, action) => {
        let found = state.find(cartItem => cartItem.movies.title === action.payload.title)
        if (found) {
            return {
                ...state,
                status: STATUS.EXIST
            };
        } else {
            return {
                ...state,
                status: STATUS.ADDED,
                movie: [action.payload],
                total: state.total + 149
            };
        }
    },

    [removeFromCart]: (state, action) => (
        state.filter(cartItem => cartItem.movies.title !== action.payload.title)
    )
})

export { actions, reducer, STATUS };