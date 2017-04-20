/*global Transformations*/
var Building = (function () {
    function Building() {

    }

    //_TODO: ORGANISE DRAWING SECTIONS INTO METHODS
    Building.prototype.draw = function (pContext, pMatrix) {
        var resetMatrix = pMatrix, rReset, i, xLines, yLines, xLines2;

        pContext.lineWidth = 2;

        //MOVES THE CANVAS
        pMatrix = Transformations.Move(pMatrix, -250, 0, pContext);
        pMatrix = Transformations.Rotate(pMatrix, 6.125, pContext);

        //TOP LINE
        pContext.beginPath();
        pContext.moveTo(0, 0);
        pContext.lineTo(500, 0);
        pContext.stroke();

        //TOP TRIANGLE
        pContext.beginPath();
        pContext.fillStyle = "#FAFBFF";
        pContext.moveTo(500, 0);
        pContext.lineTo(440, 100);
        pContext.lineTo(400, 0);
        pContext.fill();

        //LINES ON THE TRIANGLE
        xLines = 435;
        yLines = 90;
        xLines2 = 490;
        pContext.lineWidth = 2;
        rReset = pMatrix;
        for (i = 0; i < 8; i += 1) {
            pContext.moveTo(xLines, yLines);
            pContext.lineTo(xLines2, 0);

            xLines -= 4;
            yLines -= 10;
            xLines2 -= 10;
        }

        pContext.stroke();

        //TRIANGLE SKIRT
        pContext.beginPath();
        pContext.lineWidth = 2;
        pContext.fillStyle = '#8DC8DA';
        pContext.moveTo(400, 0);
        pContext.lineTo(440, 100);
        pContext.lineTo(435, 100);
        pContext.lineTo(403, 150);
        pContext.lineTo(390, 150);
        pContext.lineTo(394, 130);
        pContext.lineTo(350, 30);
        pContext.lineTo(380, 30);
        pContext.lineTo(370, 0);
        pContext.lineTo(400, 0);
        pContext.fill();
        pContext.stroke();

        //SIDE SQUARES
        pContext.beginPath();
        pContext.fillStyle = '#E1ECF0';
        pContext.moveTo(350, 30);
        pContext.lineTo(337, 0);
        pContext.lineTo(370, 0);
        pContext.lineTo(380, 30);
        pContext.fill();
        pContext.stroke();


        //SIDE STRIPES
        pContext.beginPath();
        pContext.fillStyle = '#9FB7BB';
        pContext.moveTo(100, 0);
        pContext.lineTo(85, 60);
        pContext.moveTo(95, 20);
        pContext.lineTo(345, 20);
        pContext.moveTo(90, 40);
        pContext.lineTo(355, 40);
        pContext.moveTo(85, 60);
        pContext.lineTo(365, 60);
        pContext.lineTo(339, 0);
        pContext.lineTo(100, 0);
        pContext.fill();
        pContext.stroke();

        pContext.beginPath();
        pContext.fillStyle = '#9FB7BB';
        pContext.moveTo(200, 60);
        pContext.lineTo(220, 80);//
        pContext.lineTo(373, 80);
        pContext.lineTo(364, 59);
        pContext.lineTo(200, 60);
        pContext.fill();
        pContext.stroke();

        pContext.beginPath();
        pContext.fillStyle = '#9FB7BB';
        pContext.moveTo(364, 59);
        pContext.lineTo(394, 130);
        pContext.lineTo(389, 170);
        pContext.lineTo(368, 167);
        pContext.lineTo(369, 160);
        pContext.lineTo(335, 80);
        pContext.lineTo(373, 80);
        pContext.fill();
        pContext.stroke();

        pContext.beginPath();
        pContext.moveTo(380, 100);
        pContext.lineTo(345, 100);
        pContext.moveTo(390, 120);
        pContext.lineTo(353, 120);
        pContext.moveTo(393, 140);
        pContext.lineTo(360, 140);
        pContext.moveTo(389, 170);
        pContext.stroke();

        //BLUE UNDERBELLY
        pContext.beginPath();
        pContext.fillStyle = "#326D73";
        pContext.lineTo(368, 167);
        pContext.lineTo(369, 160);
        pContext.lineTo(335, 80);
        pContext.lineTo(220, 80);
        pContext.lineTo(200, 60);
        pContext.lineTo(85, 60);
        pContext.lineTo(68, 120);
        pContext.lineTo(368, 167);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();

        //BACK FOREFRONT
        pContext.beginPath();
        pContext.fillStyle = "#A0C1CA";
        pContext.moveTo(0, 0);
        pContext.lineTo(-10, 108);
        pContext.lineTo(69, 120);
        pContext.lineTo(100, 0);
        pContext.lineTo(0, 0);
        pContext.fill();
        pContext.stroke();

        //BACK
        pContext.beginPath();
        pContext.fillStyle = "#C7DAE0";
        pContext.moveTo(0, 0);
        pContext.lineTo(-100, 40);
        pContext.lineTo(-90, 95);
        pContext.lineTo(-10, 108);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();

        //RESETS THE CANVAS
        resetMatrix.setTransform(pContext);

    };

    return Building;
}());