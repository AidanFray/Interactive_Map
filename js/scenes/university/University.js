/*global Transformations, Node, UBuilding, FrontBuilding, SkyBackground,
Matrix, Vector, Stairs, A_Cloud*/
var University = (function () {

    var mainNode;
    function University(pMatrix) {
        this.setPosition(pMatrix);

        //IF THE WHOLE SCENE NEEDS TO BE MOVED
        pMatrix = pMatrix.multiply(Matrix.createTranslation(new Vector(60, 60)));

        mainNode = new Node(pMatrix);
        mainNode.addChildren(new SkyBackground());

        mainNode.addChildren(new Stairs());
        mainNode.addChildren(new A_Cloud());
        mainNode.addChildren(new UBuilding());
        mainNode.addChildren(new FrontBuilding());

    }

    University.prototype.setPosition = function (pPosition) {
        this.position = pPosition;
    };

    University.prototype.draw = function (pContext) {
        mainNode.draw(pContext, this.martrix);
    };

    University.prototype.update = function (deltaTime) {
        mainNode.update(deltaTime);
    };

    return University;
}());