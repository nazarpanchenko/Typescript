const seconds = 60;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

export const getDiff = (startDate, endDate) => {
        const difference = Math.abs(endDate - startDate);
        
        const daysLeft = Math.floor(difference / days);
    
        const timeDifference = '' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
    
        return timeDifference;
};

getDiff(new Date('07/07/2020 20:22:39'), new Date('07/08/2020 20:22:39'));
