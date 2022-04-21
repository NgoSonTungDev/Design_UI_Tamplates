const circle = document.querySelector(".form-container .circle");
const circle_span = document.querySelector(".form-container .circle span");
const form = document.querySelector(".form-container form");
const close_button = document.querySelector(".close-form");

const open_form = () => {
  anime
    .timeline({
      targets: circle_span,
      opacity: 0,
      easing: "linear",
      duration: 10,
    })
    .add({
      targets: circle,
      scale: 10,
      zIndex: -1,
      easing: "linear",
      rotateZ: "360deg",
      delay: 100,
      duration: 300,
    })
    .add({
      targets: form,
      easing: "linear",
      opacity: 1,
      delay: 500,
      duration: 400,
      begin: () => {
        form.style.display = "flex"; //BEFORE THE ANIMATION STARTS SHOW THE FORM
      },
    })
    .add({
      targets: close_button,
      easing: "linear",
      opacity: 1,
      duration: 100,
    });
};

const close_form = () => {
  anime
    .timeline({
      targets: close_button,
      easing: "linear",
      duration: 100,
      opacity: 0,
    })
    .add({
      targets: form,
      easing: "linear",
      duration: 400,
      opacity: 0,
      complete: () => {
        form.style.display = "none"; //WHEN THE ANIMATION IS COMPLETED HIDE THE FORM
      },
    })
    .add({
      targets: circle,
      scale: 1,
      zIndex: 1,
      easing: "linear",
      rotateZ: "-360deg",
      duration: 500,
    })
    .add({
      targets: circle_span,
      opacity: 1,
      easing: "linear",
      delay: 100,
      duration: 100,
    });
};
