document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('nav ul');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
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