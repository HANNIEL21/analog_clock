let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);

const apiKey = '59d969172709c125bc0350bfae057200';
const city = 'Lagos';

let res = (async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    return await res.json();


})();

res.then(data => {
    let lat = data.coord.lat;
    let lng = data.coord.lon;

    fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=NQN6TCJ6BBR4&format=json&by=position&lat=${lat}&lng=${lng}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(
            err
        );
    })
});


