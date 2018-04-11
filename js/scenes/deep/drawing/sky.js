/*global Transformations*/
var Sky = (function () {
    function Sky() {

    }

    Sky.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix;
        resetMatrix = pMatrix;

        pMatrix = Transformations.Move(pMatrix, -400, 110, pContext);
        pMatrix = Transformations.Rotate(pMatrix, 0.0174533, pContext);

        pContext.beginPath();
        pContext.lineWidth = 0.1;
        pContext.fillStyle = "#EFF4F8";

        pContext.moveTo(0, 0);
        pContext.lineTo(800, 0);
        pContext.lineTo(800, -450);
        pContext.lineTo(0, -450);
        pContext.closePath();

        pContext.fill();
        pContext.stroke();


        resetMatrix.setTransform(pContext);
    };

    return Sky;
}());