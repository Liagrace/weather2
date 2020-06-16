window.addEventListener('load',()=> {
    let long;
    let lat;
    const key = "a93b473af12599a137c6ab3459e51454"

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api =`${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`
            //const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
            fetch(api)
            .then(response=>{
                return response.json();
             })
             .then(data => {
                 console.log(data);
             })

        });

       
    }
});