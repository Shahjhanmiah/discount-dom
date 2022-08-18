document .getElementById('btn-submit').addEventListener('click',function(){
    console.log('btn-submit click')

    const emailField= document.getElementById('user-email');
    const email = emailField . value;
    console.log('email');


    const passwordElement= document.getElementById('user-password');
    const password= passwordElement .value;
    console.log('user-password');

    if(email === 'mdshahjhan478877@gmail.com' && password ==='Dom'){
        window.location.href='bank.html';
        //console.log('valid user')
    }
    else{
         alert('toke ami tejio!! shontab krlam');
         //console.log('invalid user')
    }
})