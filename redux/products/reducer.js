const INITIAL_STATE = {
    products: []
}


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SAVE_PRODUCTS":
            return {
                ...state,
                products: [...state.products, ...action.payload]
            };


        case "REFRESH_PAGE":
            return {
                products: []
            }


        default:
            return state;
    };

}