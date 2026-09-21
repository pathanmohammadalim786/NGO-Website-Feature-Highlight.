// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// ================= IMPACT COUNTER =================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(function(entries, observer) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.ceil(target / 50);

            const timer = setInterval(function() {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent =
                    current.toLocaleString("en-IN") + "+";

            }, 30);

            observer.unobserve(counter);

        }

    });

});


counters.forEach(function(counter) {

    counterObserver.observe(counter);

});


// ================= DONATION =================

const amountButtons =
    document.querySelectorAll(".amount");

const customAmount =
    document.getElementById("customAmount");

const donateBtn =
    document.getElementById("donateBtn");


amountButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        amountButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        customAmount.value = "";

        const amount = button.dataset.amount;

        donateBtn.textContent =
            "Donate ₹" +
            Number(amount).toLocaleString("en-IN");

    });

});


customAmount.addEventListener("input", function() {

    amountButtons.forEach(function(button) {

        button.classList.remove("active");

    });

    const amount = customAmount.value;

    if (amount > 0) {

        donateBtn.textContent =
            "Donate ₹" +
            Number(amount).toLocaleString("en-IN");

    }

});


donateBtn.addEventListener("click", function() {

    let amount = customAmount.value;

    const activeButton =
        document.querySelector(".amount.active");

    if (!amount && activeButton) {

        amount = activeButton.dataset.amount;

    }

    if (!amount) {

        amount = 500;

    }

    alert(
        "Thank you! Demo donation selected: ₹" +
        Number(amount).toLocaleString("en-IN")
    );

});


// ================= VOLUNTEER FORM =================

const volunteerForm =
    document.getElementById("volunteerForm");

const formMessage =
    document.getElementById("formMessage");


volunteerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const interest =
        document.getElementById("interest").value;


    if (!name || !email || !interest) {

        formMessage.textContent =
            "Please fill all required fields.";

        return;

    }


    formMessage.textContent =
        "Thank you, " +
        name +
        "! Your volunteer form has been submitted successfully.";

    volunteerForm.reset();

});


// ================= CAMPAIGN BUTTONS =================

const campaignButtons =
    document.querySelectorAll(".campaign-btn");


campaignButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert(
            "Thank you for your interest in supporting this campaign!"
        );

    });

});


// ================= FOOTER YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();