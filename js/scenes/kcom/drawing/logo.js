/*global Transformations*/
var Logo = (function () {
    function Logo() {

    }

    function drawLogo(pContext) {
        pContext.beginPath();
        pContext.lineWidth = 5;
        pContext.strokeStyle = "#F28D2C";

        //K
        pContext.moveTo(0, 0);
        pContext.lineTo(0, 40);

        pContext.moveTo(3, 20);
        pContext.lineTo(20, 2);

        pContext.moveTo(3, 20);
        pContext.lineTo(20, 38);

        //C
        pContext.moveTo(65, 7);
        pContext.arc(50, 20, 18, -0.7, 0.5, true);

        //O
        pContext.moveTo(113, 20);
        pContext.arc(95, 20, 18, 0, 2 * Math.PI, true);

        //M
        pContext.moveTo(130, 40);
        pContext.lineTo(130, 20);

        pContext.moveTo(130, 0);
        pContext.lineTo(145, 16);
        pContext.lineTo(160, 0);
        pContext.moveTo(160, -2);
        pContext.lineTo(160, 40);

        pContext.stroke();

        pContext.strokeStyle = "#000000";
    }

    Logo.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix = pMatrix;
        pMatrix = Transformations.Scale(pMatrix, 0.4166666, pContext);
        pMatrix = Transformations.Move(pMatrix, -270, 90, pContext);

        drawLogo(pContext);

        pMatrix = Transformations.Move(pMatrix, 165, -300, pContext);
        pMatrix = Transformations.ReflectX(pMatrix, pContext);
        pMatrix = Transformations.ReflectY(pMatrix, pContext);

        drawLogo(pContext);


        resetMatrix.setTransform(pContext);
    };

    return Logo;
}());