function myFunction(imgs,id) {
  // Get the expanded image
  var projectImg = document.getElementById("project-img");
  // Get the image text
  // Use the same src in the expanded image as the image being clicked on from the grid
  projectImg.src = imgs.src;
  var projectText =  document.getElementById("project-text");
  if (id == 1) {
    projectText.innerHTML = "To start, we find a pair of identical adjacent tiles to create some space."
  } else if (id == 2) {
    projectText.innerHTML = "Now that we have some clearance, we can start shifting tiles around the board."
  } else if (id == 3) {
    projectText.innerHTML = "Notice that any tiles caught between the movement will be pushed as well."
  } else if (id == 4) {
    projectText.innerHTML = "If we can create a move that results in match, then the board's state changes."
  }
}

function myFunction2(imgs) {
  // Get the expanded image
  var projectImg = document.getElementById("project-img2");
  // Get the image text
  // Use the same src in the expanded image as the image being clicked on from the grid
  projectImg.src = imgs.src;
}