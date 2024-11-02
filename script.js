document.addEventListener("DOMContentLoaded", () => {
  populateYearOptions();
  populateMonthOptions();
  generateCalendar();
});

function populateYearOptions() {
  const yearSelect = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 0; i <= currentYear + 20; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    if (i === currentYear) option.selected = true;
    yearSelect.appendChild(option);
  }
}

function populateMonthOptions() {
  const monthSelect = document.getElementById("month");
  const currentMonth = new Date().getMonth();
  monthSelect.value = currentMonth;
}

function generateCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  const year = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  // Weekday headers
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  daysOfWeek.forEach(day => {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = day;
    calendar.appendChild(dayCell);
  });

  // Empty cells before the 1st day of the month
  for (let i = 0; i < startDay; i++) {
    const emptyCell = document.createElement("div");
    calendar.appendChild(emptyCell);
  }

  // Date cells with spacing rows
  for (let date = 1; date <= daysInMonth; date++) {
    const dateCell = document.createElement("div");
    dateCell.classList.add("date-cell");

    // Date number
    const dateNumber = document.createElement("div");
    dateNumber.classList.add("date-number");
    dateNumber.textContent = date;

    // Fillable space below date
    const fillSpace = document.createElement("div");
    fillSpace.classList.add("fill-space");

    dateCell.appendChild(dateNumber);
    dateCell.appendChild(fillSpace);
    calendar.appendChild(dateCell);
  }
}
