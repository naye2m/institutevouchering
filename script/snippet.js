function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
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
function itemObject (dispm, pripm, quapm, ...ArrayPM ){
    this.items = {
        serialNo: customer,
         discription: dispm,
         price: pripm, 
         quantity: quapm, 
         total: pripm * quapm,
         others : ArrayPM
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
