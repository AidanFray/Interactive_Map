/*global Matrix, Vector*/
var Transformations = (function () {
    function Transformations() {

    }

    Transformations.Move = function (pMatrix, x, y, pContext) {
        var matrix = pMatrix.multiply(Matrix.createTranslation(new Vector(x, y)));
        matrix.setTransform(pContext);
        return matrix;
    };

    Transformations.Scale = function (pMatrix, ScaleVal, pContext) {
        var matrix = pMatrix.multiply(Matrix.createScale(new Vector(ScaleVal, ScaleVal)));
        matrix.setTransform(pContext);
        return matrix;
    };

    Transformations.Rotate = function (pMatrix, Angle, pContext) {
        var matrix = pMatrix.multiply(Matrix.createRotation(Angle));
        matrix.setTransform(pContext);
        return matrix;
    };

    Transformations.ReflectY = function (pMatrix, pContext) {
        var matrix = pMatrix.multiply(Matrix.createReflectionY());
        matrix.setTransform(pContext);
        return matrix;
    };

    Transformations.ReflectX = function (pMatrix, pContext) {
        var matrix = pMatrix.multiply(Matrix.createReflectionX());
        matrix.setTransform(pContext);
        return matrix;
    };

    return Transformations;
}());