const baseUrl = 'https://5f4107e4a5e9db0016302376.mockapi.io/api/v1/events';

const events = [];

export const getEventsList = () => {
    return fetch(baseUrl).then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(eventsList => eventsList);
}

export const createEvent = event => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(event)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create event');
        }
    });
}

export const updateEvent = (eventId, event) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(event)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update event');
        }
    });
}

export const deleteEvent = eventId => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete event');
        }
    });
}

export default events;




// const events = [
//     {
//         id: 1,
//         title: 'Go to the gym',
//         description: 'local gym',
//         dateFrom: new Date(2020, 10, 18, 12, 0),
//         dateTo: new Date(2020, 10, 18, 15, 0),
//     },
//     {
//         id: 2,
//         title: 'Go to the school',
//         description: 'hello, 2 am',
//         dateFrom: new Date(2020, 11, 11, 2, 0),
//         dateTo: new Date(2020, 11, 11, 8, 0),
//     },
//     {
//         id: 3,
//         title: 'Lunch',
//         description: 'coffee and sandwiches',
//         dateFrom: new Date(2020, 10, 17, 6, 0),
//         dateTo: new Date(2020, 10, 17, 6, 45),
//     },
//     {
//         id: 4,
//         title: 'Meet friend',
//         description: 'at the cafe',
//         dateFrom: new Date(2020, 10, 11, 9, 0),
//         dateTo: new Date(2020, 10, 11, 12, 0),
//     },
//     {
//         id: 5,
//         title: 'Go to the market',
//         description: 'local market',
//         dateFrom: new Date(2020, 10, 11, 15, 15),
//         dateTo: new Date(2020, 10, 11, 17, 15),
//     },
//     {
//         id: 6,
//         title: 'Visit another city',
//         description: 'Lviv',
//         dateFrom: new Date(2020, 10, 25, 8, 0),
//         dateTo: new Date(2020, 10, 25, 14, 0),
//     },
//     {
//         id: 7,
//         title: 'Prepare to exam',
//         description: 'history',
//         dateFrom: new Date(2020, 10, 25, 8, 0),
//         dateTo: new Date(2020, 10, 25, 14, 0),
//     },
//     {
//         id: 8,
//         title: 'Go for a walk',
//         description: 'at the park',
//         dateFrom: new Date(2020, 11, 13, 14, 45),
//         dateTo: new Date(2020, 11, 13, 15, 45),
//     },
//     {
//         id: 9,
//         title: 'Dinner',
//         description: 'meat',
//         dateFrom: new Date(2020, 10, 13, 10, 30),
//         dateTo: new Date(2020, 10, 13, 14, 0),
//     },
//     {
//         id: 10,
//         title: 'Watch the movie',
//         description: 'sci-fi',
//         dateFrom: new Date(2020, 11, 16, 0, 15),
//         dateTo: new Date(2020, 11, 16, 2, 15),
//     }
// ];