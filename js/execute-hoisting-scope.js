/* 
    Ada 2 fase pada Execution Context (pada saat program di jalankan)
    1. Fase Creation
    2. Fase Execution

    Test Visualize at http://pythontutor.com/visualize.html#mode=edit
*/

//console.log(nama);// execute-hoisting-scope.js:7 Uncaught ReferenceError: nama is not defined
//var nama = "Rifqi";// execute-hoisting-scope.js:7 undefined
// jika di balik,
// var nama = "Rifqi"
// console.log(nama);//sukses

/*
    pertama pada,
1.  creation phase pada global context
    akan mengecheck keyword nama variable, function seteleh itu
    akan membuat sebuah vaariabl atau function jika ada , dengan di isi berupa :
    nama var = undefined
    nama function = fn() atau tulisan nama function nya itu sendiri
    dalam hal ini disebut hoisting
    selain itu akan membuatkan :
    window = global object
    this = window
2.  execution phase
*/

// contoh :
var nama = 'Rifqi';
var username = '@rifqiabrory';
function cetakURL(username) {
    var url = 'http://instagram.com/';
    return url + username;
}

console.log(cetakURL(username));
// Result : http://pythontutor.com/visualize.html#code=var%20nama%20%3D%20'Rifqi'%3B%0Avar%20username%20%3D%20'%40rifqiabrory'%3B%0Afunction%20cetakURL%28username%29%20%7B%0A%20%20%20%20var%20url%20%3D%20'http%3A//instagram.com/'%3B%0A%20%20%20%20return%20url%20%2B%20username%3B%0A%7D%0A%0Aconsole.log%28cetakURL%28username%29%29%3B&cumulative=false&curInstr=6&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
