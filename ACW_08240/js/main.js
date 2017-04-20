/*global window, document, Vector, alert, Node, Matrix,
Transformations, requestAnimationFrame, Image, Map, Scene, Deep, KCOM, University,
Building*/
function onLoad() {
    var mainCanvas, mainContext, matrix, deltaTime, currentTime, previousTime,
        backbuttonColour, map, Menu, DeepScene, KcomScene, UniScene; //SCENES
    //____________________________________________________________________
    function clearCanvas() {
        mainContext.fillStyle = 'white';
        mainContext.fillRect(-mainCanvas.clientWidth * 0.5,
            -mainCanvas.clientHeight * 0.5,
            mainCanvas.clientWidth,
            mainCanvas.clientHeight);
    }

    //MOUSE
    function backHover(x, y) {
        if (!(Scene.getScene() === 1)) {
            if ((x > 48 && x < 88) && (y > 29 && y < 49)) {
                backbuttonColour = "#8c123e";
            } else {
                backbuttonColour = "#ff0000";
            }
        } else {
            backbuttonColour = "#ff0000";
        }
    }
    function backClick(x, y) {
        if (!(Scene.getScene() === 1)) {
            if ((x > 48 && x < 88) && (y > 29 && y < 49)) {
                clearCanvas();
                map.reset();
                Scene.setScene(1);
            }
        }
    }
    function getPositionOfClick(event) {
        //THIS GRABS THE X AND Y POSITION OF THE MOUSE RELATIVE 
        //TO THE POSITION ON THE CANVAS NOT THE BROWSER WINDOW
        var x, y;
        if (event.pageX || event.pageY) {
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        x -= mainCanvas.offsetLeft;
        y -= mainCanvas.offsetTop;
        ///////////////////////////////////////////////////////

        //DEEP CLICK
        if ((x > 390 && x < 410) && (y > 460 && y < 480)) {
            map.setZoomBool(true, 'deep');
        }

        //KCOM CLICK
        if ((x > 275 && x < 305) && (y > 425 && y < 445)) {
            map.setZoomBool(true, 'kcom');
        }

        //HULL LIBARY CLICK
        if ((x > 280 && x < 310) && (y > 260 && y < 280)) {
            map.setZoomBool(true, 'uni');
        }

        backClick(x, y);

    } //USED TO GET THE POSITION OF THE MOSUE
    function getPositionOfHover(event) {
        var x, y;
        if (event.pageX || event.pageY) {
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        x -= mainCanvas.offsetLeft;
        y -= mainCanvas.offsetTop;

        backHover(x, y);
    }

    //FUNCTIONS
    function changeOrginToCentreScreen() {
        var origin;

        origin = new Vector(mainCanvas.clientWidth * 0.5, mainCanvas.clientHeight * 0.5);
        matrix = new Matrix.createTranslation(origin);
        matrix.setTransform(mainContext);
    }
    function deltaTimeCal() {
        //DELTA TIME
        currentTime = Date.now();
        deltaTime = currentTime - previousTime;
    }

    //DRAWS
    function drawBackButton() {
        //OUTSIDE
        mainContext.beginPath();
        mainContext.lineWidth = 2;
        mainContext.fillStyle = backbuttonColour;
        mainContext.moveTo(-350, -270);
        mainContext.lineTo(-310, -270);
        mainContext.lineTo(-310, -250);
        mainContext.lineTo(-350, -250);
        mainContext.closePath();
        mainContext.fill();
        mainContext.stroke();

        //CROSS
        mainContext.beginPath();
        mainContext.strokeStyle = "#696969";
        mainContext.moveTo(-339, -265);
        mainContext.lineTo(-320, -255);
        mainContext.moveTo(-339, -255);
        mainContext.lineTo(-320, -265);
        mainContext.stroke();
        mainContext.strokeStyle = "#000000";
    }
    function drawCityOfCultureBadge() {
        var image = new Image(),
            ratioW = 451,
            ratioH = 242,
            scale = 0.3;
        image.src = 'content/coc.png';
        mainContext.drawImage(image, 220, -270, ratioW * scale, ratioH * scale);
    }

    //SCENE GRAPHS
    function createMenuSceneGraph() {
        Menu = new Node(matrix);
        map = new Map();
        Menu.addChildren(map);
    }
    function createDeepSceneGraph() {
        DeepScene = new Node(matrix);
        DeepScene.addChildren(new Deep(matrix));
    }
    function createKcomSceneGraph() {

        KcomScene = new Node(matrix);
        KcomScene.addChildren(new KCOM(matrix));
    }
    function createUniSceneGraph() {
        UniScene = new Node(matrix);
        UniScene.addChildren(new University(matrix));
    }

    //INIT
    function mainInit() {
        changeOrginToCentreScreen(); //MAKES THE CENTRE OF THE CANVAS 0,0
    }
    function backbuttonInit() {
        backbuttonColour = "#ff0000";
    }

    function mainLoop() {
        deltaTimeCal();

        //DEEP
        if (Scene.getScene() === 2) {
            clearCanvas();
            DeepScene.draw(mainContext, matrix);
            DeepScene.update(deltaTime);
        }

        //KCOM
        if (Scene.getScene() === 3) {
            clearCanvas();
            KcomScene.draw(mainContext, matrix);
            KcomScene.update(deltaTime);
        }

        //UNI
        if (Scene.getScene() === 4) {
            clearCanvas();
            UniScene.draw(mainContext, matrix);
            UniScene.update(deltaTime);
        }

        //MENU
        if (Scene.getScene() === 1) {
            Menu.draw(mainContext, matrix); //DRAW
            Menu.update(deltaTime); //UPDATE
        } else {
            drawBackButton(); //THE BACK BUTTTON USED TO NAVIGATE
        }

        drawCityOfCultureBadge();


        previousTime = currentTime;
        requestAnimationFrame(mainLoop);
    } //MAIN PROGRAMME LOOP

    function main() {
        //INIT
        mainInit();
        backbuttonInit();

        //MAKING SCENE GRAPHS
        createMenuSceneGraph();
        createDeepSceneGraph();
        createKcomSceneGraph();
        createUniSceneGraph();

        previousTime = Date.now;
        mainLoop();
    }

    function initialiseCanvasContext() {
        mainCanvas = document.getElementById('mainCanvas');

        //IF IT CAN'T BE FOUND
        if (!mainCanvas) {
            alert('Error: I cannot find the canvas element!');

            return;
        }

        //GETS THE 2D CAVAS CONTEXT
        mainContext = mainCanvas.getContext('2d');
        if (!mainContext) {
            alert('Error: Failed to get context!');

            return;
        }

        mainCanvas.addEventListener("mousedown", getPositionOfClick, false);
        mainCanvas.addEventListener("mousemove", getPositionOfHover, false);

        Scene.initScene();

        main();
    }
    initialiseCanvasContext();
}
window.addEventListener('load', onLoad, false);
