import React from "react";
const weerApi = {
    key: "##################",
    base: "https://api.openweathermap.org/data/2.5/"
}


function Form({setInputText, inputText, weerData, setWeerData}) {

    function inputHandler(e) {
        setInputText(e.target.value);
    }


    function formSubmitHandler(e) {
        e.preventDefault();
        if(inputText != "") {
            if (inputText.trim().length > 0) {
                fetch(`${weerApi.base}weather?q=${inputText}&lang=nl&units=metric&appid=${weerApi.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeerData(result)
                    setInputText('')});
            }
        }
    }

    return (
        <div className="search">
            <form className="searchForm" id="searchForm">
                <input type="text" onChange={inputHandler} placeholder="Voer een plaats in..." value={inputText}/>
                <button type="submit" onClick={formSubmitHandler}><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    );
}

export default Form;
