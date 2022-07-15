const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formType = form.classList.value
    if(formType == 'formChangePass'){
        if(checkValuesChangePass()){
            e.target.submit()
        }
    }else if(formType == 'formRegister'){
        if(checkValuesRegister()){
            e.target.submit()
        }
    }
})

// Validation functions
function shortName(name) {
    if(name.length < 2){
        Swal.fire({
            iconColor: '#ffc533',
            color: '#d4cbb5',
            background: '#23221f',
            icon: 'error',
            title: 'Nome muito pequeno!',
            text: 'O nome deve conter no mínimo 2 caracteres.',
            timer: 3000,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
            }
        })
        return true
    }
    return false
}

function shortEmail(email) {
    if(email.length  < 11){
        Swal.fire({
            iconColor: '#ffc533',
            color: '#d4cbb5',
            background: '#23221f',
            icon: 'error',
            title: 'Email muito pequeno!',
            text: 'O email deve conter no mínimo 11 caracteres.',
            timer: 3000,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
            }
        })
        return true
    }
    return false
}

function numberExist(email) {
    
}

function differentPass(pass, confirmPass) {
    if(pass != confirmPass){
        Swal.fire({
            iconColor: '#ffc533',
            color: '#d4cbb5',
            background: '#23221f',
            icon: 'error',
            title: 'Senhas diferentes!',
            text: 'As novas senhas inseridas não são iguais.',
            timer: 3000,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
            }
        })
        return true
    }
    return false
}

function longPass(pass){
    if(pass.length > 10){
        Swal.fire({
            iconColor: '#ffc533',
            color: '#d4cbb5',
            background: '#23221f',
            icon: 'error',
            title: 'Senha muito longa!',
            text: 'A senha deve conter entre 6 a 10 caracteres.',
            timer: 3000,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
            }
        })
        return true
    }
    return false
}

function weakPass(pass) {
    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{0,10}$/

    if (!regex.exec(pass)){
        Swal.fire({
            iconColor: '#ffc533',
            color: '#d4cbb5',
            background: '#23221f',
            icon: 'error',
            title: 'Senha fraca!',
            text: 'A senha deve conter entre 6 a 10 caracteres com pelo menos 1 letra maiúsula e 1 minúscula, 1 numero e 1 caractere especial.',
            timer: 3000,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
            }
        })
        return true
    }
    return false
}

// controls functions
function checkValuesChangePass(e){

    const password = document.getElementById('newPass').value
    const confirmPass = document.getElementById('confirmPass').value
    let status = true

    status = !differentPass(password, confirmPass)
    if(status){
        status = !longPass(password)
        if(status){
            status = !weakPass(password)
        }
    }

    return status
}

function checkValuesRegister(e){

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPass = document.getElementById('confirmPass').value
    let status = true

    status = !shortName(name)
    if(status){
        status = !shortEmail(email)
        if(status){
            status = !differentPass(password, confirmPass)
            if(status){
                status = !longPass(password)
                if(status){
                    status = !weakPass(password)
                }
            }
        }
    }

    return status
}