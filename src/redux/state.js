// TODO: сделать actionCreator, Reduser

let store = {
    _state: {
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
                        currency: "₽"
                    },
                    {
                        category: "Транспорт",
                        invoice: "Наличные",
                        sum: "1500,00",
                        currency: "₽"
                    }
                ]
            }
        ],
        _inputs: {
            inputTxtCat: ''
        }
    },

    /**
     * getters
     * @returns {store._state._inputs|{inputTxtCat}}
     */
    getInputs() {
        return this._state._inputs;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if(action.type == "SET_NEW_EXPENS") {
            let expense =  {
                category: action.category,
                invoice: action.invoice,
                sum: action.sum,
                currency: "₽"
            };
            this._state.cards[0].items.push(expense);
            this._changeState(this);
        } else if(action.type == "SET_TEXT_INPUT_CATEGORY") {
            this._state._inputs.inputTxtCat = action.text;
            this._changeState(this);
        }
    },

    /**
     * Setters
     * @param category
     * @param invoice
     * @param sum
    setExpense(category, invoice, sum) {},
    setTxtValForCat(text) {},
     */

    _changeState() {},

    subscribe(observe) {
        this._changeState = observe;
    },

};

window.state = store;

export default store;
