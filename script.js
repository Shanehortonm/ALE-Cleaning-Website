window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("", window.scrollY > 0);
})




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
