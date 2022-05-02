// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import { navber } from "../components/navbar.js";

document.getElementById("navbar").innerHTML= navber();

// console.log(navber)



let data = JSON.parse(localStorage.getItem("search")) 

// console.log(data)



let appent = (array) => {
    document.getElementById("results").innerHTML=null
    array.forEach(({title,description,urlToImage}) => {

        let div = document.createElement("div")
        div.setAttribute("class","news")
    
        let div1 = document.createElement("div")
    
        let img = document.createElement("img")
        img.src=urlToImage
    
        let h3 = document.createElement("h3")
        h3.innerText=title
    
        let p = document.createElement("p")
        p.innerText=description

        div1.append(h3,p)

        div.append(img,div1)

        document.getElementById("results").append(div)
    
        
    });
    
  }

  appent(data)