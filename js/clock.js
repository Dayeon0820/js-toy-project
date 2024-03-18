const clock = document.querySelector("#clock");

function setClock(){
    const date= new Date();
    const hour= date.getHours();
    const min= date.getMinutes();
    clock.innerText= `${String(hour).padStart(2,"0")}:${String(min).padStart(2,"0")}`
}

setClock();
setInterval(setClock, 60000);