
var coursesPromise = getDataService.getCourses(40.4196423, -111.8866683, 10);

coursesPromise.then(function(courses){
    console.log(courses);
});

var weatherPromise = getDataService.getWeather(84097);

weatherPromise.then(function (globalWeather) {
    console.log(globalWeather);
})





