import * as THREE from "three";

//scene
const scene = new THREE.Scene();
//camera
const camera = new THREE.PerspectiveCamera(75 , innerWidth / innerHeight , 0.1 , 1000)
scene.add(camera)
camera.position.z = 5
// mesh shape + material 
//shape
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
//material
const cubeMaterial = new THREE.MeshStandardMaterial({
    color : 0x00FF00
})
//cube
const cube = new THREE.Mesh(cubeGeometry , cubeMaterial)
scene.add(cube)
//light
const light = new THREE.DirectionalLight(0xFFFFFF , 1)
scene.add(light)
light.position.y = 5
light.position.z = 5
const light2 = new THREE.DirectionalLight(0xFFFFFF , 1)
scene.add(light2)
light2.position.y = -5
light2.position.z = 5

//render
const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth , innerHeight)

document.body.appendChild(renderer.domElement)
//animation
function animate(){
    cube.rotation.y += 0.05
    cube.rotation.x += 0.05
    cube.rotation.z += 0.05
    renderer.render(scene , camera)
}
//animation loop
renderer.setAnimationLoop(animate)