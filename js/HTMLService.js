var HTMLService = {
    buttonTees: buttonTees,
    buttonNearbyCourses: buttonNearbyCourses,
    generateMap: generateMap,

};

function buttonNearbyCourses(){
    document.getElementById('topNavBar').innerHTML = '<li class="active"> <div class="dropdown" style="padding: 15px 15px"> <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select Nearby Course <span class="caret"></span> </button> <div class="dropdown-menu" id="coursesDropdown" aria-labelledby="dropdownMenuButton"></div> </div> </li>';
    // $(.navbar-nav).append('<li class="active"> <div class="dropdown" style="padding: 15px 15px"> <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select Nearby Course <span class="caret"></span> </button> <div class="dropdown-menu" id="coursesDropdown" aria-labelledby="dropdownMenuButton"></div> </div> </li>');
    // console.log("Function Fired!");
}



function buttonTees() {
    document.getElementById('topNavBar').innerHTML += '<li class="active"> <div class="dropdown" style="padding: 15px 15px"> <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select Tee <span class="caret"></span> </button> <div class="dropdown-menu" id="teeDropdown" aria-labelledby="dropdownMenuButton"></div> </div> </li>';

    // $(.navbar-nav).append('<li class="active">
    //     <div class="dropdown" style="padding: 15px 15px">
    //     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //     Select Tee <span class="caret"></span>
    //     </button>
    //     <div class="dropdown-menu" id="teeDropdown" aria-labelledby="dropdownMenuButton"></div>
    //     </div>
    //     </li>');
}

function generateMap(latitude, longitude, HTMLID){
    var map = new google.maps.Map(document.getElementById(HTMLID), {
        zoom: 12,
        center: {lat: latitude, lng: longitude},
        mapTypeId: 'terrain'
    });
    new google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map: map
    });
}