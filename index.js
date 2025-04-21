function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.innerText = now.toLocaleTimeString('en-GB', { hour12: false });
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Initial call


  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  }

