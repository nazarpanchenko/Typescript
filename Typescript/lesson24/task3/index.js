export function getDiff(startDate, endDate) {
    let timeDifference = Math.abs(endDate - startDate) / 1000;

    const days = Math.floor(timeDifference / 86400);
    timeDifference -= days * 86400; 

    const hours = Math.floor(timeDifference / 3600) % 24;
    timeDifference -= hours * 3600;

    const minutes = Math.floor(timeDifference / 60) % 60;
    timeDifference -= minutes * 60;

    const seconds = timeDifference % 60;

    return '' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}

getDiff(new Date(2020, 7, 6, 23, 15, 29), new Date(2020, 8, 6, 20, 22, 39));
