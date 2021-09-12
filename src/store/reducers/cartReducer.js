import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes"

const initialState = {
    items: []
}

export default cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:

            const isAlreadyInCart = state.items.find(item => item.id === action.payload.id)

            const item = action.payload

            if(isAlreadyInCart) {
                return {
                    ...state,
                    item: isAlreadyInCart.count++
                }
            }
            return {
                ...state,
                items: state.items.concat(item),
                item: item.count++
            }
        case REMOVE_FROM_CART:

            const isItemInCart = state.items.find(item => item.id === action.payload.id)
            const itemToDecrement = action.payload

            if(isItemInCart) {
                if(isItemInCart.count > 1) {
                    return {
                        ...state,
                        itemToDecrement: isItemInCart.count--
                    }
                }
                if(isItemInCart.count === 1) {
                    let itemsToUpdate = state.items.filter(item => item.id !== itemToDecrement.id)

                    return {
                        ...state,
                        itemToDecrement: isItemInCart.count = 0,
                        items: itemsToUpdate,
                    }
                }
            }
            return state
        default:
            return state
    }
}