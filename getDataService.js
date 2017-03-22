var getDataService = {
    getCourses: getCourses,
    getSpecificCourse: getSpecificCourse,
    getWeather: getWeather,
    buildCard: buildCard

};


function getSpecificCourse(courseID){
    return new Promise(execute);

    function execute(resolve, reject){
        var httpRequest = new XMLHttpRequest();
        var course = {};
        console.log(course);

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200){
                var data = JSON.parse(httpRequest.responseText);
                course = data;
                resolve(course);
            }
        };

        httpRequest.open("GET", "https://golf-courses-api.herokuapp.com/courses/" + courseID , true);
        httpRequest.send();

    }

}

function getWeather(zipCode){
    return new Promise(execute);

    function execute(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                globalWeather = JSON.parse(xhttp.responseText);
                resolve(globalWeather);
            }
        };
        xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip="+ zipCode +"&units=imperial&appid=cc8ef8e5c209d938ab3801daa42b5e31", true);
        xhttp.send();
    }
}

function getCourses(latitude, longitude, radius){
    return new Promise(execute);

    function execute(resolve, reject){
        var httpRequest = new XMLHttpRequest();
        var courses = {};

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200){
                var data = JSON.parse(httpRequest.responseText);
                courses = data;
                resolve(courses);
            }
        };

        httpRequest.open("POST", "http://golf-courses-api.herokuapp.com/courses/", true);
        httpRequest.setRequestHeader("Content-Type", "application/json");
        var body = {
            "latitude": latitude,
            "longitude": longitude,
            "radius": radius
        };

        httpRequest.send(JSON.stringify(body));

    }


}

