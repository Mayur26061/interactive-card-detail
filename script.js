const form = document.querySelector('.form');
const cardNumber = document.querySelector('.card-number');
const cvv = document.querySelector('.card-cvv');
const date = document.querySelector('.card-date');
const holdername = document.querySelector('.card-name');
const addToUi = (obj)=>{
    debugger;
    cardNumber.textContent = obj.cardNumber;
    cvv.textContent = obj.cvv;
    date.textContent = `${obj.month}/${obj.year}`;
    holdername.textContent = obj.name;


}
form.cardNumber.addEventListener('keyup',(ev)=>{
    let reg_card = /^[0-9]{16}$/
    if (reg_card.test(ev.target.value)){
        ev.target.classList.remove("warning")
    }
    else{
        ev.target.classList.add("warning")
    }
})
form.month.addEventListener('keyup',(ev)=>{
    let mon = ev.target.value.trim()
    let reg_month = /^[0-9]{2}$/
    if (reg_month.test(mon) && mon <=12){
        ev.target.classList.remove("warning")
    }
    else{
        ev.target.classList.add("warning")
    }
})
form.year.addEventListener('keyup',(ev)=>{
    let minDate = new Date().getFullYear().toString().slice(-2)
    let year = ev.target.value.trim()
    let reg_month = /^[0-9]{2}$/
    if (reg_month.test(year)&& year>=minDate){
        ev.target.classList.remove("warning")
    }
    else{
        ev.target.classList.add("warning")
    }
})

form.cardcvv.addEventListener('keyup',(ev)=>{
    let reg_cvv = /^[0-9]{3}$/
    if (reg_cvv.test(ev.target.value)){
        console.log("HOL")
        ev.target.classList.remove("warning")
    }
    else{
        ev.target.classList.add("warning")
    }
})
form.addEventListener('submit',(ev)=>{
    ev.preventDefault()
    const obj = {
        name: form.holderName.value,
        cvv: form.cardcvv.value,
        cardNumber: form.cardNumber.value,
        month: form.month.value,
        year: form.year.value,
    }
    addToUi(obj)
});