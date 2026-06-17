let time = 10;

const timer = setInterval(() => {
    console.log(time);

    if (time === 0) {
        clearInterval(timer);
        console.log("Time Up!");
    }

    time--;
}, 1000);