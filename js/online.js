const badge = document.getElementById("badge-c");
if (navigator.onLine) {
  badge.style.display = "none";
} else {
  badge.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const NotificationBadge = document.getElementById("b-not");

  if (
    Notification.permission === "denied" ||
    Notification.permission === "default"
  ) {
    if (NotificationBadge) {
      NotificationBadge.style.display = "flex";
    }
  } else {
    if (NotificationBadge) {
      NotificationBadge.style.display = "none";
    }

  }
});

const msgBox = document.getElementById("webpush-message");

if (msgBox) {
  if (msgBox.textContent === "") {
    msgBox.textContent = "Allow Waanverse to send notifications";
  }
}






