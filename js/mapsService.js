var mapsService = {
    getGolfCourseMap: getGolfCourseMap,
    getUserLocation: getUserLocation,
    getHoleMap: getHoleMap,

};



function getGolfCourseMap(latitude, longitude) {


    var script = "<script>function courseMap() {var uluru = {lat: "+ latitude +", lng: "+ longitude +"}; var map = new google.maps.Map(document.getElementById('courseMap'), {zoom: 15,center: uluru,mapTypeId: 'satellite'});var marker1 = new google.maps.Marker({position: uluru,map: map});}</script>";

    var url = "<script async defer src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBfZrgZnLbylDkqBfdx35fy5y7Odl8cIUY&callback=courseMap' type='text/javascript'> </script>";

    document.getElementById('courseMap').innerHTML = script + url;

}


function getUserLocation(){

}

function getHoleMap(){

}
