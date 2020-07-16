const seconds = 60;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

export const getDiff = (startDate, endDate) => {
        const difference = Math.abs(endDate - startDate);
        
        const daysLeft = Math.floor(difference / days);
        const hoursLeft = Math.floor(daysLeft / hours);
        const minutesLeft = Math.floor(hoursLeft / minutes);
        const secondsLeft = Math.floor(minutesLeft / seconds);
    
        const timeDifference = '' + daysLeft + 'd ' + hoursLeft + 'h ' + minutesLeft + 'm ' + secondsLeft + 's';
    
        console.log(timeDifference);
        return timeDifference;
};

getDiff(new Date('07/07/2020 20:22:39'), new Date('07/08/2020 20:22:39'));
