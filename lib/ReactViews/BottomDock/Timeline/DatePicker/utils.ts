export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const daysInMonth = (month: number, year: number) => {
  const n = new Date(year, month, 0).getDate();

  return Array.from(Array(n).keys());
};
