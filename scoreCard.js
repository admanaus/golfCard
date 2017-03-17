
var holes = 18;

function buildCard(holes) {
    var rowNumber = 1;
    document.getElementById("scoreCard").innerHTML = "<div id='row"+ rowNumber +"' >Row</div>";

    for (var i = 1; i <= holes; i++) {

        if (i % 3 == 0){
            rowNumber++;
            document.getElementById("scoreCard").innerHTML += "<div id='row"+ rowNumber +"' >Row</div>";
        }

        var currentRow = "row" + rowNumber;
        var currentHole = "hole" + i;
        console.log("Row " +currentRow)
        console.log("Hole" + currentHole);
        document.getElementById(currentRow).innerHTML += "<div id='hole"+ currentHole +"' >Hole</div>";

    }
}

buildCard(holes);