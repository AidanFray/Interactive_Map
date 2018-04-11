/*global Transformations*/
var Stairs = (function () {
    function Stairs() {

    }

    function drawStairs(pContext) {
        var xGapBetweenSteps = 10,
            numberOfSteps = 8,
            height = 50,
            yGapBetweenSteps = height / numberOfSteps,
            i,
            x,
            y,
            length = 160;

        pContext.beginPath();
        pContext.fillStyle = "#A5977D";
        pContext.lineWidth = 1;
        for (i = 0; i < numberOfSteps; i += 1) {
            x = xGapBetweenSteps * i;
            y = -yGapBetweenSteps * i;

            pContext.moveTo(x, y);
            pContext.lineTo(x, y - yGapBetweenSteps);
            pContext.lineTo(x + length, y - yGapBetweenSteps);
            pContext.lineTo(x + length, y);
            pContext.closePath();

        }
        pContext.fill();
        pContext.stroke();
    }


    Stairs.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix = pMatrix;

        //MOVES TO BOTTOM LEFT CORNER
        pMatrix = Transformations.Move(pMatrix, -460, 240, pContext);

        drawStairs(pContext);

        resetMatrix.setTransform(pContext);
    };

    return Stairs;
}());