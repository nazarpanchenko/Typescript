export function getDiff(startDate, endDate) {
    const biggerDate = (endDate > startDate) ? 
        endDate : (startDate > endDate) ? 
        startDate : 
        endDate;

    const smallerDate = (startDate < endDate) ? 
        startDate : (endDate < startDate) ? 
        endDate : 
        startDate;

    let diffInMilliSeconds = Math.abs(biggerDate - smallerDate) / 1000;

    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;

    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;

    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;

    const seconds = diffInMilliSeconds % 60;

    const timeDifference = '' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

    console.log(timeDifference);
    return timeDifference;
}

getDiff(new Date('07/07/2020 20:22:39'), new Date('07/08/2020 20:22:39'));
