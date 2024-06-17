const heading = document.querySelector("h1");
console.log(heading);
heading.innerText = "Hari";
setTimeout(function () {
  heading.innerText = "Hari Prasath";
}, 3000);
