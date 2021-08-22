const INITIAL_STATE = {
    investments: [],
    wallet: null,
    receipts: [],
    earnings: []
}



export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SAVE_INVESTMENTS":
            return {
                ...state,
                investments: action.payload
            }

        case "CLEAR-INVESTMENT":
            return {
                ...state,
                investments: []
            };
        case "SAVE_WALLET":
            return {
                ...state,
                wallet: action.payload
            };
        case "SAVE_INVESTMENT_RECEIPTS":
            return {
                ...state,
                receipts: action.payload
            }
        case "SAVE_INVESTMENT_EARNINGS":
            return {
                ...state,
                earnings: action.payload
            }

        default:
            return state;
    }
}