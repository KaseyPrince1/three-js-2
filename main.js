// import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );


// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x9381ff } );
// const cube = new THREE.Mesh( geometry, material );
// const cube2 = new THREE.Mesh( geometry, material );

// camera.position.z = 5;

// const size = 10;
// const divisions = 10;

// const light = new THREE.DirectionalLight( 0x9381ff );
// const helper = new THREE.DirectionalLightHelper( light, 5 );

// const sphere = new THREE.SphereGeometry({ color: 0x9381ff });
// const object = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( 0x9381ff ) );
// const box = new THREE.BoxHelper( object, 0x9381ff );

// const gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( cube, gridHelper, helper, box, object);

// function animate() {
// 	requestAnimationFrame( animate );

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;


// 	renderer.render( scene, camera );
// }

// animate();