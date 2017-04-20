/*global window, document, Vector, alert, Node,
Transformations, requestAnimationFrame, Image, Map, Main, Scene*/
var Map = (function () {
    function Map(pSize, pPosition) {

        //DEFAULT CHECK FOR SIZE
        if (pSize === undefined) {
            this.setSize(600);

        } else {
            this.setSize(pSize);
        }

        //DEFAULT CHECK FOR POSITION
        if (pPosition === undefined) {
            this.setPosition(new Vector(0, 0));
        } 

        this.zoomDEEP = false;
        this.zoomKCOM = false;
        this.zoomUNI = false;
    }

    Map.prototype.setSize = function (pSize) {
        this.size = pSize;
    };
    Map.prototype.getSize = function () {
        return this.size;
    };

    Map.prototype.setPosition = function (pPosition) {
        this.position = pPosition;
    };

    Map.prototype.setZoomBool = function (zoom, str) {
        if (str === 'deep') { //DEEP
            this.zoomDEEP = zoom;
        }

        if (str === 'kcom') { //KCOM
            this.zoomKCOM = zoom;
        }

        if (str === 'uni') { //UNI
            this.zoomUNI = zoom;
        }
    };

    function drawClickPrompts(pContext) {
        var linewidth = 3,
            colour = "#F08080";

        //DEEP
        pContext.beginPath();
        pContext.lineWidth = linewidth;
        pContext.strokeStyle = colour;
        pContext.moveTo(27, 175);
        pContext.arc(7, 175, 20, 0, 2 * Math.PI, true);
        pContext.stroke();
        //KCOM
        pContext.beginPath();
        pContext.lineWidth = linewidth;
        pContext.strokeStyle = colour;
        pContext.moveTo(-97, 130);
        pContext.arc(-117, 130, 20, 0, 2 * Math.PI, true);
        pContext.stroke();

        //UNI
        pContext.beginPath();
        pContext.lineWidth = linewidth;
        pContext.strokeStyle = colour;
        pContext.moveTo(-96, -32);
        pContext.arc(-116, -32, 20, 0, 2 * Math.PI, true);
        pContext.stroke();

        pContext.strokeStyle = "#000000";
    }

    Map.prototype.draw = function (pContext, pMatrix) {
        pMatrix = null; //NOT USED
        var image, size, x, y;

        //GETS THE ASSIAGNED SIZE OF THE IMAGE
        size = this.getSize();

        //THIS IS USED TO INITALISE THE IMAGE POSITION
        if (!(this.zoomDEEP) && !(this.zoomKCOM) && !(this.zoomUNI)) {
            this.position.setX((-size / 2));
            this.position.setY((-size / 2));
        }

        x = this.position.getX();
        y = this.position.getY();

        //======================IMAGE LOADING=======================
        image = new Image();
        image.src = 'content/Hull_Outline_Vector.svg';
        image.onload = function () {
            pContext.drawImage(image, x,
               y, size, size);
        };
        //==========================================================

        if (!(this.zoomDEEP) && !(this.zoomKCOM) && !(this.zoomUNI)) {
            drawClickPrompts(pContext);
        }

    };

    Map.prototype.finishedZoom = function (positionCheck) {
        //CHECKING IF THE ZOOM ANIMAION HAS FINISHED
        if (positionCheck.getX() === this.position.getX() &&
                positionCheck.getY() === this.position.getY()) {
            return true;
        }
        return false;
    };

    //------------------UPDATE LOGIC---------------------
    Map.prototype.deepZoom = function (deltaTime) { //DEEP
        if (this.zoomDEEP === true) { //WILL ONLY START ZOOMING WHEN IT NEEDS TO

            var positionCheck = new Vector(this.position.getX(), this.position.getY());

            if (this.size < 1700) {
                this.size += (2 * deltaTime);
            }
            if (this.position.getX() > -750) {
                this.position.setX(this.position.getX() - (0.8 * deltaTime));
            }
            if (this.position.getY() > -1250) {
                this.position.setY(this.position.getY() - (1.7 * deltaTime));
            }

            //WHEN THE ZOOM HAS FINISHED
            if (this.finishedZoom(positionCheck)) {
                Scene.setScene(2);
            }

        }
    };
    Map.prototype.kcomZoom = function (deltaTime) {
        if (this.zoomKCOM === true) { //WILL ONLY START ZOOMING WHEN IT NEEDS TO
            var positionCheck = new Vector(this.position.getX(), this.position.getY());

            if (this.size < 1700) {
                this.size += (1.65 * deltaTime);
            }
            if (this.position.getX() > -400) {
                this.position.setX(this.position.getX() - (0.8 * deltaTime));
            }
            if (this.position.getY() > -1200) {
                this.position.setY(this.position.getY() - (1.3 * deltaTime));
            }

            //WHEN THE IMAGE HAS FINISHED ZOOMING
            if (this.finishedZoom(positionCheck)) {
                Scene.setScene(3);
            }
        }
    };
    Map.prototype.uniZoom = function (deltaTime) {
        if (this.zoomUNI === true) { //WILL ONLY START ZOOMING WHEN IT NEEDS TO

            //USED TO CHECK WHEN THE ZOOM HAS FINISHED
            var positionCheck = new Vector(this.position.getX(), this.position.getY());

            if (this.size < 2000) {
                this.size += (1.8 * deltaTime);
            }
            if (this.position.getX() > -550) {
                this.position.setX(this.position.getX() - (0.7 * deltaTime));
            }
            if (this.position.getY() > -800) {
                this.position.setY(this.position.getY() - (0.7 * deltaTime));
            }

            if (this.finishedZoom(positionCheck)) {
                Scene.setScene(4);
            }
        }
    };
    Map.prototype.update = function (deltaTime) {
        this.deepZoom(deltaTime);
        this.kcomZoom(deltaTime);
        this.uniZoom(deltaTime);
    };
    Map.prototype.reset = function () {
        this.setSize(600);
        this.setPosition(new Vector(0, 0));

        this.zoomDEEP = false;
        this.zoomKCOM = false;
        this.zoomUNI = false;
    };
    return Map;
}());