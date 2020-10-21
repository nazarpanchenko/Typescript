import React from 'react';
import Profile from './Profile';

const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
};

const App = props => {
    return (
       <Profile 
            firstName={userData.firstName}
            lastName={userData.lastName}
            birthDate={userData.birthDate}
            birthPlace={userData.birthPlace}
       />
    );
};

export default App;
