// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navber } from "../components/navbar.js";

document.getElementById("navbar").innerHTML= navber();





    document.getElementById("in").addEventListener("click",infun)
    document.getElementById("ch").addEventListener("click",infun)
    document.getElementById("us").addEventListener("click",infun)
    document.getElementById("uk").addEventListener("click",infun)
    document.getElementById("nz").addEventListener("click",infun)

   


  function infun()
  {
   getdata (this.id)
  }

  let getdata = async (a) =>{
    //   console.log(a)
    try{

        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${a}`)

        let data = await res.json()
         
        // console.log(data.articles)
        appent(data.articles)
        
    }catch(err)
    {
        console.log("err",err)
    }
  }


getdata("in")



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



 

  


  function fufun(e)
  {
      if(e.key == "Enter")
      {
        serchfun()
      }
  }

  document.getElementById("search_input").addEventListener("keydown", fufun)

  

 async function serchfun()
  {
    try{

        let query = document.getElementById("search_input").value
       
 
        // console.log(query)

        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)

        let data = await res.json()
         
        // console.log(data.articles)



        localStorage.setItem("search",JSON.stringify(data.articles))
        
        // appent(data.articles)
        window.location="search.html"
        // 
        
    }catch(err)
    {
        console.log("err",err)
    }
    
  }








