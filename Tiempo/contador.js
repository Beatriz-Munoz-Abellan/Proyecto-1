const getRestante = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMin = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));


    return {
        remainTime,
        remainSeconds,
        remainMin,
        remainHours,
        remainDays
    }

};
const contador = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRestante(deadline);
        el.innerHTML = `${t.remainDays} : ${t.remainHours} : ${t.remainMin} : ${t.remainSeconds}`
        if (t.remainTime <= 1) {
            clearInterval(timerUpdate)
            el.innerHTML = finalMessage;
        }

    }, 1000)
}

contador(' Dec 24 2022 13:44:00 GMT+0100', 'contador', 'Feliz Navidad');