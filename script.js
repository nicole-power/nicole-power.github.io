function myFunction () {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const moreBtn = document.getElementById("moreBtn");
  const lessBtn = document.getElementById("lessBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    moreBtn.style.display = "inline"
    lessBtn.style.display = "none"
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    moreBtn.style.display = "none"
    lessBtn.style.display = "inline"
  }
}