

// ტეხტ

const track = document.getElementById("tickerTrack");
const items = [...track.children];

items.forEach((item, index) => {
  let x = index * (item.offsetWidth + -25); // 20px ახლა დაშორებაა

  function move() {
    x -= 1; // მოძრაობის სიჩქარე
    item.style.transform = `translateX(${x}px)`;
    
    if (x < -item.offsetWidth) {
      x = track.offsetWidth;
    }
    requestAnimationFrame(move);
  }

  move();
});


// slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


const reviews = [
  {
    text: "ძალიან კარგი სერვისი, სწრაფი და ხარისხიანი!",
    name: "ნიკა ჯ.",
    role: "Frontend Developer",
    img: "https://i.pravatar.cc/150?img=3"
  },
  {
    text: "ზუსტად ისეთი შედეგი მივიღე, როგორსაც ველოდი.",
    name: "მარიამ კ.",
    role: "UI/UX Designer",
    img: "https://i.pravatar.cc/150?img=5"
  },
  {
    text: "პროფესიონალური მიდგომა და იდეალური კომუნიკაცია.",
    name: "გიორგი ლ.",
    role: "Startup Founder",
    img: "https://i.pravatar.cc/150?img=8"
  }
];

let index = 0;

function showReview() {
  const reviewText = document.getElementById("reviewText");
  const reviewName = document.getElementById("reviewName");
  const reviewRole = document.getElementById("reviewRole");
  const reviewImg = document.getElementById("reviewImg");

  reviewText.textContent = reviews[index].text;
  reviewName.textContent = reviews[index].name;
  reviewRole.textContent = reviews[index].role;
  reviewImg.src = reviews[index].img;
}

setInterval(() => {
  index = (index + 1) % reviews.length;
  showReview();
}, 4000); // 4 წამი

showReview();
