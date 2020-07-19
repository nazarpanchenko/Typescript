const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

export const getDiff = (startDate, endDate) => {
        const difference = Math.abs(endDate - startDate);
        
        const daysLeft = Math.floor(difference / days);

        const hoursLeft = Math.floor((difference % days) / hours);

        const minutesLeft = Math.floor((difference % hours) / minutes);

        const secondsLeft = (difference % minutes) / seconds;
    
        const timeDifference = '' + daysLeft + 'd ' + hoursLeft + 'h ' + minutesLeft + 'm ' + secondsLeft + 's';
    
        console.log(timeDifference);
        return timeDifference;
};

getDiff(new Date('07/07/2020 20:05:40'), new Date('08/24/2020 10:15:25'));
