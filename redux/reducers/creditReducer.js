export default function creditReducer(state=[
        /*{
            kreditSum : 1200000,
            initialPay : 20,
            yillikFoiz: 12,
            yillikMuddat: 1,
            kalendarYil: 2020,
            kalendarOy: "Dekabr"
        }*/
], action) {
    switch (action.type) {
        case "PUSH_CREDIT":
            state.push(action.payload);
            state = [
                ...state
            ];
            break;
    }
    return state
}
