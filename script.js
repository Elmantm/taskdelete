



// let listUl = document.getElementById('list');
//let list = [];



//function todo(){
    //let inp = document.getElementById('inp');

   // list.push(inp.value);

   // let data = '';
   // for(let i = 0; i<list.length; i++){
       // data += `<li class="list-group-item d-flex justify-content-between">${list[i]} <button onclick="Delete(${i})" class="btn btn-danger btn-sm">Delete</button></li>`;
 //   }
//}//




let list = [];
let listUl = document.getElementById('list');

function todo() {
    let inp = document.getElementById('inp');
    let value = inp.value;

    if (value !== "") {    list.push(value);Display();}
     else { alert("bosdur");} 
}

function Delete(inp) {
    list.splice(inp);
    Display();
}

function Display() {
    let data = "";
    for (let i = 0; i < list.length; i++) {
        data += `<li class="list-group-item d-flex justify-content-between">${list[i]} <button onclick="Delete(${i})" class="btn btn-danger btn-sm">Delete</button></li>`;
    }

    listUl.innerHTML = data;
}