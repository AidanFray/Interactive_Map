var Vector = (function () {
    function Vector(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }

    //------------------X-----------------
    Vector.prototype.getX = function () {
        return this.mX;
    };
    Vector.prototype.setX = function (pX) {
        this.mX = pX;
    };

    //------------------Y-----------------
    Vector.prototype.getY = function () {
        return this.mY;
    };
    Vector.prototype.setY = function (pY) {
        this.mY = pY;
    };

    //------------------Z-----------------
    Vector.prototype.getZ = function () {
        return this.mZ;
    };
    Vector.prototype.setZ = function (pZ) {
        this.mZ = pZ;
    };

    Vector.prototype.add = function (seccondVector) {

        var AddVector = new Vector(this.getX(), this.getY());

        //ADD X
        AddVector.setX(AddVector.getX() + seccondVector.getX());

        //ADD Y
        AddVector.setY(AddVector.getY() + seccondVector.getY());

        return AddVector;
    }; //USED TO ADD A VECTOR ONTO THE PARENT VECTOR 

    Vector.prototype.subtract = function (seccondVector) {

        var SubVector = new Vector(this.getX(), this.getY());

        //ADD X
        SubVector.setX(SubVector.getX() - seccondVector.getX());

        //ADD Y
        SubVector.setY(SubVector.getY() - seccondVector.getY());

        return SubVector;
    };  //USED TO SUBTRACTS A VECTOR ONTO THE PARENT VECTOR   

    Vector.prototype.multiply = function (scalar) {
        var MultVector = new Vector(this.getX(), this.getY());

        MultVector.setX(MultVector.getX() * scalar);

        MultVector.setY(MultVector.getY() * scalar);

        return MultVector;
    };  //USED TO MULTIPLY THE PARENT VECTOR BY A SCALAR VALUE

    Vector.prototype.divide = function (scalar) {
        var DivVector = new Vector(this.getX(), this.getY());

        DivVector.setX(DivVector.getX() / scalar);

        DivVector.setY(DivVector.getY() / scalar);

        return DivVector;
    }; //USED TO MULTIPLY THE PARENT VECTOR BY A SCALAR VECTOR

    Vector.prototype.magnitude = function () {
        var Magnitude;

        Magnitude = Math.sqrt((this.getX() * this.getX()) + (this.getY() * this.getY()));

        return Magnitude;
    };

    Vector.prototype.normalise = function () {
        var normalisedVector = new Vector(0, 0);

        normalisedVector.setX(this.getX() / this.magnitude());
        normalisedVector.setY(this.getY() / this.magnitude());

        return normalisedVector;
    };  //[NOTE] - NORMALISING IS DIVIDING A VECTOR BY IT'S MAGNITUDE

    Vector.prototype.limitTo = function (limitMagVal) {
        var CurrentMagnitude, ReductionFactor, LimitedVector;

        //NEED TO A NEW VECTOR OBJECT REFERENCE
        LimitedVector = new Vector(0, 0);

        //GRABS THE VECTORS CURRENT MAGNITUDE
        CurrentMagnitude = this.magnitude();

        if (CurrentMagnitude > limitMagVal) {

            ReductionFactor = CurrentMagnitude / limitMagVal;

            LimitedVector.setX(this.getX() / ReductionFactor);
            LimitedVector.setY(this.getY() / ReductionFactor);

            return LimitedVector;
        }
        return this;
    }; //USED TO LIMIT THE MAGNITUDE OF A VECTOR

    Vector.prototype.dotProduct = function (seccondVector) {
        var dotProduct;

        dotProduct = (this.getX() * seccondVector.getX()) +
            (this.getY() * seccondVector.getY());

        return dotProduct;
    };   //DOT PRODUCT CAN BE USED TO FIND THE ANGLE BETWEEN TWO VECTORS

    Vector.prototype.interpolate = function (seccondVector, scalar) {

        if (0 < scalar <= 1) {
            var newVec = seccondVector.subtract(this); //FINDS THE DIFFERENCE

            newVec = newVec.multiply(scalar);

            newVec = this.add(newVec); //THEN THE INTERPOLATED VECTOR IS ADDED ON 

            return newVec;
        }
    };

    Vector.prototype.angleBetween = function (seccondVector) {
        //EQUATION BEING USED:
        //a.b = |a| * |b| * cos(X) where X is the angle between

        var angle = Math.acos((this.dotProduct(seccondVector)) /
            (this.magnitude() * seccondVector.magnitude()));

        return angle;
    };

    Vector.prototype.rotate = function (rotation) {
        //EQUATION
        // x = x * Cos(X) - y * Sin(x)
        // y = x * Sin(X) + y * Cos(x)

        var NewVector, x, y;

        NewVector = new Vector(this.getX(), this.getY());
        x = NewVector.getX();
        y = NewVector.getY();

        NewVector.setX((x * Math.cos(rotation)) - (y * Math.sin(rotation)));
        NewVector.setY((x * Math.sin(rotation)) + (y * Math.cos(rotation)));

        return NewVector;
    };

    return Vector;
}());