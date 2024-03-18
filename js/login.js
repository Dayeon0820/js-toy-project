const loginForm = document.querySelector(".login-form");
const loginInput= document.querySelector(".login-input");

function handleInputSubmit(event){
    const username = loginInput.value;
    const setUsername = localStorage.setItem("username", username);
    setUsername();
    onGreeting(username);
    
}

function onGreeting(username){
    const greeting = document.querySelector("#greeting");
    const date = new Date();
    const hour= date.getHours();
    if(hour < 6){
        greeting.innerText = `고요한 새벽이에요. ${username}님`
    }else if(hour >= 6 && hour <9){
        greeting.innerText= `좋은 아침이에요. ${username}님`
    }else if(hour >= 9 && hour <12){
        greeting.innerText= `새로운 시작을 위한 에너지를 충전해봐요. ${username}님`
    }else if(hour >= 12 && hour <15){
        greeting.innerText= `맛있는 식사하셨나요 ${username}님?`
    }else if(hour >= 15 && hour <18){
        greeting.innerText= `오늘도 힘내세요. ${username}님`
    }else if(hour >= 18 && hour <21){
        greeting.innerText= `편안한 저녁 되세요. ${username}님`
    }else if(hour >= 21 && hour <24){
        greeting.innerText= `편안한 밤 되세요. ${username}님`
    }
    
}


const getUsername = localStorage.getItem("username");
     

if(getUsername===null){
        loginForm.classList.remove("hidden");
        loginForm.addEventListener("submit", handleInputSubmit);
     }else{
        onGreeting(getUsername);
     }

    