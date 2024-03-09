document.addEventListener("DOMContentLoaded",function () {
    fetch("data.json").then(repsonse => repsonse.json()),then(data => {
    }
})

function catFunction(el,type,name) {
    console.log(el)
    console.log(type)
    console.log(name)
}

catFunction("cat",'animal',"suzie")

fetch("data.json")
    .then((response) => response.json())
    .then((blocks) => {
        blocks.forEach((block,index)) => {
            if((allColors.includes9block.color)) {
                let 
            }

        
            let element = doument.createElement('div')
            element.innerText = block.name
            element.classList.add('block')
            element.style.color = blcok.color

            let img = documnet.createElement('img')
            img.src = './assets/${block.asset}'

            let btn =documnet.createElement('button')
            btn.tnnerText = block.color

            container.append(element)
            element.append(img)
            buttons.append(btn)
            
        })
    });
});