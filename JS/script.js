let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  // Add the blur class when the user scrolls
  if (top > 0) {
    header.classList.add("blur-background");
  } else {
    header.classList.remove("blur-background");
  }

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// --------------------------------sending email & form validation ----------------------------------------

const form = document.querySelector("form");

const fullName = document.getElementById("fullname");
const empEmail = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const subject = document.getElementById("subject");
const empMessage = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> 
                      Email: ${empEmail.value}<br> 
                      Phone Number: ${phoneNumber.value}<br> 
                      Message: ${empMessage.value} `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "franklyiam22@gmail.com",
    Password: "3816038E8F83805581578EE4D91707EDABFC",
    To: "franklyiam22@gmail.com",
    From: "franklyiam22@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
