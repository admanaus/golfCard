
var coursesPromise = getDataService.getCourses(40.4196423, -111.8866683, 14);

coursesPromise.then(function(courses){
    // console.log(courses);
    // console.log(courses.courses[0].name);
    for (var i = 0; i < courses.courses.length; i++) {
        document.getElementById('coursesDropdown').innerHTML += "<li><a class='dropdown-item' value='"+courses.courses[i].id+"' href='#'>"+courses.courses[i].name+"</a></li>";
        // console.log(courses.courses[i].name);

    }



});

var specificCoursePromise = getDataService.getSpecificCourse(49557);

specificCoursePromise.then(function (course) {
    console.log(course);
    // console.log(course.course.description);
    document.getElementById('courseName').innerHTML = "<h2>"+ course.course.name +"</h2>";
});


var weatherPromise = getDataService.getWeather(84097);

weatherPromise.then(function (globalWeather) {
    console.log(globalWeather);
    console.log(globalWeather.weather[0].description);
    var temp = Math.floor(globalWeather.main.temp) + "°F";
    document.getElementById('weatherDescription').innerHTML = "<h2>"+ globalWeather.weather[0].description + " "+ temp + "</h2>";
});







