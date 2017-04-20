/*global Transformations*/
var Pitch = (function () {
    function Pitch() {

    }

    function drawPitch(pContext) {
        pContext.beginPath();
        pContext.fillStyle = '#5D713E';
        pContext.moveTo(0, 0);
        pContext.lineTo(0, 150);
        pContext.lineTo(260, 150);
        pContext.lineTo(260, 0);
        pContext.closePath();
        pContext.fill();
    }
    function drawMarkings(pContext) {
        pContext.beginPath();
        pContext.lineWidth = 0.3;
        pContext.strokeStyle = '#ffffff';

        pContext.arc(0, 0, 20, 0, 2 * Math.PI, true);
        pContext.moveTo(0, 0);
        pContext.lineTo(0, 55);
        pContext.lineTo(100, 55);
        pContext.lineTo(100, -55);
        pContext.moveTo(100, 20);
        pContext.lineTo(80, 20);
        pContext.lineTo(80, -20);
        pContext.lineTo(100, -20);
        pContext.lineTo(100, -55);
        pContext.lineTo(0, -55);
        pContext.lineTo(0, 0);

        pContext.stroke();
        pContext.strokeStyle = '#000000';
    }
    function drawShadow(pContext) {
        pContext.beginPath();

        pContext.lineWidth = 0.1;

        pContext.fillStyle = '#424C33';
        pContext.moveTo(0, 0);
        pContext.lineTo(-20, 25);
        pContext.lineTo(-30, 50);
        pContext.lineTo(-30, 100);
        pContext.lineTo(-20, 125);
        pContext.lineTo(0, 150);
        pContext.lineTo(30, 160);
        pContext.lineTo(60, 165);
        pContext.lineTo(140, 167);
        pContext.lineTo(180, 165);
        pContext.lineTo(230, 160);
        pContext.lineTo(229, 160);

        pContext.lineTo(190, 174);
        pContext.lineTo(150, 175);
        pContext.lineTo(100, 176);
        pContext.lineTo(60, 175);
        pContext.lineTo(15, 174);
        pContext.lineTo(-30, 160);

        pContext.lineTo(-52, 130);
        pContext.lineTo(-60, 110);
        pContext.lineTo(-60, 60);
        pContext.lineTo(-50, 35);
        pContext.lineTo(-30, 10);

        pContext.fill();
        pContext.closePath();
    }

    Pitch.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix = pMatrix;

        pMatrix = Transformations.Move(pMatrix, -200, -100, pContext);
        drawPitch(pContext);

        //SHADOW
        resetMatrix.setTransform(pContext);
        pMatrix = resetMatrix;
        pMatrix = Transformations.Move(pMatrix, 30, 60, pContext);
        pMatrix = Transformations.Rotate(pMatrix, Math.PI, pContext);
        drawShadow(pContext);

        //MARKINGS
        resetMatrix.setTransform(pContext);
        pMatrix = resetMatrix;
        pMatrix = Transformations.Move(pMatrix, -75, -25, pContext);
        drawMarkings(pContext);

        pMatrix = Transformations.Rotate(pMatrix, Math.PI, pContext);
        drawMarkings(pContext);

        resetMatrix.setTransform(pContext);
    };


    return Pitch;
}());