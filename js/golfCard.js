
var getLocationPromise = getDataService.getUserLocation();
getLocationPromise.then(displayLocation).then(getNearbyCourses);

function getNearbyCourses(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    getDataService.getCourses(lat, lng, 45)
        .then(function (courses) {
            for (var i = 0; i < courses.courses.length; i++) {
                document.getElementById('coursesDropdown').innerHTML += "<li><a class='dropdown-item' value='" + courses.courses[i].id + "' onclick='getSelectedCourse(" + courses.courses[i].id + ")' >" + courses.courses[i].name + "</a></li>";
                // console.log(courses.courses[i].name);
            }


        });
}
function displayLocation(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    document.getElementById('lat').innerHTML = lat;
    document.getElementById('lng').innerHTML = lng;
    return position;
}


// var coursesPromise = getDataService.getCourses(40.4196423, -111.8866683, 14);
//
// coursesPromise.then(function(courses){
//     // console.log(courses);
//     // console.log(courses.courses[0].name);
//     for (var i = 0; i < courses.courses.length; i++) {
//         document.getElementById('coursesDropdown').innerHTML += "<li><a class='dropdown-item' value='"+courses.courses[i].id+"' onclick='getSelectedCourse("+courses.courses[i].id+")' >"+courses.courses[i].name+"</a></li>";
//         // console.log(courses.courses[i].name);
//
//     }
//
//
//
// });

// function getSelectedCourse(courseID){
//
//     var specificCoursePromise = getDataService.getSpecificCourse(courseID);
//
//     specificCoursePromise.then(function (course) {
//         console.log(course);
//         // console.log(course.course.description);
//         document.getElementById('courseName').innerHTML = "<h2>"+ course.course.name +"</h2>";
//
//
//
//         console.log(course.course.zip_code);
//
//         var weatherPromise = getDataService.getWeather(course.course.zip_code);
//
//         weatherPromise.then(function (globalWeather) {
//             console.log(globalWeather);
//             console.log(globalWeather.weather[0].description);
//             var temp = Math.floor(globalWeather.main.temp) + "°F";
//             document.getElementById('weatherDescription').innerHTML = "<h2>" + globalWeather.weather[0].description + " "+ temp + "</h2>";
//
//         });
//
//         buildTeeMenu(course);
//
//         var holes = course.course.holes;
//         buildCard(holes)
//
//     });

// function buildTeeMenu(course) {
//
//     var tees = course.course.holes[0].tee_boxes;
//
//
//     for (var i = 0; i < tees.length - 1; i++) {
//         var teeName = tees[i].tee_type;
//
//         document.getElementById("teeDropdown").innerHTML += "<li><a class='dropdown-item' value=' " + i + " ' onclick='buildHoleYards("+ i +")'>"+teeName+"</a></li>";
//
//     }
// }
//
//
// function buildHoleYards(teeSelection){
//     document.getElementById("").innerHTML = "";
// }

// function buildCard(holes, teeSelection) {
//
//
//     //Build the rows and divs for each hole
//     var rowNumber = 1;
//     document.getElementById("scoreCard").innerHTML = "<div class='row' id='row"+rowNumber+"'></div>";
//
//     for (var i = 1; i <= holes.length; i++) {
//         document.getElementById('row' + rowNumber).innerHTML +=
//             "<div class='col-md-4 hole' id='hole"+ i +"' > <div class='well'>Hole "+ i +" </div>" +
//             "<div class='well'>Par "+ holes[i - 1].tee_boxes[0].par +"</div></div>" +
//             "<div class='well'>Tee: "+ holes[i - 1].tee_boxes[teeSelection].tee_type +" Yards: "+holes[i - 1].tee_boxes[teeSelection].yards+"</div></div>";
//
//         //build a new row fo every 3 holes
//         if (i % 3 == 0){
//             rowNumber++;
//             document.getElementById("scoreCard").innerHTML += "<div class='row'  id='row"+ rowNumber +"' ></div>";
//         }
//     }
//
//     //add specific hole information to each hole
// }


// var weatherPromise = getDataService.getWeather();
//
// weatherPromise.then(function (globalWeather) {
//     console.log(globalWeather);
//     console.log(globalWeather.weather[0].description);
//     var temp = Math.floor(globalWeather.main.temp) + "°F";
//     document.getElementById('weatherDescription').innerHTML = "<h2>"+ globalWeather.weather[0].description + " "+ temp + "</h2>";
// });

//
//
// function initMap() {
//     var latitude = 40.4196423;
//     var longitude = -111.8866683;
//     var uluru = {lat: latitude, lng: longitude};
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 15,
//         center: uluru,
//         mapTypeId: 'terrain'
//     });
//     var marker1 = new google.maps.Marker({
//         position: uluru,
//         map: map
//     });
//
// }
// function getGolfCourseMap(latitude, longitude) {
//
//
//     var script = "<script>function courseMap() {var uluru = {lat: "+ latitude +", lng: "+ longitude +"}; var map = new google.maps.Map(document.getElementById('courseMap'), {zoom: 15,center: uluru,mapTypeId: 'satellite'});var marker1 = new google.maps.Marker({position: uluru,map: map});}</script>";
//
//     var url = "<script async defer src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBfZrgZnLbylDkqBfdx35fy5y7Odl8cIUY&callback=courseMap' type='text/javascript'> </script>";
//
//     document.getElementById('courseMap').innerHTML += url + script;
//
// }
//
// getGolfCourseMap(40.4196423, -111.8866683);


