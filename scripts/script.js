let formRegister = document.formRegister;

function collection(){
    event.preventDefault()
    document.querySelector('#nameUser').innerHTML =
     formRegister.fistName.value + ' ' + formRegister.secondName.value;
    document.querySelector('#emailUser').innerHTML = formRegister.emailUser.value;
    if(formRegister.gender.value == 'man'){
        document.querySelector('#logoWoman').style.display = 'none';
        document.querySelector('#logoMan').style.display = 'block';
    }
    if(formRegister.gender.value == 'woman'){
        document.querySelector('#logoMan').style.display = 'none';
        document.querySelector('#logoWoman').style.display = 'block';
    }
    document.querySelector('#jobUser').innerHTML = formRegister.select.value;
}

function hidden(e){
    document.querySelector('#windowOnReg').style.display = 'none';
    document.querySelector('#windowOn').style.display = 'flex';
    // console.log(document.querySelector('#windowOnReg'))

}

formRegister.checkbox.addEventListener('click', function(){
    if(formRegister.checkbox.checked){
        document.querySelector('#buttonOn').removeAttribute('disabled')
    }
    else{
        document.querySelector('#buttonOn').setAttribute('disabled', true)
    }
})
formRegister.buttonRegister.addEventListener('click', collection)
formRegister.buttonRegister.addEventListener('click', hidden)
document.querySelector('#buttonOff').addEventListener('click', function(){
    document.querySelector('#windowOnReg').style.display = 'block';
    document.querySelector('#windowOn').style.display = 'none';
    formRegister.reset()
})
