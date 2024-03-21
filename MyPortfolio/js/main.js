/*=================== Contact Form ====================*/

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  Message = document.getElementById("message"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
  ) {
    // add and remove
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");

    //show message
    contactMessage.textContent = "Write all the input fields";
  } else {
    // serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        "service_qqg7c0h",
        "template_mxwplgn",
        "#contact-form",
        "2j53ySEKVD_F981KP"
      )
      .then(() => {
        //show message add color, window + dot to open emoji
        contactMessage.classList.add("color-light");
        contactMessage.textContent = "Message Sent! ✔️";

        //remove message aftr 5 seconds

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      }, (error) => {
        alert('OOPs! SOMETHING WENT WRONG...', error);
      });

      //clear input fields

      contactName.value = '';
      contactEmail.value = '';
      Message.value = '';
  }
};

contactForm.addEventListener("submit", sendEmail);
