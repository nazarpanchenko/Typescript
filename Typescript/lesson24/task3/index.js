export const getDiff = (startDate, endDate) => {
        let difference = Math.abs(endDate - startDate) / 1000;
        
        const daysLeft = Math.floor(difference / 86400);
        difference -= daysLeft * 86400;

        const hoursLeft = Math.floor(difference / 3600) % 24;
        difference -= hoursLeft * 3600;

        const minutesLeft = Math.floor(difference / 60) % 60;
        difference -= minutesLeft * 60;

        const secondsLeft = difference % 60;
    
        const timeDifference = '' + daysLeft + 'd ' + hoursLeft + 'h ' + minutesLeft + 'm ' + secondsLeft + 's';
    
        console.log(timeDifference);
        return timeDifference;
};

getDiff(new Date('07/07/2020 20:05:40'), new Date('08/24/2020 10:15:25'));
