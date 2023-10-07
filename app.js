const tabs = document.querySelectorAll(".tab-btn");
const allContent = document.querySelectorAll(".content");


// tabs.forEach(button =>{
//     button.addEventListener("click" , ()=>{
//         tabs.forEach(button=> {
//             button.classList.remove("active")
//         })
//         button.classList.add("active")
//     })
// })


function handleTabClick(button){

    tabs.forEach(button =>{
        button.classList.remove("active");
    })

    button.classList.add("active")
}

tabs.forEach((button,index )=>{
    button.addEventListener("click" ,(e)=>{
        handleTabClick(button)
        var line = document.querySelector(".line");
        line.style.width = e.target.offsetWidth + "px" ;
        line.style.left = e.target.offsetLeft + "px" ;

        allContent.forEach(content=>{
            content.classList.remove("active")
        })

        allContent[index].classList.add("active");

        // For local storage 
        localStorage.setItem("activeTabIndex" , index)


    });
   
    
})

// Local storage code 

const activeTabIndex = localStorage.getItem("activeTabIndex");
if(activeTabIndex !== null){
    if(activeTabIndex >= 0 && activeTabIndex < tabs.length){
        handleTabClick(tabs[activeTabIndex]);
        var line = document.querySelector(".line");
        line.style.width = tabs[activeTabIndex].offsetWidth + "px" ;
        line.style.left = tabs[activeTabIndex].offsetLeft + "px" ;

        allContent.forEach(content=>{
            content.classList.remove("active")
        })

        allContent[activeTabIndex].classList.add("active");
        
    }
}
