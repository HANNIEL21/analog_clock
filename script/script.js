let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');
let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let input = document.querySelector("#input");



function debounce(cb, delay = 1000) {
    var timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cb(...args);
        }, delay);
    };
}
const query = debounce(() => {
    console.log(input.value);
});


input.addEventListener("input", (e) => {
    if (e.target.value !== "") {

        console.log(query(e.target.value));

        const apiKey = "59d969172709c125bc0350bfae057200";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${apiKey}`;

        let icon = document.querySelector("#icon");
        let city = document.querySelector("#city");
        let country = document.querySelector("#country");
        let form = document.querySelector("#form");

        let res = (async () => {
            const res = await fetch(url);
            return await res.json();
        })();


        res.then(data => {
            console.log(data);

            temp.textContent = Math.round(data.main.temp);
            city.textContent = data.name;
            country.textContent = data.sys.country;
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            let lat = data.coord.lat;
            let lng = data.coord.lon;


            // fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=NQN6TCJ6BBR4&format=json&by=position&lat=${lat}&lng=${lng}`)
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log(data);
            //     }).catch(err => {
            //         console.log(
            //             err
            //         );
            //     })
        });

    }
});







































// setInterval(() => {
//     let day = new Date();
//     let hh = day.getHours() * 30;
//     let mm = day.getMinutes() * 6;
//     let ss = day.getSeconds() * 6;

//     hour.textContent = day.getHours();
//     min.textContent = day.getMinutes();

//     hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
//     mn.style.transform = `rotateZ(${mm}deg)`;
//     sc.style.transform = `rotateZ(${ss}deg)`;
// }, 1000);


// res.then(data => {
//     console.log(data);

//     temp.textContent = Math.round(data.main.temp)
//     icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

//     let lat = data.coord.lat;
//     let lng = data.coord.lon;

//     fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=NQN6TCJ6BBR4&format=json&by=position&lat=${lat}&lng=${lng}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         }).catch(err => {
//             console.log(
//                 err
//             );
//         })
// });


