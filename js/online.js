const badge = document.getElementById("badge-c");
const msgBox = document.getElementById("webpush-message");
if (msgBox && msgBox.textContent.trim() === "") {
  msgBox.textContent = "Allow Waanverse to send notifications";
}

window.addEventListener("offline", () => {
  if (badge) {
    badge.style.display = "block";
  }
});
window.addEventListener("online", () => {
  if (badge) {
    badge.style.display = "none";
  }
});
