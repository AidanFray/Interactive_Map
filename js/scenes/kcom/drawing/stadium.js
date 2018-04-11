/*global Transformations, Node*/
var Stadium = (function () {
    function Stadium() {

    }

    //STADIUM SIDES
    var stadiumColour = '#e6e6e6';
    function drawStadiumLongSide(pContext) {
        pContext.beginPath();
        pContext.fillStyle = stadiumColour;
        pContext.lineWidth = 2;
        pContext.moveTo(0, 0);
        pContext.lineTo(10, -10);
        pContext.lineTo(20, -19);
        pContext.lineTo(30, -27);
        pContext.lineTo(40, -35);
        pContext.lineTo(50, -43);
        pContext.lineTo(60, -48);
        pContext.lineTo(100, -60);
        pContext.lineTo(160, -66);
        pContext.lineTo(180, -66);
        pContext.lineTo(200, -66);
        pContext.lineTo(235, -67);
        pContext.lineTo(270, -66);
        pContext.lineTo(305, -65);
        pContext.lineTo(325, -64);
        pContext.lineTo(345, -60);
        pContext.lineTo(385, -48);
        pContext.lineTo(395, -43);
        pContext.lineTo(405, -35);
        pContext.lineTo(415, -27);
        pContext.lineTo(425, -19);
        pContext.lineTo(435, -10);
        pContext.lineTo(445, 0);
        pContext.fill();
        pContext.stroke();
    }
    function drawStadiumShortSide(pContext) {
        pContext.beginPath();
        pContext.fillStyle = stadiumColour;
        pContext.lineWidth = 2;
        pContext.moveTo(0, 0);
        pContext.lineTo(-15, 40);
        pContext.lineTo(-20, 115);
        pContext.lineTo(-15, 190);
        pContext.lineTo(0, 230);
        pContext.fill();
        pContext.stroke();
    }
    function drawStadiumMiddle(pContext) {
        pContext.beginPath();
        pContext.fillStyle = stadiumColour;

        pContext.fillRect(0, 0, 445, 230);

        pContext.fill();
        pContext.stroke();
    }

    //ROOF
    function drawRoofShortSide(pContext) {
        pContext.moveTo(0, 0);
        pContext.lineTo(-20, 25);
        pContext.lineTo(-30, 50);
        pContext.lineTo(-30, 100);
        pContext.lineTo(-20, 125);
        pContext.lineTo(0, 150);
    }
    function drawRoofLongSide(pContext) {
        pContext.moveTo(0, 0);
        pContext.lineTo(40, -14);
        pContext.lineTo(80, -16);
        pContext.lineTo(130, -18);
        pContext.lineTo(180, -16);
        pContext.lineTo(220, -14);
        pContext.lineTo(260, 0);
    }

    Stadium.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix;
        resetMatrix = pMatrix;

        //STADIUM OUTSIDE
        // +----------+
        // |          |
        // |          | <----
        // +----------+

        pMatrix = Transformations.Move(pMatrix, -300, -140, pContext);
        drawStadiumMiddle(pContext);
        //TOP LEFT
        drawStadiumLongSide(pContext);
        drawStadiumShortSide(pContext);
        //BOTTOM RIGHT
        pMatrix = Transformations.Move(pMatrix, 445, 230, pContext);
        pMatrix = Transformations.Rotate(pMatrix, Math.PI, pContext);
        drawStadiumLongSide(pContext);
        drawStadiumShortSide(pContext);

        //+-------------+
        //|      ^      |
        //|             |
        //+-------------+
        pContext.beginPath();
        resetMatrix.setTransform(pContext);
        pMatrix = resetMatrix;
        pContext.fillStyle = '#5D713E';
        //TOP ROOF SIDE
        pMatrix = Transformations.Move(pMatrix, -200, -100, pContext);
        drawRoofLongSide(pContext);
        //BOTTOM ROOF SIDE
        pMatrix = Transformations.Rotate(pMatrix, Math.PI, pContext);
        pMatrix = Transformations.Move(pMatrix, -260, -150, pContext);
        drawRoofLongSide(pContext);
        //LEFT SIDE
        resetMatrix.setTransform(pContext);
        pMatrix = resetMatrix;
        pMatrix = Transformations.Move(pMatrix, -200, -100, pContext);
        drawRoofShortSide(pContext);
        //RIGHT SIDE
        pMatrix = Transformations.Move(pMatrix, 260, 150, pContext);
        pMatrix = Transformations.Rotate(pMatrix, Math.PI, pContext);
        drawRoofShortSide(pContext);
        pContext.fill();
        pContext.stroke();


        resetMatrix.setTransform(pContext);
    };
    return Stadium;
}());