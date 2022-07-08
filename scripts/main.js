window.addEventListener('load', () => {
  function isHidden(el) {
    return (el.offsetParent === null)
  }
  
  document.querySelector('#nav-toggle').addEventListener('click', toggleMobileNav() => {
    const mobileNav = document.querySelector('header nav');
    mobileNav.style.display = isHidden(mobileNav) ? 'flex' : 'none';
  });
}, false);