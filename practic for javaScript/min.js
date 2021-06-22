let times = document.querySelectorAll('.time');
let realTime = 400;

times.forEach(time => {
    let updateCount = () => {
        let terget = +time.getAttribute('data-target');
        let timeAll = +time.innerText;
        let assain = terget / realTime;

        if (timeAll < terget) {
            time.innerText = Math.ceil(timeAll + assain);
            setTimeout(updateCount, 1);
        } else {
            time.innerText = terget;
        }
    };
    updateCount();
});