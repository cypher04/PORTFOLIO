function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});

// form validation //

const note = document.querySelector(".sub");


note.addEventListener('onClick', onSubmit);

function onSubmit(){
  alert("Thank you for Contacting me");
}

 