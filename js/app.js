window.addEventListener("scroll", function () {
  let header = document.querySelector(".nav");
  header.classList.toggle("scroll", window.scrollY > 100);
});

// const observer = new IntersectionObserver((e) => {
//   e.forEach((entry) => {
//     console.log(entry);
//   });
// });
