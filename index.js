console.log('Form Validation using Regular Expressions');

let namee = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let validName = false;
 let validEmail = false;
 let validPhone = false;
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

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let getName = namee.value;
    let getEmail = email.value;
    let getPhone = phone.value;

    // console.log(getName, getEmail,getPhone)
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj= []
    }else{
        notesObj = JSON.parse(notes)
    }
    console.log(getEmail)
        notesObj.push(getName,getEmail,getPhone)
        namee.value = "";
        email.value = '';
        phone.value = '';
        localStorage.setItem("notes", JSON.stringify(notesObj))
        console.log(notesObj.getEmail)
    
    let msgbox = document.getElementById('msgBox');
    if(validName && validEmail && validPhone){
        msgBox.innerHTML = ` <div class="alert alert-success alert-dismissible fade show" id="success" role="alert">
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
        msgbox.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" id="failure" role="alert">
                                <strong>Error!</strong> Your form has not been submitted due to Error.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                             </div>`;
                             setTimeout(()=>{
                                msgBox.innerHTML ='';
                            },2000)
        // failure.classList.add('show');
        // success.classList.remove('show');

    }

    
})
showData()
function showData(){

let tableBody = document.getElementById('tableBody');
let notes = localStorage.getItem('notes');
if(notes == null){
    notesObj= []
}else{
    notesObj = JSON.parse(notes)
}
let string = '';
notesObj.forEach((element,index)=>{
    string += `
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${element.getName}</td>
      <td>${element.getEmail}</td>
      <td>${element.getPhone}</td>
    </tr>
  `
  console.log(element.getEmail)
  tableBody.innerHTML = string;
})
}
showData()