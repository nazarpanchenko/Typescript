import React from 'react';
import moment from "moment";

const Transaction = ({ from, to, amount, rate, time }) => {
    return (
        <li className="transaction">
            <span className="transaction__date">10 Jan</span>
            <span className="transaction__time">{moment(time).format('hh:mm')}</span>
            <span className="transaction__assets">{from} → {to}</span>
            <span className="transaction__rate"> 
                {new Intl.NumberFormat("en-GB", {
                    maximumIntegerDigits : 3
                }).format(amount)}
            </span>
            <span className="transaction__amount">
                {new Intl.NumberFormat("en-GB", {
                    maximumIntegerDigits : 3
                }).format(amount)}
            </span>
        </li>
    );
}

export default Transaction;
