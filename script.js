// Splash Screen
document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash");
    const mainApp = document.getElementById("mainApp");

    setTimeout(() => {
        splash.classList.add("hidden");
        mainApp.style.display = "block";
    }, 2000); // Show splash screen for 2 seconds

    setTimeout(() => {
        mainApp.style.opacity = "1";
    }, 2500); // Fade in main app
});

// QR Scanner Functionality
const video = document.getElementById("video");
const resultContainer = document.getElementById("result");
const scanButton = document.getElementById("scanButton");
let scanner;

const startScanner = () => {
    scanner = new ZXing.BrowserQRCodeReader();
    scanner.getVideoInputDevices().then(videoInputDevices => {
        const selectedDeviceId = videoInputDevices[0].deviceId;

        scanner.decodeFromVideoDevice(selectedDeviceId, video, (result, error) => {
            if (result) {
                resultContainer.innerText = result.text;
                scanner.stopContinuousDecode();
            } else if (error) {
                console.warn(error);
            }
        });
    }).catch(error => console.error(error));
};

scanButton.addEventListener("click", () => {
    resultContainer.innerText = "";
    startScanner();
});
