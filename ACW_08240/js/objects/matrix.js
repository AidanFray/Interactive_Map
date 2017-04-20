/*global window, document, Vector, alert, house, House, houseVec */

var Matrix = (function () {

    function Matrix(pX1, pX2, pX3, pY1, pY2, pY3, pZ1, pZ2, pZ3) {

        //SAVES THE ARRAY CONTENT
        this.arrayMatrix = [
            [pX1, pX2, pX3],
            [pY1, pY2, pY3],
            [pZ1, pZ2, pZ3]
        ];
    }

    Matrix.prototype.duplicate = function () {
        var m_matrix = new Matrix(
            this.getElement(0, 0),
            this.getElement(0, 1),
            this.getElement(0, 2),
            this.getElement(1, 0),
            this.getElement(1, 1),
            this.getElement(1, 2),
            this.getElement(2, 0),
            this.getElement(2, 1),
            this.getElement(2, 2)
        );

        return m_matrix;
    };

    Matrix.prototype.getElement = function (row, column) {
        return this.arrayMatrix[row][column];
    };

    Matrix.prototype.setElement = function (row, column, value) {
        this.arrayMatrix[row][column] = value;
    };

    Matrix.createIdentity = function () {
        var m_matrix;

        m_matrix = new Matrix(1, 0, 0,
                             0, 1, 0,
                             0, 0, 1);

        return m_matrix;
    };

    Matrix.createTranslation = function (translationVector) {
        var m_matrix = new Matrix(1, 0, translationVector.getX(),
                                  0, 1, translationVector.getY(),
                                  0, 0, 1);

        return m_matrix;
    };

    Matrix.createScale = function (scaleVector) {
        var m_matrix = new Matrix(scaleVector.getX(), 0, 0,
                                  0, scaleVector.getY(), 0,
                                  0, 0, 1);

        return m_matrix;
    };

    Matrix.createRotation = function (scalar) {
        var m_matrix = new Matrix(Math.cos(scalar), -Math.sin(scalar), 0,
                                  Math.sin(scalar), Math.cos(scalar), 0,
                                  0, 0, 1);


        return m_matrix;
    };

    Matrix.createReflectionY = function () {
        var m_matrix = new Matrix(-1, 0, 0,
                                  0, 1, 0,
                                  0, 0, 1);

        return m_matrix;
    };

    Matrix.createReflectionX = function () {
        var m_matrix = new Matrix(1, 0, 0,
                                 0, -1, 0,
                                 0, 0, 1);

        return m_matrix;
    };

    Matrix.prototype.multiply = function (p_matrix) {
        var m_matrix, out_matrix, x, y;

        out_matrix = new Matrix(0, 0, 0, 0, 0, 0, 0, 0, 0);

        m_matrix = this.duplicate();

        for (y = 0; y <= 2; y += 1) {
            for (x = 0; x <= 2; x += 1) {

                out_matrix.setElement(x, y,
                    (m_matrix.getElement(x, 0) * p_matrix.getElement(0, y)) +
                    (m_matrix.getElement(x, 1) * p_matrix.getElement(1, y)) +
                    (m_matrix.getElement(x, 2) * p_matrix.getElement(2, y)));
            }
        }
        return out_matrix;
    };

    Matrix.prototype.multiplyVector = function (p_vector) {
        var newVector, matrix, vectorCoordinates, i;

        matrix = this.duplicate();

        vectorCoordinates = [];

        //LOOPS THOUGH AND DOES THE SAME ARITHMATIC FOR X, Y AND Z
        for (i = 0; i <= 2; i += 1) {
            vectorCoordinates.push((matrix.getElement(i, 0) * p_vector.getX()) +
                (matrix.getElement(i, 1) * p_vector.getY()) +
                (matrix.getElement(i, 2) * p_vector.getZ()));
        }

        //CREATES THE NEW VECTOR
        newVector = new Vector(
            vectorCoordinates[0],
            vectorCoordinates[1],
            vectorCoordinates[2]
        );


        return newVector;
    };

    Matrix.prototype.aleart = function () {
        var string, x, y;

        string = "MATRIX";

        for (y = 0; y <= 2; y += 1) {
            string += "\nl";

            for (x = 0; x <= 2; x += 1) {
                string += this.getElement(y, x) + " "; // x and y are flipped
            }
        }

        alert(string);
    };

    Matrix.prototype.setTransform = function (pContext) {

        pContext.setTransform(this.getElement(0, 0), this.getElement(1, 0),
                              this.getElement(0, 1), this.getElement(1, 1),
                              this.getElement(0, 2), this.getElement(1, 2));
    };

    Matrix.prototype.transform = function (pContext) {

        pContext.transform(this.getElement(0, 0), this.getElement(1, 0),
                           this.getElement(0, 1), this.getElement(1, 1),
                           this.getElement(0, 2), this.getElement(1, 2));

    };
    return Matrix;
}());