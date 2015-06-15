(function (ns) {

    'use strict';

    var renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
    renderer.setScissor(0, 0, window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    var scene  = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    var controls = new THREE.OrbitControls(camera); 

    // box
    var boxGeo = new THREE.BoxGeometry(30, 30, 30);
    var boxMat = new THREE.MeshLambertMaterial({
        color: 0xff0000
    });
    var box = new THREE.Mesh(boxGeo, boxMat);
    box.position.z = -10;
    scene.add(box);

    // light
    var light = new THREE.DirectionalLight(0xfffffff);
    light.position.set(1, 1, 1);
    scene.add(light);

    var ambient = new THREE.AmbientLight(0x666666);
    scene.add(ambient);

    var prevTime = Date.now();
    (function loop() {
        box.rotation.x += 0.02;
        box.rotation.y += 0.02;
        renderer.render(scene, camera);

        controls.update();

        setTimeout(loop, 16);
    }());

}(window.OculusLP));
