let btn = document.querySelector("#theme-toggle");
        let body = document.body

        btn.addEventListener("click", function () {

           let cl = body.classList.toggle("dark");
           body.classList.toggle("light", !cl); 
          localStorage.setItem("theme",cl);
          
        })

        
      let val = localStorage.getItem("theme")
        if(val === "true"){
              body.classList.remove("light");
              body.classList.add("dark");

          }else{
              body.classList.remove("dark");
              body.classList.add("light");

          }