var presentCustomer;



function newCustomer(name, address, buyingFor = '' , invoiceNumber  ) {
    
    
    this.name = name;
    this.address = address;
    this.QrData = "";
    this.time = new Date();
    this.items = new Array() ;
    this.itemCount = 0;
    this.buyingFor = ""; // institutt?self?
    invoiceNumber ? this.invoiceNumber : ""; //code here

    // final

    
    
    // basic function 
    presentCustomer = this;
}

// add item to customer

newCustomer.prototype.addItem = function(item) {
this.items.push(item);
this.itemCount++;
}

// generate QR code

// newCustomer.prototype.generateQrCode = function() {
// var qr = new QRCode(document.getElementById("qrcode"), {
// text: this.QrData,
// width: 200,
// height: 200
// });
// }

// QRcode js settings
var qrcode = new QRCode("test", {
    text: "http://jindo.dev.naver.com/collie",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
})
//item constructor

function newItem(name, price, Qty, itemSirialNo ) {
this.sirial = presentCustomer.items.length + 1;
this.name = name;
this.price = price;
this.qty = qty;

this.itemSirialNo = itemSirialNo; 

presentCustomer.addItem(this);
}