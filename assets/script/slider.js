// slider with button
let slider = document.querySelector(".slider-box")
let indicatorImg = document.querySelectorAll(".indicator-btn")
indicatorImg.forEach(btn => {
    // if (btn.classList.contains("active")) {
    //     btn.classList.remove("active")
    // }
    btn.addEventListener("click", () => {

        btn.classList.remove("active")
        // console.log(btn.previousSibling)
        btn.classList.add("active")
        console.log(btn.previousElementSibling)
        btn.previousElementSibling.classList.remove("active")
        btn.nextElementSibling.classList.remove("active")
        let src = btn.getAttribute("data-src")
        console.log("hiiiii it works")
        slider.style.backgroundImage = 'url("' + src + '")'
    })
})

// //// image with controller left and right
let lifeImg = document.querySelectorAll(".lifeimg")
let currentImg = document.querySelector("#curingImg")
let left = document.querySelector(".left1")
let right = document.querySelector(".right1")
let gallery = document.querySelector(".lifeimg-gallery")
let slideIndicator = document.querySelectorAll(".newBtn")
let position = 0

for (let i = 0; i < lifeImg.length; i++) {
    lifeImg[i].addEventListener("click", () => {
        currentImg.src = lifeImg[i].src
        console.log(lifeImg[i].src)
        // console.log("this is ok")
    })
}


left.addEventListener("click", () => {
   
    gallery.scrollLeft += 150
})
right.addEventListener("click", () => {
    gallery.scrollLeft -= 150
    console.log("right")
})
// change backgroumd whenever i click it

slideIndicator.forEach(newSlide => {
   
    newSlide.style.color = "blue"
    console.log("h1111111111")

})


// date
let days = document.querySelectorAll(".days")
let month = document.querySelectorAll(".month")
let year = document.querySelectorAll(".year")
let calender = document.querySelectorAll(".calender")
let container = document.querySelector(".flex")
let date = new Date()
let yearContainer = date.getFullYear()
// year.textContent = yearContainer
let day = date.getDay()
let daysOfTheWeek;
switch (day) {
    case 0:
        daysOfTheWeek = "sunday"
        break;
    case 1:
        daysOfTheWeek = "monday"
        break;
    case 2:
        daysOfTheWeek = "tuesday"
        break;
    case 3:
        daysOfTheWeek = "wednesday"
        break;
    case 4:
        daysOfTheWeek = "thursday"
        break;
    case 5:
        daysOfTheWeek = "friday"
        break;
    case 6:
        daysOfTheWeek = "saturday"
        break;
}

// console.log(daysOfTheWeek)


let newMonth = date.getMonth()
let monthOfTheYear;
switch (newMonth) {
    case 0:
        monthOfTheYear = "january"
        break;
    case 1:
        monthOfTheYear = "february"
        break;
    case 2:
        monthOfTheYear = "march"
        break;
    case 3:
        monthOfTheYear = "april"
        break;
    case 4:
        monthOfTheYear = "may"
        break;
    case 5:
        monthOfTheYear = "june"
        break;
    case 6:
        monthOfTheYear = "july"
        break;
    case 7:
        monthOfTheYear = "august"
        break;
    case 8:
        monthOfTheYear = "september"
        break;
    case 9:
        monthOfTheYear = "october"
        break;
    case 10:
        monthOfTheYear = "november"
        break;
    case 11:
        monthOfTheYear = "december"
        break;

}
function myStyle() {
    days.forEach(newDay => {
        newDay.textContent = daysOfTheWeek
    })
    month.forEach(allMonth => {
        allMonth.textContent = monthOfTheYear
    })
    year.forEach(allYear => {
        allYear.textContent = yearContainer
    })
    calender.forEach(allCalender => {
        allCalender.style.textTransform = "capitalize"
        allCalender.style.color = "blue"
    })
    let flexContainer = document.querySelectorAll(".flex-content")
    let flexBtn = document.querySelectorAll(".flex-btn")
    let readBtn = document.querySelectorAll(".newbtn")
    let boxShadow = document.querySelectorAll(".flex-items")
    flexContainer.forEach(flex => {
        flex.style.width = "90%"
        flex.style.margin = "0 auto"

    })
    flexBtn.forEach(newBtn => {
        newBtn.style.display = "flex"
        newBtn.style.margin = "10px 0"
    })
    readBtn.forEach(btn => {
        btn.style.padding = "10px 20px"
        btn.style.backgroundColor = "#f7d201"
        btn.style.color = " rgb(80, 2, 133)"
        btn.style.textTransform = "capitalize"
        btn.style.fontSize = "15px"
        btn.style.border = "none"
    })
    boxShadow.forEach(shadow => {
        shadow.style.boxShadow = "0px 8px 16px rgb(0 0 0 / 40%)"
        shadow.style.borderRadius = "10px"
    })
    container.style.marginTop = "50px"
    container.style.marginBottom = "10px"
}

myStyle()


// responsiveness wwith js

let flexCard = document.querySelector(".flex-card")

window.addEventListener("DOMContentLoaded", () => {
    let query = window.matchMedia("(max-width:600px)")
    if (query.matches) {
        document.querySelector(".fa-bars").style.color = "red"

        // document.querySelector(".card-item").style
    }

})

