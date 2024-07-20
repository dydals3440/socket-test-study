export const formatTime = (inputDate) => {
    const date = new Date(inputDate);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());

    return `${hours}:${minutes}`;
}

// helper functino to pad single-digit numbers with a leading
const padZero = (number) => {
    return number.toString().padStart(2, '0');
}