/*global Transformations*/
var SkyBackground = (function () {
    function SkyBackground() {

    }

    SkyBackground.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix = pMatrix;

        pMatrix = Transformations.Move(pMatrix, -460, -460, pContext);

        pContext.beginPath();
        pContext.fillStyle = "#ACC8EF";

        pContext.fillRect(0, 0, 800, 800);

        resetMatrix.setTransform(pContext);
    };

    return SkyBackground;
}());