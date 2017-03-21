
var holes = 18;

function buildCard(holes) {
    var rowNumber = 1;
    document.getElementById("scoreCard").innerHTML = "<div class='row' id='row"+rowNumber+"'></div>";

    for (var i = 1; i <= holes; i++) {

        document.getElementById('row' + rowNumber).innerHTML += "<div class='col-md-4 hole' id='hole"+ i +"' > Hole "+i+" </div>";
        if (i % 3 == 0){
            rowNumber++;
            document.getElementById("scoreCard").innerHTML += "<div class='row'  id='row"+ rowNumber +"' ></div>";
        }
    }
}

buildCard(holes);