if (process.client) {
  
  function scrollCheck() {
    let scrollPoint = 100;
    let bodyElement = document.querySelector('body');

    if (document.body.scrollTop > scrollPoint || document.documentElement.scrollTop > scrollPoint) {
      bodyElement.classList.add('scrolled');
    } else {
      bodyElement.classList.remove('scrolled');
    }
  }

  window.onscroll = () => {
    scrollCheck()
  };
}
