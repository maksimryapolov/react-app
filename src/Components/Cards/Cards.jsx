import React from "react";
import s from "./cards.module.css";
import {setTextInputCatCreator, setNewExpens} from "./../../redux/redusers/cardsReduser";

function getBodyInvoice(items) {
    return items.map((item, idx)=>  {
        return (
            <div className={s.line} key={idx}>
                <div>
                    {item.category}
                </div>
                <div>
                    {item.invoice}
                </div>
                <div>
                    {item.sum} {item.currency}
                </div>
            </div>
        );
    });
}

function Cards(props) {

    let refCatInput = React.createRef();
    let refInvInput = React.createRef();
    let refSumInput = React.createRef();

    let dataRender = props.state.cards.map((item, idx) => {
        return (
            <div className={s.card} key={idx}>
                <div className={s.top}>
                    <div className={s.date}>
                        <div>{item.date}</div>
                    </div>
                    <div>
                        {item.fullSum} {item.currency}
                    </div>
                </div>
                <div className={s.body}>
                    { getBodyInvoice(item.items) }
                </div>
            </div>
        )
    });

    function onChangeTxtCat(event) {
        props.dispatch(setTextInputCatCreator(event.target.value));
    }

    function onSubmithundler() {
        let data = setNewExpens(
            { 
                category: refCatInput.current.value, 
                invoice: refInvInput.current.value, 
                sum: refSumInput.current.value
        });

        props.dispatch(data);
    }

    return (
        <section className={s.cards}>
            { dataRender }
            <div className="">
                <div className="">
                    <div>Категория</div>
                    <input ref={refCatInput} onChange={onChangeTxtCat} type="text" value={props.state.inputs.inputTxtCat}/>
                </div>
                <div className="">
                    <div>Счет</div>
                    <input ref={refInvInput} type="text"/>
                </div>
                <div className="">
                    <div>Сумма</div>
                    <input ref={refSumInput} type="text"/>
                </div>
                <button onClick={onSubmithundler}>Отправить</button>
            </div>

        </section>
    );
}

export default Cards;