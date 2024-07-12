//Burger Nav
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('nav ul');
    const menuItems = document.querySelectorAll("header nav ul li a");

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            navLinks.classList.remove('active');
            burger.classList.remove("active");
        });
    });
});

//Unity Recorder
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("UnityRecorder");
    video.src = "assets/UnityRecorder.mp4";
    const startTime = 5;
    const endTime = 12;

    video.addEventListener("timeupdate", function() {
        if (video.currentTime >= endTime) {
            video.currentTime = startTime;
        }
    });

    video.addEventListener("loadedmetadata", function() {
        video.currentTime = startTime;
        video.play();
    });
});