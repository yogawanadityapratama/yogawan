let currentMonth = new Date().getMonth();
renderCalendar(currentMonth);

function renderCalendar(month) {
  const calendarBody = document.querySelector('#calendar tbody');
  calendarBody.innerHTML = '';

  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), month, 1).getDay();
  const daysInMonth = new Date(today.getFullYear(), month + 1, 0).getDate();

  let dayCounter = 1;

  document.getElementById('month-year').textContent = `${getMonthName(month)} ${today.getFullYear()}`;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');

      if (i === 0 && j < firstDayOfMonth) {
        // Empty cells before the first day of the month
        cell.textContent = '';
      } else if (dayCounter <= daysInMonth) {
        cell.textContent = dayCounter;

        if (
          today.getDate() === dayCounter &&
          today.getMonth() === month &&
          today.getFullYear() === today.getFullYear()
        ) {
          cell.classList.add('active');
        }

        dayCounter++;
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }
}

function previousMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
  }
  renderCalendar(currentMonth);
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
  }
  renderCalendar(currentMonth);
}

function getMonthName(month) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[month];
}