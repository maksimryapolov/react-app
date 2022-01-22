import React from "react";
import s from "./cards.module.css";

function Cards() {
    return (
        <section className={s.cards}>
            <div className={s.card}>
                <div className={s.top}>
                    <div className={s.date}>
                        <div>04</div>
                        <div>вт</div>
                        <div>01.2022</div>
                    </div>
                    <div>
                        2000,00 ₽
                    </div>
                </div>
                <div className={s.body}>
                    <div className={s.line}>
                        <div>
                            Питание
                        </div>
                        <div>
                            Карта
                        </div>
                        <div>
                            500,00 ₽
                        </div>
                    </div>
                    <div className={s.line}>
                        <div>
                            Транспорт
                        </div>
                        <div>
                            Наличные
                        </div>
                        <div>
                            1500,00 ₽
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cards;