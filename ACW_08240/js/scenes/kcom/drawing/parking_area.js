/*global Transformations */
var Parking = (function () {
    function Parking() {

    }

    function drawParkingSpots(pContext) {
        var i,
            y = -74,
            numberOfParkingPlaces = 20;

        //MARKINGS
        pContext.beginPath();
        pContext.lineWidth = 2;
        pContext.strokeStyle = "#D3D3D3";

        //MIDDLE LINE
        pContext.moveTo(75, -75);
        pContext.lineTo(75, 120);

        //DRAWS A DYNAMIC NUMBER OF PARKING PLACES EQUALLY SPACED
        for (i = 0; i < numberOfParkingPlaces + 1; i += 1) {
            //left
            pContext.moveTo(75, y);
            pContext.lineTo(30, y);

            //right
            pContext.moveTo(75, y);
            pContext.lineTo(115, y);

            y = y + 195 / numberOfParkingPlaces;
        }
        pContext.stroke();
        pContext.strokeStyle = "#000000";
    }

    var colour = "#808080";
    Parking.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix = pMatrix;

        //MOVES TO THE BOTTOM RIGHT OF THE EXTENDED ROAD
        pMatrix = Transformations.Move(pMatrix, 220, -50, pContext);
        pContext.beginPath();
        pContext.lineWidth = 1;
        pContext.fillStyle = colour;
        pContext.moveTo(0, 0);
        pContext.lineTo(0, 150);
        pContext.lineTo(150, 150);
        pContext.lineTo(150, -100);
        pContext.lineTo(0, -100);
        pContext.lineTo(0, -25);
        pContext.fill();
        pContext.stroke();

        drawParkingSpots(pContext);

        resetMatrix.setTransform(pContext);
    };

    return Parking;
}());