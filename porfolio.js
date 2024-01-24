/* <script>
document.querySelectorAll('nav-link').forEach(anchor ={">"} {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('#about').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  })
})
</script> */





function closeNavbar() {
    $('.navbar-collapse').collapse('hide');
  }

 