console.log("   _______ __  _                    __________   \r\n  / ____(_) /_(_)___ ___  ____     /  _/_  __/   \r\n / /   / / __/ /_  // _ \\/ __ \\    / /  / /      \r\n/ /___/ / /_/ / / //  __/ / / /  _/ /  / /       \r\n\\____/_/\\__/_/ /___|___/_/ /_/  /___/ /_/        \r\n   _________  / /_  __/ /_(_)___  ____  _____    \r\n  / ___/ __ \\/ / / / / __/ / __ \\/ __ \\/ ___/    \r\n (__  ) /_/ / / /_/ / /_/ / /_/ / / / (__  )     \r\n/____/\\____/_/\\__,_/\\__/_/\\____/_/ /_/____/\r\n                                              -@naye2m\r\nCopyright © 2012 - 2023 Citizen IT® solutions. All rights reserved."); // turn fist on DIPLOY
var presentCustomer;
let rawDataForm = document.forms[0];
var t1, t2, t3, t4, pCust, tmpItem = ["", "", 0, 0];

function ValidateEmail(inp) {
    return inp.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? inp : ValidateEmail(confirm("wanna give a valid mail?") ? prompt("Please enter a valid email address", "citizenit.bd+customer@gmail.com") : "citizenit.bd+customer@gmail.com");
}

function Customer(name, emailAdd = "", address = "", buyingFor = 'Customer', invoiceNumber = "", phone = 0, _discountAmount = 0) {
    //chenges in this constructor should be also modified in server side //spreadsheet//DB//codescript//

    this.name = name.toUpperCase();
    this.address = address.toUpperCase();
    this.emailAdd = ValidateEmail(emailAdd).toLowerCase();
    this.fetchingFormData = '';
    this.time = new Date();
    // this.items = new Array();
    this.items = {};
    this.itemCount = Object.keys(this.items).length;
    this.buyingFor = ""; // institutt?self?
    this.invoiceNumber = invoiceNumber ? this.invoiceNumber : ""; //code here ''this
    this._discountAmount = _discountAmount;
    this.buyingFor = buyingFor; //
    this.grandTotal = 0;
    this.subtotal = 0;
    // this.qrjs = null; 
    this.phone = phone;
    nameEle[0].innerHTML = `<p class="s14" style="padding-top: 11pt;padding-left: 16pt;text-indent: 0pt;text-align: left;">${this.buyingFor} : <span class="h4">${this.name}, ${this.address}</span><span class="s15">.</span></p>`;
    /////////////////////////////////////////////////////////////////////////////
    // this.totalAmount = items.forEach(item => {
        //     let tempAmount += item[3];
        
        // }); //need here
        //todo this._discountAmount = _discountAmount ? typeof _discountAmount === 'number' ? this.totalAmount -= _discountAmount: 2: "No discount." ; //need here
        
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
            // final
            
            
            
            // basic function 
            presentCustomer = this;

            
            // return true;
}
        //??test console.log(document.getElementsByClassName("v-secondary")[0]) ////////////////////////////////
        // document.getElementsByClassName("v-secondary")[1].innerHTML = "no text selected";
document.getElementsByClassName("v-secondary")[1].innerHTML = document.getElementsByClassName("v-secondary")[0].innerHTML;
var cusTable0 = document.getElementsByTagName("table")[0];
var cusTable1 = document.getElementsByTagName("table")[1];
var cusTable0Body = cusTable0.tBodies[0]; /////////////////////////////////////////////
var cusTableVisu = document.getElementById("visualizerTbl"); /////////////////////////////////////////////
var cusTableBodyVisu = cusTableVisu.tBodies[0]; /////////////////////////////////////////////
var nameEle = document.getElementsByClassName('nameDiv');


Customer.prototype.createTbl = function (para1, para2) {

    this.subtotal = 0;
    cusTable0Body.innerHTML = '';
    cusTableBodyVisu.innerHTML = '';
    let tmpCount = 0;
    for (let itemNam in this.items) {
        let tmpRow = cusTable0Body.insertRow();
        let tmpRowVisu = cusTableBodyVisu.insertRow();
        item = this.items[itemNam];
        tmpCount++;
        tmpRow.innerHTML = `<tr class="_cc${itemNam}"> 
        <td>${tmpCount}</td>
        <td class="discription">${item[1]}<br><span class="pdis silent x-small disc">${item[2]}</span></td>
        <td>${item[4]}</td>
        <td class="warranty">${item[5]}</td>
        <td class="total">${item[6]}/-</td>
        </tr>`;
        tmpRowVisu.innerHTML = `<tr class="_cc${itemNam}">
        <td class="name">${item[1]}</td>
        <td class="dis">${item[2]}</td>
        <td class="war">${item[5]}</td>
        <td class="itemUnitPrice">${item[3]}</td>
        <td class="qty">${item[4]}</td>
        <td class="total">${item[6]}</td>
        <td class="action"><button onclick="console.log(presentCustomer.deleteItem('${item[1]}'));">Remove</button></td>
        </tr>`;
        // cusTable0Body.insertRow(tmpRow);
        this.subtotal += item[6];
        // console.log(item);//xheking item is ok
    }
    tmpCount = 0;
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
                                <td>${this._discountAmount == 0 ? "-" : this._discountAmount}</td>
                                </tr>
                                <tr>
                                <td>Grand Total</td>
                                <td class="double-underline">${this.grandTotal}</td>
                                </tr>`;
    cusTable1.innerHTML = cusTable0.innerHTML;
    document.getElementById("visTot").innerText = this.grandTotal;
};

Customer.prototype.deleteItem = function (paraItem) {

    if (this.items[paraItem]) {
        // this.items.splice([paraItem]);
        delete this.items[paraItem];
        this.itemCount = Object.keys(this.items).length;
        console.log(this.items[paraItem]);
        this.final();
        return paraItem + " deleted";
    } else {
        alert(paraItem + "is not a valid");
        return paraItem + " isn't available";
    }

}
// Customer.prototype.deleteFromBtn = function(btn:HTMLElement) {
Customer.prototype.deleteFromBtn = function (btn) {
    console.log(btn);
    let tmp = [...btn.classList];
    this.deleteItem(tmp[0].substr(3));
}
Customer.prototype.final = function () {
    let pdis = document.getElementsByClassName("pdis");
    // for (let i = 0; i = pdis.length; i++) {
    //     pdis[i].classList.add("hide");
    // }
    
    this.createTbl();
    if (this.itemCount > 7) {
        for (let i = 0; i < pdis.length; i++) {
            pdis[i].classList.add("hide");
            // pdis[i].classList.add("hide");
        }
        // console.log("a");
    }else{
        // console.log("b", this.itemCount);
        for (let i = 0; i < pdis.length; i++) {
            pdis[i].classList.remove("hide");
            // pdis[i].classList.add("hide");
        }
    }
    document.getElementsByClassName("v-secondary")[1].innerHTML = document.getElementsByClassName("v-secondary")[0].innerHTML;

    // ** test t1 start ////////////////////
    // let tmpfetchingFormDat = {
    //     ...this
    // };
    // // tmpfetchingFormDat.items.forEach(function (val) {
    // //     val.pop()
    // // });
    // delete tmpfetchingFormDat.fetchingFormData;
    // // //??test console.log(tmpfetchingFormDat);
    //** test t1 end * ///////////////////////////
    let tmpfetchingFormDat = {
        ...this
    };
    tmpfetchingFormDat.options = "var='beta'&";
    tmpfetchingFormDat.GSoptions = ["Logger.log('ok')",{op:"scopes"}];
    delete tmpfetchingFormDat.fetchingFormData;
    tmpfetchingFormDat.items = Object.values(presentCustomer.items);
    tmpfetchingFormDat.options = [true,"v1", "0401300723"];
    // console.log(Object.keys(tmpfetchingFormDat));
    tmpfetchingFormDat = Object.values(tmpfetchingFormDat);
    //??["name","address","emailAdd","time","items","itemCount","buyingFor","invoiceNumber","_discountAmount","grandTotal","subtotal","phone","options"]
    //** test t1 block end * ///////////////////////////
    // //`todo modifier need here
    // /////////////////////////////////////////////////////
    // let tmp = { ...tmpfetchingFormDat };
    // t2 = [];
    // for (let key in tmp) {
        //     t2.push(tmp[key]);
        // }
    // //??testconsole.log("aa", tmpfetchingFormDat);
    // //!!  on server side
    // tmpfetchingFormDat = {};
    //  t1 = ['name','address','emailAdd',  'time', 'items', 'itemCount', 'buyingFor', 'invoiceNumber', '_discountAmount', 'grandTotal', 'subtotal', 'phone']
    t1 = ['name', 'address', 'emailAdd', 'time', 'items', 'itemCount', 'buyingFor', 'invoiceNumber', '_discountAmount', 'grandTotal', 'subtotal', 'phone', 'options', 'GSoptions']
    var j = [... tmpfetchingFormDat];
    //** for (let index = 0; index < t1.length; index++) {
    //**        tmpfetchingFormDat[t1[index]] = j[index];
    //**    }
    //**    console.log(tmpfetchingFormDat);
    let [namesORkeys,valueArr,tmpVar] = [t1,j,{}];
    for (let i = 0; i < namesORkeys.length; i++) {
        tmpVar[namesORkeys[i]] = valueArr[i];
    }
    tmpfetchingFormDat = {...tmpVar};
    
        // ////////////////////////////////////////////////////////////
    //??test console.log("tmp", tmpfetchingFormDat)
    tmpfetchingFormDat = JSON.stringify(tmpfetchingFormDat);
    //??testconsole.log(tmpfetchingFormDat);
    this.fetchingFormData = window.btoa(tmpfetchingFormDat);
    // document.getElementById("rowdat").value = 'bAsEbin' +  this.fetchingFormData ;
    
    // console.log('fetcfh dat',tmpfetchingFormDat);
    document.getElementById("rowdat").value = this.fetchingFormData;
    // todo make tag customer/office copy 
};

// add item to customer
Customer.prototype.addItem = function (itemName, itemDescription, itemWarranty, itemPrice, totalItem) {
    if (this.items[itemName]) {
        // console.log(1, this.itemCount);
        alert(itemName + ' is already added');
        return "already added";
    } else if (this.itemCount > 14) {

        
        
        alert(`too many!${this.itemCount} items`)
        return "overflow too mutch item ";

        // for (let i = 0; i < pdis.length; i++) {
        //     pdis[i].classList.add("hide");
        //     // pdis[i].classList.add("hide");
        // }
        console.log(2, this.itemCount)
    }
    //  else if (this.itemCount <= 7 ) {
    //     console.log(3, this.itemCount);
    //     for (let i = 0; i < pdis.length; i++) {
    //         pdis[i].classList.remove("hide");
    //         // pdis[i].classList.add("hide");
    //     }

    // } else {
    //     console.log(4, this.itemCount)
    // }
    let totalAmount = totalItem * itemPrice;
    let itemSirial = this.itemCount + 1;
    // console.log(itemSirial);
    // node constructor function
    // let nodeElm = `<tr class="_${itemSirial}"> 
    // <td>${itemSirial}</td>
    // <td class="discription">${itemDescription}</td>
    // <td>${totalItem}</td>
    // <td class="warranty">${itemWarranty}</td>
    // <td class="total">${totalAmount}/-</td>
    // </tr>`;

    this.items[itemName] = [itemSirial, itemName, itemDescription, itemPrice, totalItem, itemWarranty, totalAmount];
    this.itemCount = Object.keys(this.items).length;

    // this.itemCount++;
    this.final();

}

// generate QR code

// newCustomer.prototype.generateQrCode = function() {
// var qr = new QRCode(document.getElementById("qrcode"), {
// text: this.fetchingFormData,
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
//** */ // const deplymentID = AKfycbxJ9vxbdHSoMvhr9ahLPbkdqerSsJF-IwtMQg2RnFWznx6OetZKLkJVhJhVeP3xqgUU
//** var scriptURL = 'https://script.google.com/macros/s/AKfycbxJ9vxbdHSoMvhr9ahLPbkdqerSsJF-IwtMQg2RnFWznx6OetZKLkJVhJhVeP3xqgUU/exec'
//** const deplymentID = AKfycbwwpudyHgrwpPmM7qS2nC0xa2TsuKs1UVWEwdrpOnsWNxW48dFPadxfVyagnBrGdjSk
//** var scriptURL = 'https://script.google.com/macros/s/AKfycbwwpudyHgrwpPmM7qS2nC0xa2TsuKs1UVWEwdrpOnsWNxW48dFPadxfVyagnBrGdjSk/exec'//2nd deployment
//** var scriptURL = 'https://script.google.com/macros/s/AKfycbwNZNyairQJqPfaydWe6RjvarBgYDX3isggiSSByRd0RZVxznkUYO8IkIUAVwC1_TM/exec'//3rd deployment
//** var scriptURL = 'https://script.google.com/macros/s/AKfycbxBx4pqfK2TQtxPc9y0oon6jMnf2Z3eW4Nr8Z-4Rh213lkf-_YR4S4MlHxwCktDcSBk/exec' //4th deployment
var scriptURL = 'https://script.google.com/macros/s/AKfycbwuuHmci7IXs2yZznsTOA37hduR7fAoa2aPXn-r57yvMuNlX5f7erdJs-4jmhqOZ-Co/exec' //5th deployment
// var scriptURL = 'https://script.google.com/macros/s/AKfycbwVmBDq5ymZXacyfRkBD0C_Pyokmcg1rIQY2lHXI_wi9nEBOhM6tUrwIqmaUjy7OyNp/exec'//v2 1st deployment
const fetchingForm = rawDataForm; //?? make it constant
// const fetchingForm = document.forms['formName']
fetchingForm.addEventListener('submit', e => {
    e.preventDefault()
    //** fetch(scriptURL, {
    //**         method: 'POST',
    //**         body: new FormData(fetchingForm),
    //**         // headers: {
    //**         //     "Content-Type": "application/json",
    //**         //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //**         //   }
    //**     })
    //**     .then(response => alert("Thank you! your fetchingForm is submitted successfully."))
    //**     // .then(response => console.log(response))
    //**     // .then(() => {
    //**     //     window.location.reload();
    //**     // })
    //**     .catch(error => console.error('Error!', error.message))
    logJSONData(); //cheked file
})
var tt, tmpda;
async function logJSONData() {
    const ttr = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(fetchingForm)
    })
        // .then(response =>  response.json())
        .then(response => {
            tt = response;
            console.log('ok!', response);
            return response.json()
        }, err => console.error("logjsonData line 7 then1", err))
        .then(response => {
            tt = response;
            tmpda = { ...response };
            console.log('hi', response);
            return response
        }, err => console.error("logjsonData line 7 then1", err))
        //** .then(r2 => console.log('ok!',tt = r2),err => console.error("logjsonData line 8 then2", err))
        //** .then(j => {
        //**     console.log(j);
        //**     return window.print
        //** }, err => console.error("logjsonData line9 then3", err))
        .catch(err => console.error("logjsonData line10 then4", err))
        .finally(() => { alert("Complete"); console.log(tmpda); });

    //* // const response = await fetch(scriptURL, {
    // **    method: 'POST',
    // **    body: new FormData(fetchingForm)
    // **})
    //** */ .then(response => console.log('ok!', response))
    //** /////// const response = await fetch(scriptURL, {
    //** */     method: 'POST',
    //** */     body: new FormData(fetchingForm)
    //** */ })
    //** */ .then(response => console.log('ok!', response))
    //** */ .catch(err => console.error('error', err.message));
    //** */ const jsonData = await response;
    //** */ console.log(jsonData);//not accu
    //** */     // fetch(scriptURL, {
    // **  //     method: 'POST',
    // **  //     body: new FormData(fetchingForm)
    // **  // })
    // **  // .then(response => alert("Thank you! your fetchingForm is submitted successfully."))
    // **  // .then(response => console.log(response))
    // **  // // .then(() => {
    // **  // //     window.location.reload();
    // **  // // })
    // **  // .catch(error => console.error('Error!', error.message))
}

// var qrcode = new QRCode("qrcode", {
//     text: "http://jindo.dev.naver.com/collie",
//     width: 128,
//     height: 128,
//     colorDark : "#000000",
//     colorLight : "#ffffff",
//     correctLevel : QRCode.CorrectLevel.H
// });


//** /////////// HTML    ST///////////////////
function addCust() {
    try {
        var [...tA] = [...document.getElementsByClassName("custConstractor")];
        console.log(tA = tA.map(e => e.value));
        let [cusName, address, email, phone, custype] = tA;
        console.log(tA);
        // console.log(cusName.value)
        console.log(cusName, email, address, custype, "", phone);
        // if 
        pCust = new Customer(cusName, email, address, custype, "", phone);

        // let tA = [...document.getElementsByClassName("custConstractor")]
        // tA.forEach((e) => console.log(e.value))
        return true;
    } catch (e) {
        alert(e.message);
        alert("check everything.");
        return false;
    }
}
function loadSecPage() {
    document.getElementById("custInp1").classList.add("hide")

}

function loadpage(inp) {

    switch (inp) {
        case 2:
            document.getElementById("custInp1").classList.add("hide");
            document.getElementById("custInp2").classList.remove("hide");
            document.getElementById("custInp3").classList.add("hide");
            document.getElementById("cp2in").innerHTML = `<span>Name:${presentCustomer.name} </span><span>Address: ${presentCustomer.address}</span><span>E-mail: ${presentCustomer.emailAdd}</span><span>Phone: ${presentCustomer.phone}</span>`
            // appendChild(document.createElement("span").textContent(`Name: ${pCust.name}`));
            break;
        case 3:
            document.getElementById("custInp1").classList.add("hide");
            document.getElementById("custInp2").classList.add("hide");
            document.getElementById("custInp3").classList.remove("hide");
            break;
        case 1:
        // pCust = new Customer();
        default:
            document.getElementById("custInp1").classList.remove("hide");
            document.getElementById("custInp2").classList.add("hide");
            document.getElementById("custInp3").classList.add("hide");
            break;
    }
}
//** /////////// HTML    END///////////////////
////////////////////////////////
////////////////////////////////
function main() {
    presentCustomer.final();
    loadpage(1);
}
////////////////////////////////

var nayem2 = new Customer('nayem2', "dfsx@fh.com", 'dhaka', 'Customer', '1001', '+01645545465', 1100);
nayem2.addItem("fkjakds", 'm', '1year', 1300, 5);
nayem2.addItem('b', 'n', '1year', 1500, 6);
var nayem = new Customer('nayem', "sfa@il.com", 'dhaka', 'Customer', '1001', '+01645545465', 1100);
nayem.addItem("fja", 'm', '1year', 1300, 5);
nayem.addItem('b', 'n', '1year', 1500, 6);
nayem.addItem('c', 'o', '1year', 1000, 2);
nayem.addItem('d', 'p', '1year', 1200, 3);
nayem.addItem("f0ja", 'm', '1year', 1300, 5);
nayem.addItem('b0', 'n', '1year', 1500, 6);
nayem.addItem('c0', 'o', '1year', 1000, 2);
nayem.addItem('d0', 'p', '1year', 1200, 3);
// ??// nayem.createTbl() dont uncomment this line;
// presentCustomer.final();

// tmp household
//**  t1 = [], t2 = [];
//**  for (const key in t3) {
//**      t1.push(t3[key]);
//**      t2.push(key);
//**  }
main();