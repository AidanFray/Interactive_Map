/*global Transformations */

var UBuilding = (function () {
    function UBuilding() {

    }
    var length = 370;
    function drawWindow(pContext, x, y) {
        var height = 10,
            windowCount = 24,
            spaceBetween = length / windowCount,
            i,
            startX = x,
            startY = y;

        //OUTLINE
        pContext.beginPath();
        pContext.fillStyle = "#e6ffff";
        pContext.lineWidth = 1;
        pContext.moveTo(x, y);
        x -= 5;
        y -= height;
        pContext.lineTo(x, y);
        x += length;
        pContext.lineTo(x, y);
        x -= 5;
        y += height;
        pContext.lineTo(x, y);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
        x = startX;
        y = startY;

        //3D SECTIONS
        pContext.beginPath();
        pContext.fillStyle = "#ffffff";
        pContext.lineWidth = 0.5;
        pContext.moveTo(x, y);
        pContext.lineTo(-7, -18);
        pContext.lineTo(1, -21);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();

        x = length - 5;
        y = startY;

        pContext.beginPath();
        pContext.fillStyle = "#3A3730";
        pContext.lineWidth = 0.5;
        pContext.moveTo(x, y);
        pContext.lineTo(x + 12, -18);
        pContext.lineTo(x + 3, -28);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();

        pContext.beginPath();
        pContext.lineWidth = 0.5;
        x = startX;
        y = startY;
        //WINDOWS
        for (i = 0; i < windowCount; i += 1) {
            y -= 10;
            pContext.lineTo(x, y);
            y += 10;

            x += spaceBetween;
            pContext.moveTo(x, y);
        }
        pContext.stroke();
    }
    function drawMiddleRow(pContext) {

        //BOTTOM BRICK LAYER
        pContext.beginPath(); //LEFT SIDE
        pContext.fillStyle = "#C4B8AC";
        pContext.lineWidth = 1;
        pContext.moveTo(0, 0);
        pContext.lineTo(-8, 3);
        pContext.lineTo(-8, 13);
        pContext.lineTo(0, 10);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();

        pContext.beginPath(); //MIDDLE
        pContext.fillStyle = "#946D5C";
        pContext.moveTo(0, 0);
        pContext.lineTo(length, 0);
        pContext.lineTo(length, 10);
        pContext.lineTo(0, 10);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();

        pContext.beginPath(); //RIGHT SIDE
        pContext.fillStyle = "#434248";
        pContext.moveTo(length, 0);
        pContext.lineTo(length + 8, 3);
        pContext.lineTo(length + 8, 13);
        pContext.lineTo(length, 10);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();

        //BELOW WINDOWS LAYER
        pContext.beginPath();
        pContext.fillStyle = "#F3E4CD";
        pContext.lineWidth = 1;
        pContext.moveTo(6, -10);
        pContext.lineTo(6, 0);
        pContext.lineTo(length - 4, 0);
        pContext.lineTo(length - 4, -10);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();


        //WINDOW LAYER
        drawWindow(pContext, 5, -10);

        //TOP LAYER
        pContext.beginPath(); //LEFT
        pContext.fillStyle = "#FDFFF4";
        pContext.moveTo(0, -21);
        pContext.lineTo(-8, -18);
        pContext.lineTo(-8, -48);
        pContext.lineTo(0, -52);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();

        pContext.beginPath(); //MIDDLE
        pContext.fillStyle = "#F6EAD2";
        pContext.moveTo(0, -21);
        pContext.lineTo(length, -21);
        pContext.lineTo(length, -51);
        pContext.lineTo(0, -51);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();

        pContext.beginPath(); //RIGHT
        pContext.fillStyle = "#9A9A98";
        pContext.moveTo(length, -21);
        pContext.lineTo(length + 8, -18);
        pContext.lineTo(length + 8, -48);
        pContext.lineTo(length, -51);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();

    }
    function drawTop(pContext) {
        pContext.beginPath();
        pContext.fillStyle = "#F6EAD2";
        pContext.lineWidth = 1;
        pContext.moveTo(-2, -50);
        pContext.lineTo(20, -60);
        pContext.lineTo(length - 20, -60);
        pContext.lineTo(length, -50);
        pContext.lineTo(-2, -50);
        pContext.closePath();
        pContext.stroke();
        pContext.fill();
    }

    //24 windows per row
    //5 rows
    UBuilding.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix = pMatrix,
            rowNumber = 4,
            i;

        pMatrix = Transformations.Move(pMatrix, -50, -150, pContext);

        drawTop(pContext);

        for (i = 0; i < rowNumber; i += 1) {
            drawMiddleRow(pContext);

            pMatrix = Transformations.Move(pMatrix, 0, 61, pContext);
        }


        resetMatrix.setTransform(pContext);
    };

    return UBuilding;
}());