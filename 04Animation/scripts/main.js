

 // changing individual properties with code and using setInterval
 var rotationSpeed = 0.005;
 var movingSpeed = 0.02;
 var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
 	myOtherBox.object3D.rotation.x -= rotationSpeed;
    myOtherBox.object3D.position.x -= movingSpeed;
 	console.log(myOtherBox.object3D.rotation.x);
 }

 setInterval(spin, 16); //equivalent to 60 fps