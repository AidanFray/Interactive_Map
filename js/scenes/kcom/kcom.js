/*global Transformations, Node, Stadium, Background, Pitch,
Road, Parking, Matrix, Vector, Logo*/
var KCOM = (function () {

    var mainNode;
    function KCOM(pMatrix) {
        this.matrix = pMatrix;

        pMatrix = pMatrix.multiply(Matrix.createScale(new Vector(2.4, 2.4)));

        mainNode = new Node(pMatrix);
        mainNode.addChildren(new Background());
        mainNode.addChildren(new Road());
        mainNode.addChildren(new Parking());
        mainNode.addChildren(new Stadium());
        mainNode.addChildren(new Pitch());
        mainNode.addChildren(new Logo());
    }
    KCOM.prototype.draw = function (pContext) {
        mainNode.draw(pContext, this.matrix);
    };

    KCOM.prototype.update = function (deltaTime) {
        deltaTime = null; //EMPTY
    };

    return KCOM;
}());