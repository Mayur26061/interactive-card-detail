const form = document.querySelector('.form');
const cardNumber = document.querySelector('.card-number');
const cvv = document.querySelector('.card-cvv');
const date = document.querySelector('.card-date');
const holdername = document.querySelector('.card-name');
const all = document.querySelector('.all-card')
const allCard = document.querySelector('.all-cards')

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
    card.addDetails(obj)
    addToUi(obj)
    form.reset()
});

const addUI = (data)=>{
    console.log(data)
    const ele = `<div class="card-show">
    <img src="images/bg-card-front.png" alt="">
    <div class="cdcd">
      <div class="circle-design">
        <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
          <path
          d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
          stroke="#fff" />
        </svg>
        
      </div>
      <div class="card-number">
        ${data.cardNumber}
      </div>
      <div class="card-other">
        <div class="card-name">
        ${data.name}
      </div>
      <div class="card-date">
        ${data.month}/${data.year}
      </div>
    </div>
  </div>`
  allCard.innerHTML += ele
}
all.addEventListener('click',()=>{
    document.querySelector('.card').style.display = 'none'
    card.getDetails(addUI)
})
let card = new Card()
// card.getDetails()