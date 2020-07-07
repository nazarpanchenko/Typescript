export function getDiff(startDate, endDate) {
    const biggerDate = (endDate >= startDate) ? endDate : startDate;
    const smallerDate = (startDate >= endDate) ? startDate : endDate;

    let diffInMilliSeconds = Math.abs(biggerDate - smallerDate) / 1000;
    console.log(diffInMilliSeconds);

    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;

    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;

    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;

    const seconds = diffInMilliSeconds % 60;

    return '' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}

console.log(getDiff(new Date('2020/07/06 23:15:29'), new Date('2020/08/06 20:22:39')));
