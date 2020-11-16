import moment from "moment";

export const date = {
        date: moment().format('mm/dd/yyyy'),
        hours : moment().format('hh'),
        minutes : moment().format('mm')
};

export const isTitleValid = event => event !== '';

export const isDateValid = dateTime => {
    const { date, startTime, endTime } = dateTime;

    const dayStart = new Date(date, startTime);
    dayStart.setHours(0);

    const dayEnd = new Date(date, endTime);
    dayEnd.setHours(dayStart.getHours() + 24);

    dateTime.startTime = new Date(date, startTime).getTime();
    dateTime.endTime = new Date(date, endTime).getTime();

    const validators = {
        datesNotSame: startTime !== endTime,
        isInRange: (startTime > dayStart) && (endTime < dayEnd),
        isDurationValid: moment(endTime).diff(moment(startTime), 'hours') < 6,
        isCorrectMins: !(new Date(date, startTime).getMinutes() % 15) 
            && !(new Date(date, endTime).getMinutes() % 15)
    };

    for (let validator in validators) {
        if (!validators[validator]) return false; 
    }

    return true;
};

export const isEventValid = validators => {
    const { title, date, startTime, endTime } = validators;

    for (let validator in validators) {
        if (!validators[validator]) return false;
    }

    return true;
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