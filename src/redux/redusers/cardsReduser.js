// TODO: сделать Reduser
const SET_TEXT_INPUT_CATEGORY = "SET_TEXT_INPUT_CATEGORY",
    SET_NEW_EXPENS = "SET_NEW_EXPENS";

let initialState = {
    cards: [
        {
            date: "04.01.2022",
            fullSum: "2000,00",
            currency: "₽",
            items: [
                {
                    category: "Питание",
                    invoice: "Карта",
                    sum: "500,00",
                    currency: "₽",
                },
                {
                    category: "Транспорт",
                    invoice: "Наличные",
                    sum: "1500,00",
                    currency: "₽",
                },
            ],
        },
    ],
    inputs: {
        inputTxtCat: ""
    }
};

export let cardsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_TEXT_INPUT_CATEGORY:
            state.inputs.inputTxtCat = action.text;
            return state;
        case SET_NEW_EXPENS:
            let expense = {
                category: action.category,
                invoice: action.invoice,
                sum: action.sum,
                currency: "₽",
            };
            state.cards[0].items.push(expense);
        default:
            return state;
    }
};

export let setTextInputCatCreator = (text) => {
    return {
        type: SET_TEXT_INPUT_CATEGORY,
        text: text,
    };
};

export let setNewExpens = (data) => {
    return {
        type: SET_NEW_EXPENS,
        category: data.category,
        invoice: data.invoice,
        sum: data.sum,
    };
};
