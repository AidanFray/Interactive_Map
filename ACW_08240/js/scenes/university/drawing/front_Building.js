/*global Transformations, Vector*/
var FrontBuilding = (function () {
    function FrontBuilding() {

    }

    function drawPillars(pContext) {
        pContext.beginPath();
        pContext.lineWidth = 2;
        pContext.fillStyle = "#995C49";

        //TOP
        pContext.moveTo(0, 0);
        pContext.lineTo(640, 0);

        //PILLAR - THESE ARE RIGHT TO LEFT
        pContext.lineTo(640, 200);
        pContext.lineTo(615, 200);
        pContext.lineTo(615, 30);

        //PILLAR
        pContext.lineTo(465, 30);
        pContext.lineTo(465, 200);
        pContext.lineTo(440, 200);
        pContext.lineTo(440, 30);

        //PILLAR
        pContext.lineTo(290, 30);
        pContext.lineTo(290, 200);
        pContext.lineTo(265, 200);
        pContext.lineTo(265, 30);

        //PILLAR
        pContext.lineTo(25, 30);
        pContext.lineTo(25, 200);
        pContext.lineTo(0, 200);
        pContext.lineTo(0, 0);

        pContext.fill();
        pContext.stroke();

        //BOTTOM LINE
        pContext.beginPath();
        pContext.moveTo(0, 200);
        pContext.lineTo(640, 200);
        pContext.stroke();
    }

    function drawVentilation(pContext) {
        //BACKGROUND
        pContext.beginPath();
        pContext.fillStyle = "#6B787E";
        pContext.moveTo(0, 0);
        pContext.fillRect(0, 0, 615, 200);
        pContext.stroke();

        //MAIN TRIM
        pContext.beginPath();
        pContext.fillStyle = "#3E3A31";
        pContext.moveTo(25, 30);
        pContext.lineTo(640, 30);
        pContext.lineTo(640, 60);
        pContext.lineTo(25, 60);
        pContext.closePath();
        pContext.fill();

        //BOTTOM TRIM
        pContext.beginPath();
        pContext.fillStyle = "#535353";
        pContext.moveTo(25, 60);
        pContext.lineTo(640, 60);
        pContext.lineTo(640, 55);
        pContext.lineTo(25, 55);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    }

    function blinds(pContext, width, height, position) {
        var blindNumber = 6,
            spacing = height / blindNumber,
            i,
            howFarDown,
            x = position.getX(),
            y = position.getY();

        pContext.lineWidth = 3;
        pContext.strokeStyle = '#452A1F';

        //OUTLINE
        pContext.beginPath();
        pContext.moveTo(x, y);
        pContext.lineTo(width + x, y);
        pContext.lineTo(width + x, height + y);
        pContext.lineTo(x, height + y);
        pContext.closePath();
        pContext.stroke();

        //BLINDS
        pContext.beginPath();
        pContext.moveTo(x, y);
        howFarDown = spacing + y;
        for (i = 0; i < blindNumber; i += 1) {
            pContext.moveTo(x, howFarDown);
            pContext.lineTo(width + x, howFarDown);

            howFarDown += spacing;
        }
        pContext.stroke();

        pContext.strokeStyle = '#000000';
    }
    function miscDeceration(pContext, pMatrix) {
        var resetMatrix = pMatrix;

        resetMatrix.setTransform(pContext);
        blinds(pContext, 232, 70, (new Vector(29, 62)));
        blinds(pContext, 140, 70, (new Vector(295, 62)));
        blinds(pContext, 140, 70, (new Vector(470, 62)));
    }

    FrontBuilding.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix = pMatrix;

        pMatrix = Transformations.Move(pMatrix, -300, 40, pContext);

        drawVentilation(pContext);
        drawPillars(pContext);
        miscDeceration(pContext, pMatrix);

        resetMatrix.setTransform(pContext);
    };

    return FrontBuilding;
}());