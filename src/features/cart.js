import { createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("add to cart");
const removeFromCart = createAction("remove from cart");
const resetCount = createAction("reset count")

const actions = { addToCart, removeFromCart, resetCount };

const STATUS = {
    ADDED: "movie is now added in cart",
    EXIST: "movie already exist in cart"
}

const initialState = {
    status: null,
    movies: [],
    count: 0,
    price: 149,
    total: 0,
    email: ""
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
                count: state.count + 1,
                total: state.total + state.price
                
            };
        }
    },
    
    [removeFromCart]: (state, action) => {
        let found = state.movies.filter(cartItem => cartItem.title !== action.payload)
        return {
            ...state,
            status: null,
            movies: found,
            count: state.count - 1,
            total: state.total - state.price
        }
    },

    [resetCount]: (state, action) => {
        return {
            ...state,
            count: 0,
            email: action.payload
        }
    }
})

export { actions, reducer, STATUS };