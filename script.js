// Start of Hamburger


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
  }));


// Start of Gallery
const boxes = document.querySelectorAll(".box");

checkBoxes();
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
	const triggerBottom = (window.innerHeight / 5) * 2.8;
	
	boxes.forEach((box) => {
		let boxTop = box.getBoundingClientRect().top;
		boxTop < triggerBottom
			? box.classList.add("show")
			: box.classList.remove("show");
	});
}


// Start of Contact Form

let sendBtn = document.getElementById('sendBtn');
const form = document.getElementById('form');

sendBtn.addEventListener('click', function(e) {
	e.preventDefault();

	sendBtn.value = 'Sending...';

	const serviceID = 'default_service';
    const templateID = 'template_ll9pb4l';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        sendBtn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        sendBtn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
})

