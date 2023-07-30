function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// for (var i = 0; i < 100; i++) {
//     console.log(`<p></p>`)
var cusObj = {
    name: '',
    address: '',
    itemObject: {
        name: '',
        price: 0,
        quantity: 0,
        total: this.price * this.quantity
    }
}
// var itemObject = (dispm, pripm, quapm, ...ArrayPM ) => {
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

var cusObjt = {
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
    var response = await fetch(url, {
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
let object = {
    a: 1,
    b: 2,
    c: 3
};

for (var property in object) {
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

var myArray = [1, 2, 3, 4, 5];

function removeValue(value, index, arr) {
    // If the value at the current array index matches the specified value (2)
    if (value === 2) {
        // Removes the value from the original array
        arr.splice(index, 1);
        return true;
    }
    return false;
}

// Pass the removeValue function into the filter function to return the specified value
var x = myArray.filter(removeValue);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);


//?? ///////////////////////////////////////////////////////////////////////////


var myArray = [1, 2, 3, 4, 5];

var index = myArray.indexOf(2);

var x = myArray.splice([], 1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);



//?? ///////////////////////////////////////////////////////////////////////////
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
    //   alert("Valid email address!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
    //   alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }
//?? ///////////////////////////////////////////////////////////////////////////