import React from "react";
import s from "./cards.module.css";

function Cards(props) {

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

    function createSum(items) {
        let sum = 0;
        items.forEach((i) => {
            sum += parseInt(i.sum);
        });

        return sum;
    }

    let dataRender = props.cards.map((item, idx) => {
        return (
            <div className={s.card} key={idx}>
                <div className={s.top}>
                    <div className={s.date}>
                        <div>{item.date}</div>
                    </div>
                    <div>
                        { createSum(item.items) } {item.currency}
                    </div>
                </div>
                <div className={s.body}>
                    { getBodyInvoice(item.items) }
                </div>
            </div>
        )
    });

    function onChangeTxtCat(event) {
        props.setTextInputCat(event.target.value)
    }
    function onChangeTxtInv(event) {
        props.setTextInputInv(event.target.value)
    }
    function onChangeTxtSum(event) {
        props.setTextInputSum(event.target.value)
    }
    function setTextInputDate(event) {
        props.setTextInputDate(event.target.value)
    }
    function setTextInputTime(event) {
        props.setTextInputTime(event.target.value)
    }

    function onSubmithundler() {
        props.setNewExpens();
    }

    return (
        <section className={s.cards}>
            { dataRender }
            <div className="">
                <div className="">
                    <div>Категория</div>
                    <input onChange={onChangeTxtCat} required type="text" value={props.inputs.inputTxtCat}/>
                </div>
                <div className="">
                    <div>Счет</div>
                    <input onChange={onChangeTxtInv} required type="text" value={props.inputs.inputTxtInv}/>
                </div>
                <div className="">
                    <div>Сумма</div>
                    <input onChange={onChangeTxtSum} required type="number" value={props.inputs.inputTxtSum}/>
                </div>
                <div className="">
                    <div>Время</div>
                    <input onChange={setTextInputDate} type="date" value={props.inputs.inputTxtDate}/>
                </div>
                <div className="">
                    <div>Дата</div>
                    <input onChange={setTextInputTime} type="time" value={props.inputs.inputTxtTime}/>
                </div>
                <button onClick={onSubmithundler}>Отправить</button>
            </div>

        </section>
    );
}

export default Cards;