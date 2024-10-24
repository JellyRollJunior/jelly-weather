import { format } from "date-fns";
export { displayTitle }

function displayTitle(data, country) {
    const city = document.querySelector('h1 > .city');
    const countryElement = document.querySelector('h1 > .country');
    const date = document.querySelector('h2 > .date');
    const time = document.querySelector('h2 > .time');

    city.textContent = data.address;
    countryElement.textContent = country;
    const now = new Date();
    date.textContent = format(now, 'EEEE, LLLL do, uuuu');
    time.textContent = format(now, 'KK:mmaaa')
}