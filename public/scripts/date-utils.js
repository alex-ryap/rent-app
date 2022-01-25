/**
 *
 * @param date date to check(required)
 * @param minDate minimal Date rent(default current day)
 * @param maxDate maximal Date rent(default last day of next month)
 * @returns true or false value
 */
const checkDate = (date, minDate = new Date(), maxDate = getLastDayOfNextMonth(new Date())) => {
    return minDate <= date && date <= maxDate;
};
/**
 *
 * @param date Date
 * @returns Date in range from current Date to last day of next month
 */
export const getMinDefaultDate = (date) => {
    if (checkDate(date))
        return date;
    else
        return getDateWithDelta(new Date(), 1);
};
/**
 *
 * @param minDate minimal Date
 * @param date Date
 * @returns Date in range from minimal date to last day of next month
 */
export const getMaxDefaultDate = (minDate, date) => {
    if (checkDate(date, minDate))
        return date;
    else
        return getDateWithDelta(minDate, 3);
};
/**
 *
 * @param date Date
 * @param delta Days count
 * @returns new Date with delta days
 */
export const getDateWithDelta = (date, delta) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + delta);
};
/**
 *
 * @param date Date
 * @returns last day of next month
 */
export const getLastDayOfNextMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 2, 0);
};
/**
 *
 * @param date Date
 * @returns string with data in format YYYY-mm-dd
 */
export const formatDate = (date) => {
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
};
