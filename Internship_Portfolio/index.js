
// Get references to the "SeeDemo" buttons by their IDs
var demoButton1 = document.getElementById("LinkButton1");
var demoButton2 = document.getElementById("LinkButton2");
var demoButton3 = document.getElementById("LinkButton3");

// Add click event listeners to each button
demoButton1.addEventListener("click", function () {
    // for project demo button
    window.open("https://cloneofcalculator.netlify.app/", "_blank");
});

demoButton2.addEventListener("click", function () {
    window.open("https://cloneofqrcodemaker.netlify.app/", "_blank");
});

demoButton3.addEventListener("click", function () {
    window.open("https://cloneofweatherapp.netlify.app/", "_blank");
});


const backgroundVideo = document.getElementById('vid');
backgroundVideo.playbackRate = 0.5; // customize playback speed 