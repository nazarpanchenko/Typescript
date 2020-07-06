// const formatter = new Intl.DateTimeFormat('en', {
//     timeZone : 'UTC',
//     hour : '2-digit',
//     minute : '2-digit',
//     hour12 : false
// });

export function getGreenwichTime(date) {
    return new Date(Date.UTC(2020, 0, 6, 43));
}

getGreenwichTime(newDate());
