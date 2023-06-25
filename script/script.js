setTimeout(() => {
    var presentCustomer;
    let rawDataForm = document.forms[0];


    function Customer(name, address, buyingFor = 'Customer', invoiceNumber, phone = 0, _discountAmount = 0) {

        this.name = name.toUpperCase();
        this.address = address.toUpperCase();
        this.QrData = name + "innerDataInBtoa";
        this.time = new Date();
        this.items = new Array();
        this.itemCount = 0;
        this.buyingFor = ""; // institutt?self?
        this.invoiceNumber = invoiceNumber ? this.invoiceNumber : ""; //code here ''this
        this._discountAmount = _discountAmount;
        this.buyingFor = buyingFor; //
        this.grandTotal = 0;
        this.subtotal = 0;


        nameEle[0].innerHTML = `<p class="s14" style="padding-top: 11pt;padding-left: 16pt;text-indent: 0pt;text-align: left;">${this.buyingFor} : <span class="h4">${this.name}, ${this.address}</span><span class="s15">.</span></p>`;
        /////////////////////////////////////////////////////////////////////////////
        // this.totalAmount = items.forEach(item => {
        //     let tempAmount += item[3];

        // }); //need here
        // this._discountAmount = _discountAmount ? typeof _discountAmount === 'number' ? this.totalAmount -= _discountAmount: 2: "No discount." ; //need here

        //  this.discountAmount = x;
        //  const age = 17;
        // const age = 17;
        // console.log(
        //     age < 17 
        //         ? "You cannot drive."
        //         : age == 17
        //             ? "Go to driving school." 
        //             : "You can drive."
        // );
        this.phone = phone;
        // final



        // basic function 
        presentCustomer = this;
    }
    console.log(document.getElementsByClassName("v-secondary")[0]) ////////////////////////////////
    // document.getElementsByClassName("v-secondary")[1].innerHTML = "no text selected";
    document.getElementsByClassName("v-secondary")[1].innerHTML = document.getElementsByClassName("v-secondary")[0].innerHTML;
    var cusTable0 = document.getElementsByTagName("table")[0];
    var cusTable1 = document.getElementsByTagName("table")[1];
    var cusTable0Body = cusTable0.tBodies[0]; /////////////////////////////////////////////
    var nameEle = document.getElementsByClassName('nameDiv');


    Customer.prototype.createTbl = function (para1, para2) {

        this.subtotal = 0;
        for (let item of this.items) {
            let tmpRow = cusTable0Body.insertRow();
            tmpRow.innerHTML = `<tr class="_cc${item[0]}"> 
        <td>${item[0]}</td>
        <td class="discription">${item[1]}<br>${item[2]}</td>
        <td>${item[4]}</td>
        <td class="warranty">${item[5]}</td>
        <td class="total">${item[6]}/-</td>
        </tr>`;
            this.subtotal += item[6];

        }
        this.grandTotal = this.subtotal - this._discountAmount;
        // cusTable0Body.innerHTML = _val1;
        cusTable0.tFoot.innerHTML = `<tr>
    <td id="td34" colspan="3" rowspan="4">
    <div id="qrcode"></div>
    </td>
    <td>subtotal</td>
    <td>${this.subtotal}</td>
    </tr>
    <tr>
    <td>${this._discountAmount != 0 ? "less" : "No less"}</td>
                                <td>${this._discountAmount}</td>
                                </tr>
                                <tr>
                                <td>Grand Total</td>
                                <td class="double-underline">${this.grandTotal}</td>
                                </tr>`;
        cusTable1.innerHTML = cusTable0.innerHTML;
    };

    Customer.prototype.final = function () {
        this.createTbl();
        document.getElementsByClassName("v-secondary")[1].innerHTML = document.getElementsByClassName("v-secondary")[0].innerHTML;

        this.QrData = window.btoa(JSON.stringify(this));
        document.getElementById("rowdat").value = this.QrData;
        // new QRCode(document.getElementById("qrcode"), {
        //     // text: presentCustomer.QrData,
        //     text: 'https://www.citizenit.com/',
        //     width: 50,
        //     height: 50,
        //     colorDark : '#',
        //     colorLight : "#000000",
        //     correctLevel : QRCode.CorrectLevel.H
        // });
        // todo make tag customer/office copy 
    };

    // add item to customer
    Customer.prototype.addItem = function (itemName, itemDescription, itemWarranty, itemPrice, totalItem) {

        let totalAmount = totalItem * itemPrice;
        let itemSirial = this.items.length + 1;
        // node constructor function
        let nodeElm = `<tr class="_${itemSirial}"> 
    <td>${itemSirial}</td>
    <td class="discription">${itemDescription}</td>
    <td>${totalItem}</td>
    <td class="warranty">${itemWarranty}</td>
    <td class="total">${totalAmount}/-</td>
    </tr>`;

        this.items.push([itemSirial, itemName, itemDescription, itemPrice, totalItem, itemWarranty, totalAmount, nodeElm]);
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
    // var qrcode = new QRCode("test", {
    //     text: "http://jindo.dev.naver.com/collie",
    //     width: 128,
    //     height: 128,
    //     colorDark: "#000000",
    //     colorLight: "#ffffff",
    //     correctLevel: QRCode.CorrectLevel.H
    // })
    //item constructor

    function newItem(name, price, qty, itemSirialNo) {
        this.sirial = presentCustomer.items.length + 1;
        this.name = name;
        this.price = price;
        this.qty = qty;

        this.itemSirialNo = itemSirialNo;

        presentCustomer.addItem(this.name, this.price, this.qty);
    }

    // todo this should be hidden ++ APP Script
    // const deplymentID = AKfycbwwpudyHgrwpPmM7qS2nC0xa2TsuKs1UVWEwdrpOnsWNxW48dFPadxfVyagnBrGdjSk
    var scriptURL = 'https://script.google.com/macros/s/AKfycbwwpudyHgrwpPmM7qS2nC0xa2TsuKs1UVWEwdrpOnsWNxW48dFPadxfVyagnBrGdjSk/exec'
    var fetchingForm = rawDataForm; //?? make it constant
    // const fetchingForm = document.forms['formName']

    fetchingForm.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(fetchingForm)
            })
            .then(response => alert("Thank you! your fetchingForm is submitted successfully."))
            .then(() => {
                window.location.reload();
            })
            .catch(error => console.error('Error!', error.message))
    })
    // var qrcode = new QRCode("qrcode", {
    //     text: "http://jindo.dev.naver.com/collie",
    //     width: 128,
    //     height: 128,
    //     colorDark : "#000000",
    //     colorLight : "#ffffff",
    //     correctLevel : QRCode.CorrectLevel.H
    // });





    var nayem2 = new Customer('nayem2', 'dhaka', 'Customer', '1001', '+01645545465', 1100);
    nayem2.addItem(1, 'm', '1year', 1300, 5);
    nayem2.addItem('b', 'n', '1year', 1500, 6);
    var nayem = new Customer('nayem', 'dhaka', 'Customer', '1001', '+01645545465', 1100);
    nayem.addItem(1, 'm', '1year', 1300, 5);
    nayem.addItem('b', 'n', '1year', 1500, 6);
    nayem.addItem('c', 'o', '1year', 1000, 2);
    nayem.addItem('d', 'p', '1year', 1200, 3);
    // ??// nayem.createTbl() dont uncomment this line;
    presentCustomer.final();
    // presentCustomer.final();
}, 1);