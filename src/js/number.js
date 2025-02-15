const roundPoint = number => Math.round(number * 10) / 10;
const formatNumber = number => Number(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
const formatPoints = number => number.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });

export { roundPoint, formatNumber, formatPoints };
