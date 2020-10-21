import React from 'react';
import './index.scss';
import moment from "moment";

const formatDate = date => moment(date).format("DD MMM YY");

function Profile(props) {
    return (
        <div className="profile">
            <div className="profile__name">
                {props.firstName} {props.lastName}
            </div>
            <div className="profile__birth">
                Was born {formatDate(props.birthDate)} in {props.birthPlace}
            </div>
        </div>
    );
};

export default Profile;
