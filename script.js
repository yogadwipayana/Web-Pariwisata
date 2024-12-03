window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry) 
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElement = document.querySelectorAll('.hidden');
// hiddenElement.forEach((el) => observer.observe(el));