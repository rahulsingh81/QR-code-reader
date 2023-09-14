const qrText = document.getElementById("qr-text");
const sizeSelect = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
let qrContainer = document.querySelector(".qr-body");

let size = sizeSelect.value;
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});
sizeSelect.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput();
});
downloadBtn.addEventListener("click", (e) => {
  let img = document.querySelector(".qr-body img");
  if (img !== null) {
    let imgAtrr = img.getAttribute("src");
    downloadBtn.setAttribute("href", imgAtrr);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});
function isEmptyInput() {
  if (qrText.value.length > 0) {
    generateQRCode();
  } else {
    alert("Enter the text or URL to generate your QR code");
  }
  qrText.value.length > 0
    ? generateQRCode()
    : alert("Enter the text or URL to generate your QR code");
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    width: size,
    height: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
