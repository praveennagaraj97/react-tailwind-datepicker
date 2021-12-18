export const daysOfWeekNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * @description Formats date
 * @param date
 * @returns formated date.
 */
export function formattedDate(date: Date): string {
  return date.toLocaleDateString('en-in', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/**
 * Beginning of Day of Week of a Month
 * @param date
 */
export function beginningDayOfWeek(month: number, year: number): number {
  return new Date(year, month).getDay();
}

/**
 * Days in month
 */
export function daysInMonth(month: number, year: number) {
  switch (month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
    case 1:
      return isLeapYear(year) ? 29 : 28;
    default:
      return 30;
  }
}

/**
 * Is Leap Year
 * @param year
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
