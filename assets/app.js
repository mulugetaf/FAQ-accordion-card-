// document.onclick = function(){myFunction()};

function myFunction(event) {
  // name = document.getElementsByClassName(this)
  console.log(event.target.getAttribute("id"));

  let clickedId = event.target.getAttribute("id");
  let clickedIndex = parseInt(clickedId) - 1;
  console.log(clickedId);
  let currentAnswer = document.getElementsByClassName("answer")[clickedIndex];
  let currentQuestion = document.getElementsByClassName("question")[clickedIndex];
  let currentIcon = document.getElementsByClassName("icon-arrow-down")[clickedIndex];

//   console.log(isHidden(currentQuestion));
  if (isHidden(currentAnswer)) {
    currentAnswer.classList.toggle("answer-after");
    currentQuestion.style ='font-weight:bold; color:black;';
    currentIcon.classList.toggle("icon-arrow-up-after")
  } else {
    currentAnswer.classList.remove('answer-after');
    currentIcon.classList.remove("icon-arrow-up-after")
    currentQuestion.style='font-weight:auto;';

  }
}

// check if elment is visible or hidden
// Where el is the DOM element you'd like to test for visibility
function isHidden(el) {
  console.log(el);
  var style = window.getComputedStyle(el);
  return style.visibility === "hidden";
}
