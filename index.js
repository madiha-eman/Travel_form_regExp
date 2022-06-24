console.log('Form Validation using Regular Expressions');

let namee = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let address = document.getElementById('address');

let validName = false;
 let validEmail = false;
 let validPhone = false;
 let validAddress = false;
// failure.classList.add('d-none')
// success.classList.add('d-none')

namee.addEventListener('blur', ()=>{
    // console.log('name is blurred')
    // validate name here 
    let regex = /^[a-zA-Z]([0-9a-zA-Z]{2,10})$/;
    let str = namee.value;
    // console.log(str);
    if(regex.test(str)){
        console.log('matched');
        namee.classList.remove('is-invalid');
        validName = true;
    }
    else{
        // console.log('not matched');
        namee.classList.add('is-invalid');
        validName = false;

    }
})

email.addEventListener('blur', ()=>{
    // console.log('email is blurred');
     // validate name here 
     let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
     let str = email.value;
    //  console.log(regex, str);
     if(regex.test(str)){
        //  console.log('matched');
         email.classList.remove('is-invalid');
         validEmail= true
     }
     else{
        //  console.log('not matched');
         email.classList.add('is-invalid');
         validEmail= false;

     }
})

phone.addEventListener('blur', ()=>{
    // console.log('phone is blurred');
     // validate phone here 
     let regex = /^([0-9]{10})$/;
     let str = phone.value;
    //  console.log(regex, str);
     if(regex.test(str)){
        //  console.log('phone matched');
         phone.classList.remove('is-invalid');
         validPhone = true;
     }
     else{
        //  console.log('phone not matched');
         phone.classList.add('is-invalid');
         validPhone = false;

     }
})
address.addEventListener('blur', ()=>{
    // console.log('phone is blurred');
     // validate phone here 
     let regex = /^([a-z0-9A-Z]+){5,20}$/;
     let str = address.value;
     console.log(regex, str);
     if(regex.test(str)){
         console.log('address matched');
         address.classList.remove('is-invalid');
         validAddress = true;
     }
     else{
         console.log('address not matched');
         address.classList.add('is-invalid');
         validAddress = false;
     }
})

let forms;
class Form{
    constructor(name,email){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address
    }
}
let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let phone = document.getElementById('phone').value;
let address = document.getElementById('address').value;


     forms = new Form(name,email,phone,address)
    let records = new Array();
    records = JSON.parse(localStorage.getItem('tableBody'))? JSON.parse(localStorage.getItem('tableBody')) : [];
       records.push({
        'name': name,
        'email': email,
        'phone': phone,
        'address': address
       })
        name.value = '';
        email.value = '';
        phone.value = '';
        address.value = '';
        localStorage.setItem('tableBody' ,JSON.stringify(records))
    let msgbox = document.getElementById('msgBox');
    if(validName && validEmail && validPhone && validAddress){
        msgBox.innerHTML += ` <div class="alert alert-success alert-dismissible fade show" id="success" role="alert">
                                <strong>SuccessFully!</strong> Your form has been submitted.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                             </div>`
        // success.classList.add('show');
        // failure.classList.remove('show');
        // console.log(validEmail,validName,validPhone,msgBox)
        setTimeout(()=>{
            msgBox.innerHTML ='';
        },2000)

    }
    else{
        msgbox.innerHTML += ` <div class="alert alert-danger alert-dismissible fade show" id="failure" role="alert">
                                <strong>Error!</strong> Your form has not been submitted due to Error.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                             </div>`;
                             setTimeout(()=>{
                                msgBox.innerHTML ='';
                            },2000)
        // failure.classList.add('show');
        // success.classList.remove('show');
    }
    e.preventDefault();  
})
showData()
function showData(){
records = localStorage.getItem('tableBody')
if(records){
    records = JSON.parse(localStorage.getItem('tableBody'))
let string = '';
records.forEach(function(forms,index){
    string += `
    <tr>
      <td>${forms.name}</td>
      <td>${forms.email}</td>
      <td>${forms.phone}</td>
      <td>${forms.address}</td>

    </tr>
  `
  tableBody.innerHTML = string;
console.log(forms.email)
// })
})
}
}


