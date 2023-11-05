buton=document.querySelectorAll(".kutu");
const coloseMark=document.querySelector(".fa-xmark")
const back=document.querySelector(".back")
let seatCount=0;
let objectDate = new Date();
let koltuk="";


let day = objectDate.getDate();
console.log(day); // 23

let month = objectDate.getMonth();
console.log(month + 1); // 8

let year = objectDate.getFullYear();
console.log(year); // 2022

buton.forEach(p => {
    p.addEventListener("click", () => {
        if(p.classList.contains("dolu"))
        {
            p.classList.remove("dolu");
            seatCount--;
        }
        else if (!(p.classList.contains("dolu")))
        {
            seatCount++;
            if(seatCount<=1){
                p.classList.add("dolu")

            }
            
            
        }
        koltuk=p.textContent;
        if(seatCount >1)
          (back.style.display = 'block')
        
        
    });
    

    p.addEventListener("mouseover", () => {
        if (!p.classList.contains("dolu")) {
            p.classList.add("sec");
        }
    });

    p.addEventListener("mouseout", () => {
        p.classList.remove("sec");
    });
});




coloseMark.addEventListener("click",()=>{
    back.style.display = 'none'


})
selectElement = document.querySelector("#mySelect");
let selectedOption=""
selectElement.addEventListener("change", (event) => {
     selectedOption = event.target.value;
    console.log("Seçilen seçenek:", selectedOption);
});
const textName = document.querySelector(".textinput");
let namez="";

textName.addEventListener("change", (e) => {
    namez=e.target.value
    console.log(namez)
});
 const timeZone= new Date().getUTCDate;
 console.log(timeZone)
document.querySelector(".but").addEventListener("click",()=>{
    if(koltuk=="" || namez=="")
    {
        alert("lütfen isim ve koltuk seçimi yapınız...")
    }
    else{
        switch(selectedOption){
            case "" :alert("lütfen bileti seçin")
            break;
            case "indirimli" : document.querySelector(".userName").textContent=namez
            document.querySelector(".ticketPrice").textContent="Fiyat 120 Tl"
            document.querySelector(".ticketDate").textContent=month + "/" + day + "/" + year
            document.querySelector(".ticket").style.display="block"
            document.querySelector(".ticketSeat").textContent=koltuk
            console.log(koltuk)
            break;
    
            case "Tam":  document.querySelector(".userName").textContent=namez
            document.querySelector(".ticketPrice").textContent="Fiyat 170 Tl"
            document.querySelector(".ticketDate").textContent=month + "/" + day + "/" + year
            document.querySelector(".ticket").style.display="block"
        }

    }
    
    
    
})

