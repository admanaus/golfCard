
var coursesPromise = getDataService.getCourses(40.4196423, -111.8866683, 14);

coursesPromise.then(function(courses){
    // console.log(courses);
    // console.log(courses.courses[0].name);
    for (var i = 0; i < courses.courses.length; i++) {
        document.getElementById('coursesDropdown').innerHTML += "<li><a class='dropdown-item' value='"+courses.courses[i].id+"' onclick='getSecectedCourse("+courses.courses[i].id+")' >"+courses.courses[i].name+"</a></li>";
        // console.log(courses.courses[i].name);

    }



});

function getSecectedCourse(courseID){

    var specificCoursePromise = getDataService.getSpecificCourse(courseID);

    specificCoursePromise.then(function (course) {
        console.log(course);
        // console.log(course.course.description);
        document.getElementById('courseName').innerHTML = "<h2>"+ course.course.name +"</h2>";

        var holes = course.course.holes.length;

        buildCard(holes);

    });


}

var weatherPromise = getDataService.getWeather(84097);

weatherPromise.then(function (globalWeather) {
    console.log(globalWeather);
    console.log(globalWeather.weather[0].description);
    var temp = Math.floor(globalWeather.main.temp) + "°F";
    document.getElementById('weatherDescription').innerHTML = "<h2>"+ globalWeather.weather[0].description + " "+ temp + "</h2>";
});



function buildCard(holes) {
    var rowNumber = 1;
    document.getElementById("scoreCard").innerHTML = "<div class='row' id='row"+rowNumber+"'></div>";

    for (var i = 1; i <= holes; i++) {

        document.getElementById('row' + rowNumber).innerHTML += "<div class='col-md-4 hole' id='hole"+ i +"' > <div class='well'>Hole "+i+" </div></div>";
        if (i % 3 == 0){
            rowNumber++;
            document.getElementById("scoreCard").innerHTML += "<div class='row'  id='row"+ rowNumber +"' ></div>";
        }
    }
}




