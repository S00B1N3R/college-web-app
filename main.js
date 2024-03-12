var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
function start() {
    recognition.start()
}
recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript
    if (content == 'selfie') {
        speak()
        Webcam.attach(camera)
        setTimeout(function () {
            capture(1)
            speak()

        }, 5000)
        setTimeout(function () {
            capture(2)
            speak()

        }, 10000)
        setTimeout(function () {
            capture(3)
            speak()

        }, 15000)
        setTimeout(function () {
            capture(4)

        }, 20000)
    }
}
function speak() {
    synth = window.speechSynthesis
    speakdata = "taking your selfie in 5 seconds"
    utterthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
})
camera = document.getElementById("camera")
function capture(i) {
    Webcam.snap(function (data) {
        document.getElementById('result' + i).innerHTML = '<img id="selfie_image" src="' + data + '">'
    })
}