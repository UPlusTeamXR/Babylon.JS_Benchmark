
// const createCamera = function (scene) {
//     var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 90, BABYLON.Vector3.Zero(), scene);
    
//     // camera.setPosition(new BABYLON.Vector3(-12, 7, 5.5));
//     camera.setPosition(new BABYLON.Vector3(0, 100, 0));

//     camera.lowerBetaLimit = 0.1;
//     camera.upperBetaLimit = (Math.PI / 2) * 0.9;
//     camera.lowerRadiusLimit = 1;
//     camera.upperRadiusLimit = 150;
//     camera.attachControl(canvas, true);

//     return camera;
// }

// const createLight = function (position, scene) {

//     var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1}, scene);
//     sphere.position = position;

//     // direction vector
//     const direction = new BABYLON.Vector3(0, -1, 0);

//     let xRadian = 30 * Math.PI / 180;
//     let yRadian = 30 * Math.PI / 180;
//     let zRadian = 30 * Math.PI / 180;

//     // https://doc.babylonjs.com/typedoc/classes/BABYLON.Quaternion
//     const quaternion = BABYLON.Quaternion.RotationYawPitchRoll(zRadian, yRadian, xRadian);
//     let rotationEuler = BABYLON.Vector3.Zero();

//     // https://microsoft.github.io/mixed-reality-extension-sdk/classes/vector3.html#rotatebyquaterniontoref
//     direction.rotateByQuaternionToRef(quaternion, rotationEuler);

//     var baseLight = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0, -1, 0), scene);
//     baseLight.intensity = 1.0;
//     baseLight.diffuse = new BABYLON.Color3.FromHexString('#FFF4D6');

//     var light = new BABYLON.DirectionalLight("light", rotationEuler, scene);
//     light.diffuse = new BABYLON.Color3.FromHexString('#FFFFFF');
//     light.position = position;
//     light.direction = rotationEuler;
//     light.intensity = 1.0;
//     // light.shadowMaxZ = 100;
//     // light.shadowMinZ = 20;

//     return light;
// }

// const createShadows = function (light) {
//     var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);

//     shadowGenerator.useKernelBlur = true;
//     shadowGenerator.blurKernel = 64;
//     shadowGenerator.useContactHardeningShadow = true;

//     return shadowGenerator;
// }

// const createPBRMaterial = function (name, scene) {
//     const pbr = new BABYLON.PBRMaterial(name, scene);

//     pbr.baseColor = new BABYLON.Color3(1.0, 0.766, 0.336);
//     pbr.metallic = 0;
//     pbr.roughness = 1.0;

//     return pbr;
// }

// let gLight;
// const createScene = function () {
//     const scene = new BABYLON.Scene(engine);
//     const camera = createCamera(scene);
//     gLight = createLight(new BABYLON.Vector3(0, 20, 0), scene);
//     const shadowGenerator = createShadows(gLight);
//     const pbrMaterial = createPBRMaterial("skyBox", scene);

//     scene.defaultMaterial.backFaceCulling = true;
    
//     BABYLON.SceneLoader.ImportMeshAsync(null, "/models/", "assisi_-_city_scene_assignment.glb", scene).then((result) =>{
//         const root = result.meshes[0];
//         root.scaling.scaleInPlace(0.01);
//         root.getChildMeshes().forEach(m => {
//             // m.material = pbrMaterial;
//             m.material.backFaceCulling = true;
//             m.receiveShadows = true;
//             // m.checkCollisions = true;
//             shadowGenerator.addShadowCaster(m);
//         })
//     });        
    
//     BABYLON.SceneLoader.ImportMeshAsync(null, "/models/", "POC_avata_for_mixamo_Texting_And_Walking_Full.glb", scene).then((result) =>{
//         const root = result.meshes[0];
//         root.position = new BABYLON.Vector3(-5.5, 4.2, 0); // test
//         scene.animationGroups[0].start(true);  
//         root.getChildMeshes().forEach(m => {
//             // m.material = pbrMaterial;
//             m.material.backFaceCulling = false;
//             m.receiveShadows = true;
//             // m.checkCollisions = true;
//             shadowGenerator.addShadowCaster(m);
//         })
//     });     

//     // BABYLON.SceneLoader.ImportMeshAsync(null, "https://models.babylonjs.com/", "shark.glb", scene).then((result) => {
//     //     const root = result.meshes[0];
//     //     root.position = new BABYLON.Vector3(0, 20, 0);
//     //     // scene.animationGroups[0].start(true);  
//     //     root.getChildMeshes().forEach(m => {
//     //         // m.material = pbrMaterial;
//     //         m.receiveShadows = true;
//     //         // m.checkCollisions = true;
//     //         shadowGenerator.addShadowCaster(m);
//     //     })
//     // });

//     // // Load hero character and play animation
//     // BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "HVGirl.glb", scene, function (meshes, particleSystems, skeletons, animationGroups) {
//     //     const root = result.meshes[0];
//     //     root.scaling.scaleInPlace(100);
//     //     const animation = scene.getAnimationGroupByName("Samba");
//     //     animation.start(true, 1.0, sambaAnim.from, sambaAnim.to, false);
//     // });

//     return scene;
// };

// let axis = 0;
// const updateScene = function () {    
//         // direction vector
//         const direction = new BABYLON.Vector3(0, -1, 0);

//         let xRadian = 30 * Math.PI / 180;
//         let yRadian = axis++ * Math.PI / 180;
//         let zRadian = 30 * Math.PI / 180;
    
//         // https://doc.babylonjs.com/typedoc/classes/BABYLON.Quaternion
//         const quaternion = BABYLON.Quaternion.RotationYawPitchRoll(zRadian, yRadian, xRadian);
//         let rotationEuler = BABYLON.Vector3.Zero();
    
//         // https://microsoft.github.io/mixed-reality-extension-sdk/classes/vector3.html#rotatebyquaterniontoref
//         direction.rotateByQuaternionToRef(quaternion, rotationEuler);
    
//         glight.diffuse = new BABYLON.Color3.FromHexString('#FFFFFF');
//         glight.position = position;
//         glight.direction = rotationEuler;
// }