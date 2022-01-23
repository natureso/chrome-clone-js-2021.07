const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// "1".padStart(2,"0") => "01" 
// "1" 이 string이 2자리 수가 아니면 string 앞에 "0"이라는 string을 추가해줌 (뒤에 추가: padEnd)

getClock();
setInterval(getClock, 1000);