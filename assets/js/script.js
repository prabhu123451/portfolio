let roles = ["UI/UX Designer", "Web Developer", "Web Designer",];
let prabu = 0;

setInterval(() => {
    prabu = (prabu + 1) % roles.length;
    document.getElementById("change").textContent = roles[prabu];
}, 1000); 