 // تابع برای دریافت یک رشته تاریخ و ذخیره آن در localStorage
 function saveEndTime(endTimeString) {
    localStorage.setItem('endTime', endTimeString);
  }

  // تابع برای خواندن زمان پایان شمارش از localStorage
  function loadEndTime() {
    return localStorage.getItem('endTime');
  }

  // تنظیم زمان پایان شمارش اولیه
  let endTime = loadEndTime();

  if (!endTime) {
    // اگر زمان پایان شمارش در localStorage موجود نبود، زمان پایان شمارش را تنظیم کنید (مثال: 2 روز بعد)
    const now = new Date();
    now.setDate(now.getDate() + 2); // اینجا می‌توانید تعداد روزها را تغییر دهید
    endTime = now.toISOString();
    saveEndTime(endTime); // ذخیره کردن زمان پایان شمارش در localStorage
  } else {
    endTime = new Date(endTime);
  }

  function updateTimer() {
    const now = new Date().getTime();
    const distance = new Date(endTime) - now;

    // محاسبه زمان باقی‌مانده بر اساس میلی‌ثانیه
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // نمایش زمان در المان HTML
    const timerElement = document.querySelector('.timer');
    timerElement.innerHTML = `
        <div class="day d-flex flex-column align-items-center mx-2 text-white">
            <div class="number">${days}</div>
            <div class="text">Day</div>
        </div>
        <div class="hour d-flex flex-column align-items-center mx-2 text-white">
            <div class="number">${hours}</div>
            <div class="text">Hour</div>
        </div>
        <div class="minute d-flex flex-column align-items-center mx-2 text-white">
            <div class="number">${minutes}</div>
            <div class="text">Minute</div>
        </div>
        <div class="second d-flex flex-column align-items-center mx-2 text-white">
            <div class="number">${seconds}</div>
            <div class="text">Second</div>
        </div>
    `;

    // اگر زمان به اتمام رسیده باشد، نمایش پیام مناسب
    if (distance < 0) {
      clearInterval(timerInterval);
      timerElement.innerHTML = "<div>محصول تمام شده است!</div>";
    }
  }

  // فراخوانی تابع برای بروزرسانی تایمر هر ثانیه
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);