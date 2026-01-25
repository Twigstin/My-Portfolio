
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-btn");
const menuCloseButton = document.querySelector(".menu-close-btn");
const menuLinks = menu.querySelectorAll("a");




menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.add("active");
    if (menu.classList.contains("active")) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = '';
    }
        
});

menuCloseButton.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = '';
})

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.style.overflow = '';
    })
})


const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
button.addEventListener("pointerdown", () => {
        button.classList.add("pressed");
    })

    button.addEventListener("pointerup", () => {
        button.classList.remove("pressed");
    })
    button.addEventListener("pointerleave", () => {
        button.classList.remove("pressed");
    })

    button.addEventListener("pointercancel", () => {
        button.classList.remove("pressed");
    })
})


const reveals = document.querySelectorAll(".reveal");

// Prevent browser from restoring previous scroll position on page reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    })
}, { thereshold: 0.2 });
reveals.forEach(reveal => observer.observe(reveal));

const form = document.getElementById("contact-form");
const modal = document.getElementById("success-modal");
const closeBtn = document.getElementById("close-modal");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        form.reset(); // ✅ clears inputs
        modal.classList.remove("hidden"); // ✅ show popup
      })
      .catch((err) => {
        alert("Message failed to send.");
        console.error(err);
      });
  });

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.classList.add("hidden");
});