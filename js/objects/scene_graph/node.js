var Node = (function () {
    function Node(pMatrix) {
        this.setLocalMatrix(pMatrix);

        this.mChildren = [];
    }

    Node.prototype.setLocalMatrix = function (pMatrix) {
        this.mMatrix = pMatrix;
    };
    Node.prototype.addChildren = function (pChildNode) {
        this.mChildren.push(pChildNode);
    };
    Node.prototype.numberOfChildren = function () {
        return this.mChildren.length;
    };
    Node.prototype.getChildElement = function (id) {
        return this.mChildren[id];
    };

    Node.prototype.draw = function (pContext) {
        var i,
            resetMatrix = this.mMatrix;

        this.mMatrix.setTransform(pContext);

        //LOOPS THROUGH THE DRAW METHODS OF THE CHILDREN       
        for (i = 0; i < this.numberOfChildren(); i += 1) {
            this.mChildren[i].draw(pContext, this.mMatrix);
        }

        resetMatrix.setTransform(pContext);
    };
    Node.prototype.update = function (deltaTime) {

        //LOOPS THROUGH ALL THE CHILDRENS UPDATE METHODS
        var i;
        for (i = 0; i < this.numberOfChildren(); i += 1) {
            if (this.mChildren[i].update !== undefined) {
                this.mChildren[i].update(deltaTime);
            }
        }
    };
    Node.prototype.reset = function () {
        var i;
        for (i = 0; i < this.numberOfChildren(); i += 1) {
            if (this.mChildren[i].reset !== undefined) {
                this.mChildren[i].reset();
            }
        }
    };

    return Node;
}());