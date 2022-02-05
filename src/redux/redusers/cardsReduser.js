import date from "date-and-time";

const SET_TEXT_INPUT_CATEGORY = "SET_TEXT_INPUT_CATEGORY",
    SET_NEW_EXPENS = "SET_NEW_EXPENS",
    SET_TEXT_INPUT_INVOICE = "SET_TEXT_INPUT_INVOICE",
    SET_TEXT_INPUT_SUMM = "SET_TEXT_INPUT_SUMM",
    SET_TEXT_INPUT_DATE = "SET_TEXT_INPUT_DATE",
    SET_TEXT_INPUT_TIME = "SET_TEXT_INPUT_TIME";

    let initialState = {
    cards: [
        {
            date: "01.02.2022",
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
    _curMonth: date.format(new Date(), "MM.YYYY"),
    inputs: {
        inputTxtCat: "",
        inputTxtInv: "",
        inputTxtSum: "",
        inputTxtDate: "",
        inputTxtTime: ""
    }
};

export let cardsReduser = (state = initialState, action) => {
    /* Не копировать за switch */
    switch (action.type) {
        case SET_TEXT_INPUT_CATEGORY:
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    inputTxtCat: action.text
                }
            };
        case SET_TEXT_INPUT_INVOICE:
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    inputTxtInv: action.text
                }
            };
        case SET_TEXT_INPUT_SUMM:
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    inputTxtSum: action.text
                }
            };
        case SET_TEXT_INPUT_DATE:
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    inputTxtDate: action.text
                }
            };
        case SET_TEXT_INPUT_TIME:
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    inputTxtTime: action.text
                }
            };
        case SET_NEW_EXPENS: {
            let dateNew = new Date(state.inputs.inputTxtDate);
            let dateNewFormatted = date.format(dateNew, 'MM.YYYY');
            let expense = {
                category: "",
                invoice: "",
                sum: "",
                currency: "₽"
            };
            let index = null;

            if(state._curMonth === dateNewFormatted) {
                let curDate = "";
                let curDateFormatted = "";
                dateNewFormatted = date.format(dateNew, 'DD.MM.YYYY')

                state.cards.map((i, idx) => {
                    curDate = new Date(i.date.split('.').reverse().join("."));
                    curDateFormatted = date.format(curDate, 'DD.MM.YYYY');

                    if(curDateFormatted === dateNewFormatted) {
                        index = idx;
                    }
                });
            }

            if(index) {
                expense = {
                    category: state.inputs.inputTxtCat,
                    invoice: state.inputs.inputTxtInv,
                    sum: state.inputs.inputTxtSum,
                };

                let stateCopy = {
                    ...state,
                    cards: [...state.cards]
                };
                stateCopy.cards[index].items.push(expense);
                return stateCopy;
            }
        }
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

export let setTextInputInvCreator = (text) => {
    return {
        type: SET_TEXT_INPUT_INVOICE,
        text: text,
    };
};

export let setTextInputSumCreator = (text) => {
    return {
        type: SET_TEXT_INPUT_SUMM,
        text: text,
    };
};

export let setTextInputDateCreator = (text) => {
    return {
        type: SET_TEXT_INPUT_DATE,
        text: text,
    };
};

export let setTextInputTimeCreator = (text) => {
    return {
        type: SET_TEXT_INPUT_TIME,
        text: text,
    };
};

export let setNewExpens = () => ({ type: SET_NEW_EXPENS });

