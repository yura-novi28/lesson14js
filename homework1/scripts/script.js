let formMove = document.forms.formMove;
let formPlace = document.forms.formPlace;
formMove.button.addEventListener('click', function(){
    event.preventDefault()
    if(formMove.text1.value != '' && formMove.text1.value != ' '){
        formMove.text2.value = formMove.text1.value
        formMove.text1.value = ''
    }
    
})

formPlace.textPlace.addEventListener('blur', function(){
    formPlace.textPlace.placeholder = formPlace.textPlace.value
    formPlace.textPlace.value = ''
})

// console.log(formMove.button)