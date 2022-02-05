import React from "react";
import {connect} from "react-redux";
import Cards from "./Cards";
import {
    setNewExpens,
    setTextInputCatCreator,
    setTextInputInvCreator,
    setTextInputSumCreator,
    setTextInputDateCreator,
    setTextInputTimeCreator
} from "../../redux/redusers/cardsReduser";

let mapStateToProps = (state) => {
    return {
        cards: state.mainPage.cards,
        inputs: state.mainPage.inputs
    };
};

let mapStateToDispatch = (dispatch) => {
    return {
        setTextInputCat: (text) => {
            dispatch(setTextInputCatCreator(text));
        },
        setTextInputInv: (text) => {
            dispatch(setTextInputInvCreator(text));
        },
        setTextInputSum: (text) => {
            dispatch(setTextInputSumCreator(text));
        },
        setTextInputDate: (text) => {
            dispatch(setTextInputDateCreator(text));
        },
        setTextInputTime: (text) => {
            dispatch(setTextInputTimeCreator(text));
        },
        setNewExpens: () => {
            dispatch(setNewExpens());
        }
    };
};

let CardsContainer = connect(mapStateToProps, mapStateToDispatch)(Cards);

export default CardsContainer;