function Clock(hourEl, minuteEl, secondEl, ampmEl) {
    this.hourEl = hourEl;
    this.minuteEl = minuteEl;
    this.secondEl = secondEl;
    this.ampmEl = ampmEl;
  }
  
  Clock.prototype.updateClock = function () {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
  
    if (h > 12) {
      h = h - 12;
      ampm = "PM";
    }
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    this.hourEl.innerText = h;
    this.minuteEl.innerText = m;
    this.secondEl.innerText = s;
    this.ampmEl.innerText = ampm;
  
    setTimeout(() => {
      this.updateClock();
    }, 1000);
  };
  
  // Usage
  const hourEl = document.getElementById("hour");
  const minuteEl = document.getElementById("minutes");
  const secondEl = document.getElementById("seconds");
  const ampmEl = document.getElementById("ampm");
  
  const clock = new Clock(hourEl, minuteEl, secondEl, ampmEl);
  clock.updateClock();