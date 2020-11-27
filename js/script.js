


/* 3. this part of the code set focus on first field */ 

    document.querySelector('#name').focus();

/* 4  this part of the code adds text field in case if sb has other job */ 

    let dropDown = document.querySelector('#title');
    let fieldset1 = document.getElementsByTagName("FIELDSET")[0]; 
    document.querySelector('#other-title2').style.display="none"; 
 

    dropDown.addEventListener('change',()=>{
        let text1 = document.createElement("textarea");
        text1.id = "other-title";
        text1.placeholder = "Your Job Role "
        text1.style.display ="flex"; 
        text1.style.width ="100%";
        
        if(dropDown.value==="other"){
            fieldset1.appendChild(text1); 
        }else{
            document.querySelector('#other-title').remove(); 
        }
    })

/* 5. this part of the code changes t- shirt info section*/ 

    let colorNames=['Cornflower Blue (JS Puns shirt only)','Dark Slate Grey (JS Puns shirt only)','Gold (JS Puns shirt only)','Tomato (I ♥ JS shirt only)','Steel Blue (I ♥ JS shirt only)','Dim Grey (I ♥ JS shirt only)']
    let design = document.querySelector('#design');
    let color = document.querySelector('#color');
    
    let changes = () =>{
        if(design.value ==="Select Theme"){
            color.firstElementChild.textContent="Please select a T-shirt theme";
            for(let i=0; i <color.children.length; i++){
                color.style.display="none";
                color.previousElementSibling.style.display="none";
                color.children[i].textContent="Please select a T-shirt theme";
                color.children[i].style.visibility ="hidden";
            }
        }
    }
    changes();
  
    design.addEventListener("change", ()=>{
        
        for(let i=0; i <color.children.length; i++){
            color.children[i].textContent = colorNames[i];
            color.children[i].style.visibility ="visible";
        }

        switch(design.value){

            case 'js puns':
                color.style.display="";
                color.previousElementSibling.style.display="";
                for(let i=3; i <color.children.length; i++){
                    color.children[i].style.display ="none";
                }
                for(let i=0; i <=2; i++){
                    color.children[i].style.display ="block";
                }
            break;

            case 'heart js':
                color.style.display="";
                color.previousElementSibling.style.display="";
                color.firstElementChild.textContent=colorNames[3]; 
                for(let i=3; i <color.children.length; i++){
                    color.children[i].style.display ="block";
                }
                for(let i=0; i <=2; i++){
                    color.children[i].style.display ="none";
                }
            break;
        }

        changes();
    
    });

/* 6. This part of the code makes some parts of drop down menu disable to click and adds counter which counts total amount of money*/

    let activities = document.querySelector('.activities');
    let tuesday1 = document.querySelectorAll('[data-day-and-time="Tuesday 1pm-4pm"]');
    let tuesday2 = document.querySelectorAll('[data-day-and-time="Tuesday 9am-12pm"]')
   
    let marker =(day,day2)=> {
        day.addEventListener('change', (e)=>{
            if(e.target.checked===true){
                day2.disabled="true"; 
                day2.parentNode.style.color="gray"; 
            }else{
                day2.disabled="";
                day2.parentNode.style.color="black"; 
            }
        })
    }

    marker(tuesday1[0],tuesday1[1]);
    marker(tuesday1[1],tuesday1[0]);
    marker(tuesday2[0],tuesday2[1]);
    marker(tuesday2[1],tuesday2[0]);    

    let cash = 0;
    let par = document.createElement("p");
    activities.appendChild(par); 

    activities.addEventListener('change',(e)=>{
        if(e.target.checked===true){
            cash += parseInt(e.target.dataset.cost); 
        }else {
            cash -=  parseInt(e.target.dataset.cost);
        }
        par.textContent= `Total: $${cash}`; 
    })

    
/* 7  Payment section */ 

    let payment = document.querySelector('#payment'); 
    let paypal = document.querySelector('#paypal'); 
    let bitcoin = document.querySelector('#bitcoin');
    let creditCart = document.querySelector('#credit-card')
    payment.children[0].disabled=true; 
    payment.children[1].selected=true; 
   
    paypal.style.display="none"; 
    bitcoin.style.display="none"; 

    

    payment.addEventListener("change",()=>{

        if(payment.value==="credit card"){
            paypal.style.display="none"; 
            bitcoin.style.display="none";
            creditCart.style.display=""; 
        }else if(payment.value==="paypal"){
            paypal.style.display=""; 
            bitcoin.style.display="none"; 
            creditCart.style.display="none";
            message.style.display="none"; /* works becouse of hoisting Extra credit */ 
        } else if(payment.value==="bitcoin"){
            paypal.style.display="none"; 
            bitcoin.style.display=""; 
            creditCart.style.display="none"; 
            message.style.display="none"; /* works becouse of hoisting  Extra credit*/ 
        }
    })

/* 8 */ 
    
const submit = document.getElementsByTagName("BUTTON")[0]; 
let checked = 0;
let checkboxes = document.querySelectorAll('[type="checkbox"]');
var remail= /\S+@\S+\.\S+/;
var recard = /^\d{13}(\d{16})?$/; 
var rezip = /^\d{5}/; 
var reccv = /^\d{3}/;

let header = document.querySelector('header'); 
let email = document.querySelector('#mail');
let ccardNumber = document.querySelector('#cc-num'); 
let zipCode = document.querySelector('#zip'); 
let cvv = document.querySelector('#cvv'); 




submit.addEventListener('click',(e)=>{

    /* function tests regular expression if they are true and ads some style using dom traversal */
    let validate=(thing,re,bool)=>{

        if(re.test(thing.value)===false&&payment.value==="credit card"){
            thing.previousElementSibling.style.color="red";
            thing.style.border="1px solid red"; 
            e.preventDefault();
        }else{
            thing.previousElementSibling.style.color="";
            thing.style.border="";
        }
    
    } 

    

    validate(cvv,reccv);
    validate(zipCode,rezip);
    validate(ccardNumber,recard);
    validate(email,remail);

    if(document.querySelector('#name').value ==""){
       
        document.querySelector('#name').style.border="1px solid red";
        document.querySelector('#name').previousElementSibling.style.color="red";
        e.preventDefault();
    }else{
        document.querySelector('#name').style.border="";
        document.querySelector('#name').previousElementSibling.style.color="";
    }


    for(let i=0; i< checkboxes.length; i++){
        
        if(checkboxes[i].checked===true){
            checked ++;
        }
    }
    if(checked===0){
        activities.children[0].style.color ="red";
        e.preventDefault();
    }else{
        activities.children[0].style.color ="";
    }
    
    /* EXTRA CREDIT*/
    let message2 = document.querySelector('#message2')
    let messagetext = document.querySelector('#message4')
    
    if(ccardNumber.value==="" && payment.value==="credit card"){
        message.style.display="";
        message2.innerHTML="Please enter a credit card number."; 
    }
    if(email.value===""){
        message3.style.display="";
        messagetext.innerHTML="Please enter a email.";
    }


})


/* Extra Credit */ 

/*adding messages and its style*/
let message = document.createElement('div');
header.appendChild(message);
message.style.display="none"
message.insertAdjacentHTML('beforeend','<p id="message2"> </p>')    
message.style.position="fixed"; 
message.style.top="20px"; 
message.style.left= "31%"; 
message.style.width="500px";
message.style.height="50px";
message.style.padding="0 20px 0 20px"; 
message.style.margin="30px 0"; 
message.style.background="#73A5E5"; 
message.style.border="1px solid red"; 

let message3 = document.createElement('div');
header.appendChild(message3);
message3.style.display="none"
message3.insertAdjacentHTML('beforeend','<p id="message4"> </p>')    
message3.style.position="fixed"; 
message3.style.top="80px"; 
message3.style.margin="auto"
message3.style.left= "31%"; 
message3.style.width="500px";
message3.style.height="50px";
message3.style.padding="0 20px 0 20px"; 
message3.style.margin="30px 0";
message3.style.background="#73A5E5"; 
message3.style.border="1px solid red"; 


/* listeners */
ccardNumber.addEventListener('keyup',()=>{

    if(ccardNumber.value.length<12){
        message.style.display=""
        message2.innerHTML="Please enter a number that is between 13 and 16 digits long."
    }
    if(ccardNumber.value.length>=12){
        message.style.display="none"
    }
});

email.addEventListener('keyup',()=>{
    let messagetext = document.querySelector('#message4')
    if(remail.test(email.value)===false){
        message3.style.display="";
        messagetext.innerHTML="Wrong email"; 
    }
    if(remail.test(email.value)===true){
        message3.style.display="none"; 
    }
});