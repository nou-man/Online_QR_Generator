
function func() {
  var btn = document.getElementById("down");
  var x = document.getElementById("input").value;
  
  makeQR(x);

  btn.style.display = "block";
  // downloader();
  // return;
}

function downloader() {
  downloadQR();
}


const makeQR = (your_data) => {
  let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRious({
      element: qrcodeContainer,
      value: your_data,
      size: 600,
      padding:50,
    }); // generate QR code in canvas
    // downloadQR(); // function to download the image

}

function downloadQR() {
    var link = document.createElement('a');
    link.download = 'QR_CODE.png';
    link.href = document.getElementById('qrcode').toDataURL()
    link.click();
} 

