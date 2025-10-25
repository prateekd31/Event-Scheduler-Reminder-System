const addEventBtn = document.getElementById("addEventBtn");
const eventNameInput = document.getElementById("eventName");
const eventDateInput = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventList = document.getElementById("eventList");
const alertSound = document.getElementById("alertSound");
const themeToggle = document.getElementById("themeToggle");

let events = JSON.parse(localStorage.getItem("events")) || [];

// ✅ Ask notification permission
document.addEventListener("DOMContentLoaded", () => {
  if (Notification.permission !== "granted" && Notification.permission !== "denied") {
    Notification.requestPermission();
  }

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
});

// ✅ Toggle dark/light mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

function saveEvents() {
  localStorage.setItem("events", JSON.stringify(events));
}

function updateEventList() {
  eventList.innerHTML = "";
  events.forEach((event, index) => {
    const li = document.createElement("li");
    li.classList.add("event-item");

    const remainingTime = getRemainingTime(event, index);

    const progressHTML = getProgressBarHTML(event);

    li.innerHTML = `
      <div>
        <strong>${event.name}</strong>
        <div class="category ${event.category}">${event.category}</div><br>
        <small>${new Date(event.date).toLocaleString()}</small><br>
        <small>${remainingTime}</small>
        ${progressHTML}
      </div>
      <button onclick="deleteEvent(${index})">❌</button>
    `;

    eventList.appendChild(li);
  });
}

function getProgressBarHTML(event) {
  const now = new Date();
  const eventTime = new Date(event.date);
  const totalDuration = eventTime - new Date(event.createdAt);
  const timePassed = now - new Date(event.createdAt);
  const progress = Math.min((timePassed / totalDuration) * 100, 100);

  return `
    <div class="progress-container">
      <div class="progress-bar" style="width: ${progress}%;"></div>
    </div>
  `;
}

function getRemainingTime(event, index) {
  const now = new Date();
  const eventTime = new Date(event.date);
  const diff = eventTime - now;

  if (diff <= 0) {
    if (!event.notified) triggerNotification(event, index);
    return "⏰ Event time reached!";
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return `⏰ ${days}d ${hours}h ${minutes}m left`;
}

function triggerNotification(event, index) {
  alertSound.play();

  if (Notification.permission === "granted") {
    new Notification("🎉 Event Reminder", {
      body: `${event.name} (${event.category}) is happening now!`,
      icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
    });
  } else {
    alert(`🔔 ${event.name} (${event.category}) is happening now!`);
  }

  events[index].notified = true;
  saveEvents();
}

function deleteEvent(index) {
  events.splice(index, 1);
  saveEvents();
  updateEventList();
}

addEventBtn.addEventListener("click", () => {
  const name = eventNameInput.value.trim();
  const date = eventDateInput.value;
  const category = eventCategory.value;

  if (!name || !date) {
    alert("Please enter both event name and date!");
    return;
  }

  events.push({ 
    name, 
    date, 
    category, 
    createdAt: new Date().toISOString(), 
    notified: false 
  });

  saveEvents();
  updateEventList();

  eventNameInput.value = "";
  eventDateInput.value = "";
});

setInterval(updateEventList, 1000);
updateEventList();
