const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getDay = dayIndex => days[dayIndex];

/**
 * @param {Date} date
 */
export const formatHour = (date) => {
  const minutes = date.getMinutes();
  let hour = date.getHours();
  const amPM = hour > 11 ? 'PM' : 'AM';
  if (hour > 12) {
    hour -= 12;
  } else if (hour == 0) {
    hour = '12';
  }
  return addZero`${hour}:${minutes}${amPM}`;
}

function addZero(raw, hours, minutes, amPm) {
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedHour = hours < 10 ? `0${hours}` : hours;
  return `${formattedHour}:${formattedMinutes}${amPm}`;
}