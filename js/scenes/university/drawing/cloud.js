/*global Vector*/
var A_Cloud = (function () {
    function A_Cloud() {
        this.position = new Vector(-200, -100); //WILL CORESPOND WITH CANVAS POSITION
    }


    function drawCloud(pContext, x, y) {

        pContext.beginPath();
        pContext.fillStyle = "#ffffff";
        pContext.lineWidth = 2;
        pContext.moveTo(x, y);
        pContext.lineTo(x + 24, y);
        pContext.moveTo(x, y);
        pContext.lineTo(x -= 100, y); //BOTTOM
        pContext.arc(x, y -= 20, 20, Math.PI / 2, Math.PI + 1.4, false);
        pContext.arc(x += 7, y -= 35, 15, Math.PI / 2, Math.PI + 2, false);
        pContext.arc(x += 35, y -= 8, 30, Math.PI + 0.2, Math.PI + 2.7, false);
        pContext.arc(x += 42, y -= 0, 20, Math.PI + 0.8, Math.PI + 3.5, false);
        pContext.arc(x += 34, y += 34, 30, Math.PI + 1.0, Math.PI + 4.5, false);
        pContext.fill();
        pContext.stroke();

    }

    A_Cloud.prototype.draw = function (pContext, pMatrix) {
        var resetMatrx = pMatrix,
            x = this.position.getX(),
            y = this.position.getY();

        drawCloud(pContext, x, y);


        resetMatrx.setTransform(pContext);
    };

    A_Cloud.prototype.update = function (deltaTime) {
        this.position.setX(this.position.getX() + 0.01 * deltaTime);


        if (this.position.getX() > 800) {
            this.position.setX(-450);
        }


    };


    return A_Cloud;
}());