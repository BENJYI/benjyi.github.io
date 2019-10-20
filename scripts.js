function myFunction(imgs,id) {
  // Get the expanded image
  var projectImg = document.getElementById("project-img");
  // Get the image text
  // Use the same src in the expanded image as the image being clicked on from the grid
  projectImg.src = imgs.src;
  var projectText =  document.getElementById("project-text");
  if (id == 1) {
    projectText.innerHTML = "Start by matching adjacent pairs of tiles."
  } else if (id == 2) {
    projectText.innerHTML = "Shifting tiles around the board and match."
  } else if (id == 3) {
    projectText.innerHTML = "Any tiles between will be also be pushed."
  } else if (id == 4) {
    projectText.innerHTML = "If a move is valid, the board state changes."
  }
}

function myFunction2(imgs) {
  // Get the expanded image
  var projectImg = document.getElementById("project-img2");
  // Get the image text
  // Use the same src in the expanded image as the image being clicked on from the grid
  projectImg.src = imgs.src;
}

function toggleProjectDetails(id, i) {
  var pd = document.getElementById("project-detail-"+i);
  var toggled = window.getComputedStyle(pd).display;

  if (toggled == "none") {
    pd.style.display = "block";
  } else {
    pd.style.display = "none";
  }
}