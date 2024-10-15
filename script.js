document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    const countDownDate = new Date("October 15, 2024 18:00:00").getTime();
  
    // Update the countdown every 1 second
    const x = setInterval(function () {
      // Get the current date and time
      const now = new Date().getTime();
  
      // Calculate the time remaining
      const distance = countDownDate - now;
  
      // If the countdown is over, display a message
      if (distance <= 0) {
        clearInterval(x);
        document.getElementById("message").style.display = "none";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("timeline-content").style.display = "block";
      } else {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        // Display the countdown
        document.getElementById("countdown").innerHTML =
          "Message 💬 🎀 incoming in "+ hours + "h " + minutes + "m " + seconds + "s ";
      }
    }, 1000);
  });
  
function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const toggleButton = document.querySelector('.dark-mode-toggle');
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    section.classList.toggle('dark-mode');
    const emoji = body.classList.contains('dark-mode') ? '🌙' : '☀️';
    toggleButton.innerHTML = emoji;
}