/*global Transformations*/
var Sea = (function () {
    function Sea() {

    }

    Sea.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix;
        resetMatrix = pMatrix;

        pMatrix = Transformations.Move(pMatrix, -400, 110, pContext);
        pMatrix = Transformations.Rotate(pMatrix, 0.0174533, pContext);

        pContext.beginPath();
        pContext.lineWidth = 0.1;
        pContext.fillStyle = "#7FC9FF";
        pContext.moveTo(0, 0);
        pContext.lineTo(800, 0);
        pContext.lineTo(800, 350);
        pContext.lineTo(0, 350);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();


        resetMatrix.setTransform(pContext);
    };

    return Sea;
}());