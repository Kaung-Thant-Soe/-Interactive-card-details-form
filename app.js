'use stricts'

const btnConfirm = document.getElementsByTagName('button')[0]
const formControl = document.getElementsByTagName('form')[0]
const thanksLetter = document.getElementsByClassName('finish')[0]
const errorSelector = document.querySelectorAll('.error-blank')
const inputData = document.querySelectorAll('input')
const cardName = document.getElementsByClassName('name')[0]
const cardNumber = document.getElementsByClassName('card-number')[0]
const cardExpireMonth = document.getElementsByClassName('card-expire-month')[0]
const cardExpireYear = document.getElementsByClassName('card-expire-year')[0]
const backCvc = document.getElementsByClassName('back-cvc')[0]

const handler = () => {
    //     - Any input field is empty
    //     - The card number, expiry date, or CVC fields are in the wrong format
    // validName()

    if (
        !inputData[0].value ||
        !inputData[1].value ||
        !inputData[2].value ||
        !inputData[3].value ||
        !inputData[4].value
    ) {
        errorRed(0, 0)
        errorRed(1, 1)
        errorRed(2, 2)
        errorRed(2, 3)
        errorRed(3, 4)
    } else {
        thanksLetter.classList.toggle('hidden')
        formControl.classList.toggle('hidden')
    }
}

inputData[0].addEventListener('keyup', (e) => {
    const inputValue = e.target.value
    const regexNumber = /[^0-9]+$/g
    const search = inputValue.search(regexNumber)
    valid(0, 0)
    if (search === 0) {
        valid(0, 0)
        cardName.innerHTML = e.target.value
        if (inputValue.length < 13) {
            errorRed(0, 0)
            errorSelector[0].innerHTML =
                'The number of word should be atleast 13'
            cardName.innerHTML = 'Jane Appleseed'
        }
    } else if (!inputValue) {
        errorRed(0, 0)
        cardName.innerHTML = 'Jane Appleseed'
        errorSelector[0].innerHTML = `Can't be blank`
    } else {
        errorRed(0, 0)
        errorSelector[0].innerHTML = 'Wrong formats,words only'
        return
    }
})

inputData[1].addEventListener('keyup', (e) => {
    const inputValue = e.target.value
    const numberValue = e.target.value.replaceAll(' ', '')
    valid(1, 1)
    if (e.target.value.length > 0 && Number(numberValue)) {
        e.target.value = numberValue.replace(
            /(\d{4})(\d{4})(\d{0,4})(\d{0,4})/,
            '$1 $2 $3 $4'
        )
        valid(1, 1)
        cardNumber.innerHTML = e.target.value
        if (inputValue.length < 19) {
            e.target.value = numberValue.replace(
                /(\d{4})(\d{4})(\d{0,4})(\d{0,4})/,
                '$1 $2 $3 $4'
            )
            errorSelector[1].innerHTML = `The number should be 19`
            errorRed(1, 1)
        }
    } else if (!e.target.value) {
        errorSelector[1].innerHTML = `Can't be blank`
        errorRed(1, 1)
    } else {
        errorSelector[1].innerHTML = 'Wrong format,numbers only'
        errorRed(1, 1)
        cardNumber.innerHTML = '0000 0000 0000 0000'
    }
})
inputData[2].addEventListener('keyup', (e) => {
    const inputMonth = e.target.value
    const regexNumber = /[^0-9]+$/g
    const search = inputMonth.search(regexNumber)
    valid(2, 2)
    if (search == 0) {
        e.target.value = ''
        errorRed(2, 2)
        errorSelector[2].innerHTML = `Can't be blank`
    } else if (!inputMonth) {
        errorRed(2, 2)
        cardExpireMonth.innerHTML = '00'
        errorSelector[2].innerHTML = `Can't be blank`
    } else {
        if (Number(inputMonth) < 1 || Number(inputMonth) > 12) {
            errorRed(2, 2)
            errorSelector[2].innerHTML = `Number should be between 1 and 12`
        } else {
            valid(2, 2)
            cardExpireMonth.innerHTML = e.target.value
        }
    }
})
inputData[3].addEventListener('keyup', (e) => {
    const inputYear = e.target.value
    const regexNumber = /[^0-9]+$/g
    const search = inputYear.search(regexNumber)
    const presentDate = new Date().getFullYear()
    valid(2, 3)
    if (search === 0) {
        e.target.value = ''
        errorRed(2, 3)
        errorSelector[2].innerHTML = `Can't be blank`
    } else if (!inputYear) {
        errorRed(2, 3)
        cardExpireYear.innerHTML = '00'
        errorSelector[2].innerHTML = `Can't be blank`
    } else {
        if (Number(inputYear) < presentDate) {
            errorRed(2, 3)
            errorSelector[2].innerHTML = `Date must be in future`
        } else {
            valid(2, 3)
            const completeYear = Number(inputYear) - 2000
            cardExpireYear.innerHTML = completeYear
        }
    }
})
inputData[4].addEventListener('keyup', (e) => {
    let inputCvc = e.target.value
    const regexNumber = /[0-9]+$/g
    valid(3, 4)
    if (inputCvc.length > 2) {
        const format = inputCvc.replace(regexNumber, '')
        const padding = format.padStart(3, e.target.value)
        e.target.value = padding
        backCvc.innerHTML = padding
    } else if (!inputCvc) {
        errorRed(3, 4)
        backCvc.innerHTML = '000'
    }
})

const errorRed = (indexLetter, indexBorder) => {
    formControl.style.gap = '15px'
    inputData[indexBorder].style.marginBottom = '0px'
    inputData[indexBorder].classList.add('error-border')
    errorSelector[indexLetter].classList.remove('hidden')
}
const valid = (indexLetter, indexBorder) => {
    formControl.style.gap = '20px'
    inputData[indexBorder].style.marginBottom = '10px'
    inputData[indexBorder].classList.remove('error-border')
    errorSelector[indexLetter].classList.add('hidden')
}

btnConfirm.addEventListener('click', handler)
