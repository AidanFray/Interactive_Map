/*global Node, Scene, Building, Pier, Sea, Sky, Bird
*/

var Deep = (function () {

    var mainNode;
    function Deep(pMatrix) {
        this.matrix = pMatrix;

        mainNode = new Node(pMatrix);

        mainNode.addChildren(new Sky());
        mainNode.addChildren(new Bird());
        mainNode.addChildren(new Sea());
        mainNode.addChildren(new Pier());
        mainNode.addChildren(new Building());

    }
    Deep.prototype.draw = function (pContext) {
        mainNode.draw(pContext, this.matrix);
    };

    Deep.prototype.update = function (deltaTime) {
        mainNode.update(deltaTime);
    };

    return Deep;
}());