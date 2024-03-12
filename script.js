const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
    let datesHtml = "";

    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    for (let i = 0; i < start; i++) {
        datesHtml += `<li class="inactive">${endDatePrev - start + 1 + i}</li>`;
    }

    for (let i = 1; i <= endDate; i++) {
        if (i === date.getDate() && month === date.getMonth() && year === date.getFullYear()) {
            datesHtml += `<li class="today">${i}</li>`;
        } else {
            datesHtml += `<li>${i}</li>`;
        }
    }

    for (let i = 0; i < 6 - end; i++) {
        datesHtml += `<li class="inactive">${i + 1}</li>`;
    }

    dates.innerHTML = datesHtml;
    header.textContent = `${months[month]} ${year}`;
}

renderCalendar();

prevBtn.addEventListener('click', () => {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    renderCalendar();
});

nextBtn.addEventListener('click', () => {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    renderCalendar();
});
