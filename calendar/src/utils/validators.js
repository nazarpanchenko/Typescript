import moment from "moment";
import { getEventsList } from '../gateway/events.js';

export const date = {
    date: moment().format('YYYY-MM-DD', 'mm/dd/yyyy'),
    hours : moment().format('hh'),
    minutes : moment().format('mm')
};

export const isTitleValid = event => event !== '';

export const isDateValid = dateTime => {
    const { date, startTime, endTime } = dateTime;

    const dayStart = new Date(date, startTime);
    dayStart.setHours(0);

    const dayEnd = new Date(dayStart);
    dayEnd.setHours(dayStart.getHours() + 24);

    dateTime.startTime = new Date(date, startTime).getTime();
    dateTime.endTime = new Date(date, endTime).getTime();

    const validators = {
        datesNotSame: startTime !== endTime,
        isInRange: (startTime > dayStart) && (endTime < dayEnd),
        isDurationValid: moment.duration(moment(endTime).diff(moment(startTime))).asHours() < 6,
        isCorrectMins: !(new Date(date, startTime).getMinutes() % 15) 
            && !(new Date(date, endTime).getMinutes() % 15)
    };

    for (let validator in validators) {
        if (!validators[validator]) return false; 
    }

    return true;
};

export const allInputsValid = validators => {
    const { title, date, startTime, endTime } = validators;

    for (let validator in validators) {
        if (!validators[validator]) return false;
    }

    return true;
};

export const isEventExists = event => {
    getEventsList().then(eventsList => eventsList.map(e => {
            if (event.dateFrom === e.dateFrom || event.dateTo === e.dateTo) {
                alert('Event is already planned on this date. Please, choose another date');
                return false;
            }

            return true;
        })
    );
};

export const canDeleteEvent = event => {
    const startTime = new Date(event.dateFrom);

    return moment.duration(moment(startTime).diff(moment(startTime)
        .subtract(15, 'minutes'))).asMinutes() < 15;
};

export const validator = () => {
    return {
        title: false,
        date: false,
        startTime: false,
        endTime: false
    }
};

export default validator;