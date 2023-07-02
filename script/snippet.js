function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// for (var i = 0; i < 100; i++) {
//     console.log(`<p></p>`)
const cusObj = {
    name: '',
    address: '',
    itemObject: {
        name: '',
        price: 0,
        quantity: 0,
        total: this.price * this.quantity
    }
}
// const itemObject = (dispm, pripm, quapm, ...ArrayPM ) => {
//     this.items = {
//          discription: despm,
//          price: pripm, 
//          quantity: quapm, 
//          total: pripm * quapm,
//          others : ArrayPM
//         }
// }
function itemObject(dispm, pripm, quapm, ...ArrayPM) {
    this.items = {
        serialNo: customer,
        discription: dispm,
        price: pripm,
        quantity: quapm,
        total: pripm * quapm,
        others: ArrayPM
    }
}

const cusObjt = {
    name: '',
    age: 0,
    address: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    itemObject: {
        name: '',
        price: 0,
        quantity: 0,
        total: this.price * this.quantity
    }
}

// var str = '{"hello":"world"}';
// try {
//   var obj = JSON.parse(str); // this is how you parse a string into JSON 
//   document.body.innerHTML += obj.hello;
// } catch (ex) {
//   console.error(ex);
// }
// ! var str = '{"hello":"world"}';
// ? var str = '{"hello":"world"}';
// todo var str = '{"hello":"world"}';
// * var str = '{"hello":"world"}';
// // var str = '{"hello":"world"}';
// ?? ///////////////////////////////////////////////////////
// Example POST method implementation:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", {
    answer: 42
}).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
});
//?? ///////////////////////////////////////////////////////////////////////////
let object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
//?? ///////////////////////////////////////////////////////////////////////////
function copyFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
//?? ///////////////////////////////////////////////////////////////////////////


    fetch("data.json").then(i=>i.json()).then(i=>{
        for( let j in i){
            console.log(j, i[j]);
        }
    });

//?? ///////////////////////////////////////////////////////////////////////////

//?? ///////////////////////////////////////////////////////////////////////////