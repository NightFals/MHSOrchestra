const stars = [
  { top: "30%", left: "40%", link: "star1.html" },
  { top: "50%", left: "60%", link: "star1.html" }, // Copy and edit for each graduate
  { top: "70%", left: "20%", link: "star1.html" },
];

const container = document.getElementById("star-container");

stars.forEach((star, index) => {
  const a = document.createElement("a");
  a.href = star.link;
  a.className = "star";
  a.style.top = star.top;
  a.style.left = star.left;
  container.appendChild(a);
});
