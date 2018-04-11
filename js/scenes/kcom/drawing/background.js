/*global Transformations, Image*/
var Background = (function () {

    function Background() {

    }

    function drawBackground(pContext) {
        pContext.beginPath();
        pContext.fillStyle = "#AFAFAF";
        pContext.fillRect(0, 0, 800, 800);
    }

    Background.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix = pMatrix;

        pMatrix = Transformations.Move(pMatrix, -400, -400, pContext);

        drawBackground(pContext);


        resetMatrix.setTransform(pContext);
    };

    return Background;
}());