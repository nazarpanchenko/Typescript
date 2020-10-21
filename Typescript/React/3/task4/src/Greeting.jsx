import React from 'react';
import './index.scss';
import moment from "moment";

const formatDate = date => moment(date).format("DD MMM YYYY");
const userAge = birthDate => moment().diff(birthDate, 'years');

function Greeting(props) {
    return (
        <div className="greeting">
            My name is {props.firstName} {props.lastName}. 
            I'm {userAge(formatDate(props.birthDate))} years old
        </div>
    );
};

export default Greeting;
