const formatter = new Intl.DateTimeFormat('en', {
    timeZone : 'UTC',
    hour : '2-digit',
    minute : '2-digit',
    hour12 : false
});

export function getGreenwichTime(date) {
    formatter.format(date);
}

getGreenwichTime(newDate());
