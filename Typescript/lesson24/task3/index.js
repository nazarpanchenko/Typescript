export function getDiff(startDate, endDate) {
    const biggerDate = (endDate > startDate) ? 
        endDate : (startDate > endDate) ? 
        startDate : 
        endDate;

    const smallerDate = (startDate < endDate) ? 
        startDate : (endDate < startDate) ? 
        endDate : 
        startDate;

        const milliSeconds = Math.abs(biggerDate - smallerDate) / 1000;
        const seconds = Math.floor(milliSeconds / 60);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
    
        const timeDifference = '' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
    
        return timeDifference;
}

getDiff(new Date('07/07/2020 20:22:39'), new Date('07/08/2020 20:22:39'));
