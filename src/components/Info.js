import React from "react";

function Info({weerData}) {

    function date(date) {
        let dagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
        let maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];

        let maand = maanden[date.getMonth()];
        let datum = date.getDate();
        let dag = dagen[date.getDay() - 1];
        let jaar = date.getFullYear();

        return `${dag} ${datum} ${maand} ${jaar}`;
    }


    return (
        <div className="weather-info">
            <div className="card">
                <p className="plaats">{weerData.name}, {weerData.sys.country}</p>
                <p className="datum">{date(new Date())}</p>
                <hr/>
                <p className="info omschrijving">{weerData.weather[0].description} <img className="icon" src={`https://openweathermap.org/img/wn/${weerData.weather[0].icon}@2x.png`} alt="" /></p>
                <p className="info temp"><i className="fa-solid fa-temperature-high"></i> temperatuur: <span className="value">{Math.round(weerData.main.temp)}°C</span> - voelt als: <span className="value">{Math.round(weerData.main.feels_like)}°C</span></p>
                <p className="info maxTemp"><i className="fa-solid fa-temperature-full"></i> max-temperatuur: <span className="value">{Math.round(weerData.main.temp_max)}°C</span></p>
                <p className="info minTemp"><i className="fa-solid fa-temperature-empty"></i> min-temperatuur: <span className="value">{Math.round(weerData.main.temp_min)}°C</span></p>
                <hr/>
                <p className="info"><i className="fa-solid fa-sun"></i> zonsopkomst: <span className="value">{new Date(weerData.sys.sunrise * 1000).toLocaleTimeString('eu-NL')} CEST</span></p>
                <p className="info"><i className="fa-solid fa-moon"></i> zonsondergang: <span className="value">{new Date(weerData.sys.sunset * 1000).toLocaleTimeString('eu-NL')} CEST</span></p>
            </div>
        </div> 
    );
}

export default Info;