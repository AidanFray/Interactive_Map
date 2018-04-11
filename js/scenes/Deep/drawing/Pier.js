/*global Node, Scene, Building, Pier, Transformations*/
var Pier = (function () {
    function Pier() {

    }

    Pier.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix = pMatrix;

        pMatrix = Transformations.Move(pMatrix, -400, 100, pContext);

        pContext.beginPath();
        pContext.lineWidth = 2;
        pContext.fillStyle = "#6C7767";
        pContext.moveTo(-10, 8);
        pContext.lineTo(650, 8);
        pContext.lineTo(690, 40);
        pContext.lineTo(-10, 40);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();

        resetMatrix.setTransform(pContext);
    };

    return Pier;
}());