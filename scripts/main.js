const createCamera = function (scene) {
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 90, BABYLON.Vector3.Zero(), scene);

    camera.lowerBetaLimit = 0.1;
    camera.upperBetaLimit = (Math.PI / 2) * 0.9;
    camera.lowerRadiusLimit = 1;
    camera.upperRadiusLimit = 150;
    camera.attachControl(canvas, true);

    return camera;
}

const createLight = function (position, scene) {
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1}, scene);
    sphere.position = position;
    
    var light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0.5, -1, 0), scene);
    light.position = position;
    light.intensity = 1.0;
    // light.shadowMaxZ = 100;
    // light.shadowMinZ = 20;

    return light;
}

const createShadows = function (light, scene) {
    var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);

    shadowGenerator.useKernelBlur = true;
    shadowGenerator.blurKernel = 64;
    shadowGenerator.useContactHardeningShadow = true;

    return shadowGenerator;
}

const createPBRMaterial = function (name, scene) {
    const pbrMaterial = new BABYLON.PBRMaterial(name, scene);

    pbr.metallic = 0;
    pbr.roughness = 0;
    pbr.subSurface.isRefractionEnabled = true;
    pbr.subSurface.refractionIntensity = 1.8;
    pbr.subSurface.scatteringDiffusionProfile = new BABYLON.Color3(0.75, 0.25, 0.2);

    return pbrMaterial;
}

const createScene = function () {
    const scene = new BABYLON.Scene(engine);
    const camera = createCamera(scene);
    const light = createLight(new BABYLON.Vector3(0, 20, 0), scene);
    const shadowGenerator = createShadows(light, scene);
    // const pbrMaterial = createPBRMaterial("Standard", scene);
    
    BABYLON.SceneLoader.ImportMeshAsync(null, "/models/", "assisi_-_city_scene_assignment.glb", scene).then((result) =>{
        const root = result.meshes[0];
        root.scaling.scaleInPlace(0.01);
        root.getChildMeshes().forEach(m => {
            // m.material = pbrMaterial;
            m.receiveShadows = true;
            // m.checkCollisions = true;
            shadowGenerator.addShadowCaster(m);
        })
    });        
    
    BABYLON.SceneLoader.ImportMeshAsync(null, "/models/", "POC_avata_for_mixamo_Texting_And_Walking_Full.glb", scene).then((result) =>{
        const root = result.meshes[0];
        root.position = new BABYLON.Vector3(-5.5, 4.2, 0); // test
        root.getChildMeshes().forEach(m => {
            // m.material = pbrMaterial;
            m.receiveShadows = true;
            // m.checkCollisions = true;
            shadowGenerator.addShadowCaster(m);
        })
    });     

    // BABYLON.SceneLoader.ImportMeshAsync(null, "https://models.babylonjs.com/", "shark.glb", scene).then((result) => {
    //     const root = result.meshes[0];
    //     root.position = new BABYLON.Vector3(0, 20, 0);
    //     scene.animationGroups[0].start(true);  
    //     root.getChildMeshes().forEach(m => {
    //         m.receiveShadows = true;
    //         m.checkCollisions = true;
    //         shadowGenerator.addShadowCaster(m);
    //     })
    // });

    return scene;
};