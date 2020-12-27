const scene= new THREE.Scene();
const camera= new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);
hlight = new THREE.AmbientLight(0x404040, 100);
scene.add(hlight);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
let loader = new THREE.GLTFLoader();
loader.load('Model/scene.gltf',function(gltf){
	scene.add(gltf.scene);
	renderer.render(scene,camera);
});

