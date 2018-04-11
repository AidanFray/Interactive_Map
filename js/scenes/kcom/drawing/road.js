/*global Transformations*/
var Road = (function () {
    function Road() {

    }
    var roadWidth = 20, roadColour = '#808080';

    function drawSpareRoads(pContext) {
        pContext.fillStyle = roadColour;
        pContext.lineWidth = 1;

        //TOP ROAD
        pContext.beginPath();
        pContext.moveTo(-30, -225);
        pContext.lineTo(0, -300);
        pContext.lineTo(30, -300);
        pContext.lineTo(0, -225);
        pContext.fill();
        pContext.stroke();

        //ROAD LEADING TO PARKING
        pContext.beginPath();
        pContext.lineWidth = 1;
        pContext.moveTo(183, -38);
        pContext.lineTo(220, -50);
        pContext.stroke();
        pContext.lineTo(220, -75);
        pContext.lineTo(180, -63);
        pContext.fill();

        pContext.beginPath();
        pContext.lineWidth = 1;
        pContext.moveTo(220, -75);
        pContext.lineTo(180, -63);
        pContext.stroke();

    }

    function drawMiddle(pContext) {
        pContext.beginPath();
        pContext.fillStyle = roadColour;
        pContext.fillRect(-300, -160, 445, 273);
    }

    function drawShortSide(ValueUp, pContext) {
        pContext.moveTo(20 - ValueUp, -20);
        pContext.lineTo(10 - ValueUp,  -10);
        pContext.lineTo(-13 - ValueUp, 40);
        pContext.lineTo(-14 - ValueUp, 60);
        pContext.lineTo(-18 - ValueUp, 80);
        pContext.lineTo(-21 - ValueUp, 115);
        pContext.lineTo(-10 - ValueUp, 190);
        pContext.lineTo(20 - ValueUp, 250);
    }
    function shortSide(pContext) {
        pContext.beginPath();
        pContext.fillStyle = roadColour;
        pContext.lineWidth = 2;
        drawShortSide(roadWidth, pContext);
        pContext.stroke();
        drawShortSide(0, pContext);
        pContext.fill();
    }

    function drawLongSide(ValueUp, pContext) {
        pContext.moveTo(0, -ValueUp);
        pContext.lineTo(10, -10 - ValueUp);
        pContext.lineTo(20, -19 - ValueUp);
        pContext.lineTo(30, -27 - ValueUp);
        pContext.lineTo(40, -35 - ValueUp);
        pContext.lineTo(50, -43 - ValueUp);
        pContext.lineTo(60, -48 - ValueUp);
        pContext.lineTo(100, -60 - ValueUp);
        pContext.lineTo(160, -66 - ValueUp);
        pContext.lineTo(180, -66 - ValueUp);
        pContext.lineTo(200, -66 - ValueUp);
        pContext.lineTo(235, -67 - ValueUp);
        pContext.lineTo(270, -66 - ValueUp);
        pContext.lineTo(305, -65 - ValueUp);
        pContext.lineTo(325, -64 - ValueUp);
        pContext.lineTo(345, -60 - ValueUp);
        pContext.lineTo(385, -48 - ValueUp);
        pContext.lineTo(395, -43 - ValueUp);
        pContext.lineTo(405, -35 - ValueUp);
        pContext.lineTo(415, -27 - ValueUp);
        pContext.lineTo(425, -19 - ValueUp);
        pContext.lineTo(435, -10 - ValueUp);
        pContext.lineTo(445, -ValueUp);
    }
    function longSide(pContext) {
        pContext.beginPath();
        pContext.fillStyle = roadColour;
        pContext.lineWidth = 2;
        drawLongSide(roadWidth, pContext);
        pContext.stroke();
        drawLongSide(0, pContext);
        pContext.fill();
    }

    Road.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix = pMatrix;

        //MIDDLE
        drawMiddle(pContext);

        //TOP LEFT SECTION
        pMatrix = Transformations.Move(pMatrix, -300, -140, pContext);
        longSide(pContext);
        shortSide(pContext);

        //BOTTOM RIGHT
        pMatrix = Transformations.Move(pMatrix, 445, 230, pContext);
        pMatrix = Transformations.Rotate(pMatrix, Math.PI, pContext);
        longSide(pContext);
        shortSide(pContext);

        //SPARE ROADS
        resetMatrix.setTransform(pContext);
        pMatrix = resetMatrix;
        drawSpareRoads(pContext);

        resetMatrix.setTransform(pContext);
    };

    return Road;
}());