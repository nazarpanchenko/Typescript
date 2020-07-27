export const shmoment = date => {
   let modifiedDate = new Date(date.valueOf());

   const dateModifications = {
       add(timeValue, timeAmount) {
            switch (timeValue) {
                case 'years':
                    modifiedDate.setFullYear(modifiedDate.getFullYear() + timeAmount);
                    break;
                case 'months':
                    modifiedDate.setMonth(modifiedDate.getMonth() + timeAmount);
                    break;
                case 'days':
                    modifiedDate.setDate(modifiedDate.getDate() + timeAmount);
                    break;
                case 'hours':
                    modifiedDate.setHours(modifiedDate.getHours() + timeAmount);
                    break;
                case 'minutes':
                    modifiedDate.setMinutes(modifiedDate.getMinutes() + timeAmount);
                    break;
                case 'seconds':
                    modifiedDate.setSeconds(modifiedDate.getSeconds() + timeAmount);
                    break;
                case 'milliseconds':
                    modifiedDate.setMilliseconds(modifiedDate.getMilliseconds() + timeAmount);
                    break;
            }

           return this;
       },
       subtract(timeValue, timeAmount) {
            switch (timeValue) {
                case 'years':
                    modifiedDate.setFullYear(modifiedDate.getFullYear() - timeAmount);
                    break;
                case 'months':
                    modifiedDate.setMonth(modifiedDate.getMonth() - timeAmount);
                    break;
                case 'days':
                    modifiedDate.setDate(modifiedDate.getDate() - timeAmount);
                    break;
                case 'hours':
                    modifiedDate.setHours(modifiedDate.getHours() - timeAmount);
                    break;
                case 'minutes':
                    modifiedDate.setMinutes(modifiedDate.getMinutes() - timeAmount);
                    break;
                case 'seconds':
                    modifiedDate.setSeconds(modifiedDate.getSeconds() - timeAmount);
                    break;
                case 'milliseconds':
                    modifiedDate.setMilliseconds(modifiedDate.getMilliseconds() - timeAmount);
                    break;
            }
            
            return this;
       },
       result() {
            return modifiedDate;
       }
   };

   return dateModifications;
};

console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result());
