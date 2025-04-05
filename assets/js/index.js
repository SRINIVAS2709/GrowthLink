const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".testimonial-card");
const wrapper = document.getElementById("cardsWrapper");

// Mobile Navbar
function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('show');
}

function closeMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  menu.classList.remove('show');
}


// On dot click, scroll to the respective card
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.getAttribute("data-index"));
    const card = cards[index];
    wrapper.scrollTo({
      left: card.offsetLeft - wrapper.offsetLeft,
      behavior: "smooth"
    });

    updateActive(index);
  });
});

// Update active card and dot
function updateActive(index) {
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

// On manual scroll, update active card + dot
wrapper.addEventListener("scroll", () => {
  let closestIndex = 0;
  let closestDistance = Infinity;

  cards.forEach((card, index) => {
    const cardLeft = card.getBoundingClientRect().left;
    const wrapperLeft = wrapper.getBoundingClientRect().left;
    const distance = Math.abs(cardLeft - wrapperLeft);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  updateActive(closestIndex);
});

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Scroll that card into view
    wrapper.scrollTo({
      left: card.offsetLeft - wrapper.offsetLeft,
      behavior: "smooth"
    });

    // Update active card and dot
    updateActive(index);
  });
});


//   FAQ'S
function toggleAnswer(element) {
  const allFaqs = document.querySelectorAll('.faq-item');

  allFaqs.forEach(faq => {
      // Close all except the one that was clicked
      if (faq !== element) {
          faq.classList.remove('active');
      }
  });

  // Toggle the clicked one
  element.classList.toggle('active');
}


//   Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const amount = document.getElementById("amount").value;

  console.log("Form submitted:", {
    name,
    company,
    mobile,
    email,
    amount
  });

  alert("Thank you! Your request has been submitted.");

  // You can also send data to backend via fetch/AJAX here.
});
