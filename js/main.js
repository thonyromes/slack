// initializer
function init() {
  let disLangOptions = document.getElementById("disLangOptions");
  let langOp = document.getElementById("langOptions");
  let disHeader = document.getElementById("slideHeader");
  let showSideNav = document.getElementById("showSideNav");
  let resSideNav = document.getElementById("resSideNav");
  let slideOverflow = document.getElementById("slideOverflow");
  let accAnswer = document.getElementsByClassName("accAnswer");
  let accQuestion = document.getElementsByClassName("accQuestion");

  // open language options when clicked
  disLangOptions.addEventListener("click", function() {
    langOp.style.display = "block";
  });

  // close language options when browser window is clicked
  window.addEventListener("click", function(e) {
    if (e.target !== disLangOptions) {
      langOp.style.display = "none";
    }
  });

  //header display animation
  window.addEventListener("scroll", function() {
    if (
      (document.documentElement.scrollTop > 50 &&
        document.documentElement.scrollTop < 900) ||
      (document.body.scrollTop > 50 && document.body.scrollTop < 900)
    ) {
      disHeader.style.display = "none";
      if (
        document.documentElement.scrollTop > 1000 ||
        document.body.scrollTop > 1000
      ) {
        disHeader.style.display = "block";
      }
    } else {
      disHeader.style.display = "block";
    }
  });

  //show sidebar nav
  showSideNav.addEventListener("click", function() {
    resSideNav.classList.replace("dn", "db");
    slideOverflow.classList.add("overflow-hidden");
  });

  //hide sidebar nav
  hideSideNav.addEventListener("click", function() {
    resSideNav.classList.replace("db", "dn");
    slideOverflow.classList.remove("overflow-hidden");
  });

  //preclose all answer p tags
  for (let i = 0; i < accAnswer.length; i++) {
    accAnswer[i].classList.toggle("dn");
  }

  //display current p tag when respective h3 tag is clicked
  for (let x = 0; x < accQuestion.length; x++) {
    accQuestion[x].onclick = function() {
      this.nextElementSibling.classList.toggle("dn");
    };
  }
}
