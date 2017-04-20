/*global alert*/

var Scene = (function () {
    function Scene() {

    }
    var SceneEnum, scene;

    Scene.initScene = function () {
        SceneEnum = {
            MENU: 1,
            DEEP: 2,
            KCOM: 3,
            UNI: 4
        };

        scene = SceneEnum.MENU;
    };

    Scene.setScene = function (value) {
        if (value >= 1 && value <= 4) {
            scene = value;
        } else {
            alert("NO SCENE WITH: " + value); //ERROR
        }
    };

    Scene.getScene = function () {
        return scene;
    };

    return Scene;
}());
