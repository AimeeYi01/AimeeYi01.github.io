document.body.addEventListener("scoll", (event)=> {
    let container = document.querySelector(".tree")
    console.log("Scrolling...",event);
    console.log('window.scroll', window.scrollY);
    let containerheight = offsetheight - document.documentElement.clientheight
    let scrollPercent = window.scrollY / containerHeight
    if containerheight = window.sco
document.querySElectorALL("column").forEach(column)
    let leftColumn = document.querySelector(".street")
    let rightColumn =document.querySelector("car")

    leftColumn.style.tranform ="translateY"(-$(scrollPercent)%)
    rightColumn.style.transform = "translateY"
})

