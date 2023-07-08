const emailForm = document.querySelector(".email-form");
const personalInfo = document.querySelector(".personal-info");
const submit = document.querySelector(".btn-submit");

// FUNCTION CHECK EMAIL - RETURN TRUE/FALSE
function checkEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

// CHECK EMAIL WHEN CLICK SUBMIT BOTTON
submit.addEventListener("click", function () {
  const email = document.getElementById("email").value;
  if (checkEmail(email)) {
    emailForm.classList.add("hide");
    personalInfo.classList.remove("hide");
  } else {
    alert("Vui lòng nhập abc@funix.edu.vn !");
  }
});

//function show,none imtem

// bat su kien di chuot vao
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

// bat su kien di chuot ra
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes(".control-view")) {
    viewMore.style.display = "none";
  }
}

// onclik view more ,view less
function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  const sectionContent = parentElement.querySelectorAll(".section-content");
  if (viewMore.classList.value.includes("view-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("view-less");
    viewMore.innerHTML = "View-Less";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("view-less");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View-More";
  }
}
