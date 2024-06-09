function animateBanner() {
    const banner = document.querySelector('.animated');
    banner.style.opacity = banner.style.opacity === '0' ? '1' : '0';
  }
  
  setInterval(animateBanner, 500);