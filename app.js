let number = document.getElementById("number")
number.innerHTML = "65%"

let counter = 0

setInterval(() => {
    if (counter == 65) {
        clearInterval()
    } else {
        counter += 1
        number.innerHTML = counter + "%"
    }
}, 28) // ตัวหน่วงเวลา = 1000 milli-second
