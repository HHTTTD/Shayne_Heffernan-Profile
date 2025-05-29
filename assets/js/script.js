window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-fade');

  const delays = [0, 500, 1000, 1500]; // เวลาแสดงแต่ละรูปเป็นมิลลิวินาที (ms)

  images.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add('opacity-100', 'translate-y-0');
    }, delays[index] || 0);
  });
});
