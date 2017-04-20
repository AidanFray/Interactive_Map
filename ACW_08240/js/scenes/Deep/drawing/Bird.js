/*global Vector, Image */
var Bird = (function () {
    function Bird() {
        this.position = new Vector(-600, -200);

        this.sX = 0;
        this.sY = 0; //WILL NOT CHANGE AS THE SPRITE SHEET IS LINEAR

        this.frame = 1;

        //H x W
        this.sW = 36;
        this.sH = 38;
        this.dW = 36;
        this.dH = 38;

        this.lastcall = 0;
    }

    Bird.prototype.draw = function (pContext) {
        var bird = new Image(),
            dX = this.position.getX(),
            dY = this.position.getY();
        bird.src = 'content/bird_spritesheet.png';


        pContext.drawImage(bird, this.sX, this.sY, this.sW,
            this.sH, dX, dY, this.dW, this.dH);
    };

    Bird.prototype.update = function (deltaTime) {
        var timeFrame = 100;

        this.lastcall += deltaTime;

        //CHANGES THE FRAME OF THE ANIMATION
        if (this.lastcall > timeFrame) {
            if (this.frame === 1) {
                this.frame = 2;

                //CHANGES TO FRAME TWO
                this.sX = 36;
            } else {
                if (this.frame === 2) {
                    this.frame = 3;

                    //CHANGES TO FRAME 3
                    this.sX = 72;
                } else {
                    if (this.frame === 3) {
                        this.frame = 1;

                        //CHANGES TO FRAME 1
                        this.sX = 0;
                    }
                }
            }

            this.lastcall = 0;
        }

        //MOVES THE BIRD
        this.position.setX(this.position.getX() + 0.1 * deltaTime);

        if (this.position.getX() > 400) {
            this.position.setX(-950);
        }

    };

    return Bird;
}());