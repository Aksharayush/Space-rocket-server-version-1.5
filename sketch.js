var screen1;
var earth,moon,venus,Sun;
var heading;
var capsuleX = -1,capsuleY = -1,fueltankX = -1,fueltankY = -1,vigyanX = -1,vigyanY = -1;
var flag = 0;
var capsulevisible = 0,fuelvisible = 0,vigyanVisible = 0;
var gamestate = 0;
function preload(){
  screen1 = loadImage("images/space.jpg");
  earthImage = loadImage("images/earth.png");
  moonImage = loadImage("images/moon.png")
  venusImage = loadImage("images/venus.png");
  sunImage = loadImage("images/sun.png")
  header = loadImage("images/heading.jpg");
  workspaceImage = loadImage("images/workspace.png");
  vigyanEngine = loadImage("images/vigyan.png");
  capsuleImg = loadImage("images/blue capsule.png");
  fuelTankImg = loadImage("images/fuel tank.png");
  spacerought = loadImage("images/sky.png");
  capsuleInfo = loadImage("images/capsuleInfo.png");
  fueltankInfo = loadImage("images/fueltankInfo.png");
  engineInfo = loadImage("images/engineInfo.png");
  rightButtonImg = loadImage("images/right_button.png");
  leftButtonImg = loadImage("images/left_button.png");
  upButtonImg = loadImage("images/up_button.png");
  landIMG = loadImage("images/land.png");
  about = loadImage("images/about us.JPG");
  versionINFO = loadImage("images/version info.png");
  Preset = loadImage("images/reset.png");
  downButtonImg = loadImage("images/backbutt.png");
  fire = loadImage("images/propultion2.png");
  parachuteIMG = loadImage("images/parachute_2.png");
  marscapsule = loadImage("images/space-capsule.png");
  newcapsuleinfo = loadImage("images/new info cap.png");
  example1IMG = loadImage("images/example1.JPG");
  example2IMG = loadImage("images/example2.JPG");
  example3IMG = loadImage("images/example3.JPG");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-150);
  /**code for making Earth */
  sky = createSprite(displayWidth/2,displayHeight/1.5,);
sky.addImage(spacerought);
sky.scale = 5.5
sky.visible = false;

 earth = createSprite(width/4,height/2);
 earth.addImage(earthImage);
 earth.rotationSpeed = 0.1;

 /**Code for making moon  */
 moon = createSprite(width/2,height/3);
 moon.addImage(moonImage);
 moon.scale = 0.3;
moon.rotationSpeed= 3;

/**Code for venus */
venus = createSprite(width/1.6,height/4);
venus.addImage(venusImage);
venus.scale = 0.2;
venus.rotationSpeed = 4;

/**Code for making moon  */
sun = createSprite(width/1.4,height/5);
sun.addImage(sunImage);
sun.scale = 0.2;
sun.rotationSpeed= 3;

/**COde for header */
head = createSprite(width/2,height/10);
head.addImage(header);
head.scale = 1.5;

this.button = createButton('Play');
this.button.position(width/2,height/2);

this.button1 = createButton('about us');
this.button1.position(width/2,height/1.8)

this.button2 = createButton('version Info');
this.button2.position(width/2,height/1.6)

this.button3 = createButton('Example ');
this.button3.position(width/2,height/1.5);

aboutus = createSprite(width/2,height/2,displayWidth/2,displayHeight/2);
aboutus.addImage(about);
aboutus.visible = false;

workspace = createSprite(width/2,height/2,450,height)
workspace.addImage(workspaceImage);
workspace.scale = 1.6;
workspace.visible = false;

land = createSprite(width/2,height/1.04)
land.addImage(landIMG);
land.scale = 0.5;
land.visible = false;

engineinfo = createSprite(width/1.3,height/1.2);
engineinfo.addImage(engineInfo);
engineinfo.scale = 0.5;
engineinfo.visible = false;

capsuleinfo = createSprite(width/1.3,height/1.2);
capsuleinfo.addImage(capsuleInfo);
capsuleinfo.scale = 0.5;
capsuleinfo.visible = false;

fueltankinfo = createSprite(width/1.3,height/1.2);
fueltankinfo.addImage(fueltankInfo);
fueltankinfo.scale = 0.5;
fueltankinfo.visible = false;

/**
 * we are creating a base named as launchbase for making the engine set at launcher's botton
 */
launchbase = createSprite(width/2,height/1,width,50);
launchbase.visible = false;

version = createSprite(width/2,height/2);
version.addImage(versionINFO);
version.scale = 0.5;
version.visible = false;

deadline = createSprite(width/2,height/8,width,50);
deadline.visible = false;

deadline1 = createSprite(width/2,height/1,width,10);
deadline1.visible = false;

parachute = createSprite(100,100,50,50);
parachute.addImage(parachuteIMG);
parachute.scale = 0.5;
parachute.visible = false;


thrust = createSprite(width/2,height/2);
thrust.addImage(fire);
thrust.scale = 0.6;
thrust.visible = false;

vigyan = createSprite(width/3,height/2);
vigyan.addImage(vigyanEngine);
vigyan.scale = 0.1;
vigyan.visible = false;

capsule = createSprite(width/3,height/2.9);
capsule.addImage(capsuleImg);
capsule.scale = 0.15;
capsule.visible = false;

newcapsule = createSprite(width/3,height/1.5);
newcapsule.addImage(marscapsule);
newcapsule.scale = 0.15
newcapsule.visible = false;

fuelTank = createSprite(width/3,height/7,100,height);
fuelTank.addImage(fuelTankImg);
fuelTank.scale = 5.5;
fuelTank.visible = false;

rightButton = createSprite(width/4,height/1.3);
rightButton.addImage(rightButtonImg);
rightButton.scale = 0.5;
rightButton.visible = false;

leftButton = createSprite(width/6,height/1.3);
leftButton.addImage(leftButtonImg);
leftButton.scale = 0.5;
leftButton.visible = false;

upButton = createSprite(width/4.8,height/1.5);
upButton.addImage(upButtonImg);
upButton.scale =0.5;
upButton.visible = false;

downButton = createSprite(width/4.8,height/1.15);
downButton.addImage(downButtonImg);
downButton.scale = 0.5;
downButton.visible = false;

reset = createSprite(width/1.5,height/1.3);
reset.addImage(Preset);
reset.scale = 0.5;
reset.visible = false;

this.back = createButton('Back<=');
this.back.position(width/5,height/20);
this.back.hide();

this.launch = createButton('Launch=>');
this.launch.position(width/1.5,height/20);
this.launch.hide();

this.deleteRocket = createButton('Delete');
this.deleteRocket.position(width/5,height/20);
this.deleteRocket.hide()

/**
 * html code starting@@@@@@@@this
 * <html form .hide function started
 */

var coins = 0;

}

function draw() {
background(screen1);
this.button.mousePressed(()=>{
  capsule.x = width/3;
  capsule.y = height/2.9;
  leftButton.x = 2334333;
  leftButton.y = 87675697;
  rightButton.x = 564795864;
  rightButton.y = 36473562874;
  upButton.x = 78689469;
  upButton.y = 8767609;

this.button.hide();
this.button1.hide();
this.button2.hide();
this.button3.hide();
head.visible = false;
earth.visible = false;
capsule.rotation = 0;
vigyan.rotation = 0;
fuelTank.rotation = 0;
moon.visible = false;
venus.visible = false;
sun.visible = false;
workspace.visible =true;
vigyan.visible = true;  
capsule.visible = true;
fuelTank.visible = true;
this.back.show();
this.launch.show();

})

this.button3.mousePressed(()=>{
  this.back.show();
  leftButton.visible = true;
  leftButton.x = 300;
  leftButton.y = height/2;

  rightButton.visible = true;
  rightButton.x = 1200
  rightButton.y = height/2;
  
  example1 = createSprite(width/2,height/2);
  example1.addImage(example1IMG);
  example1.visible = true;

  example2 = createSprite(width/3,height/2,50,height);
  example2.addImage(example3IMG);
  example2.scale = 0.07;
  example2.visible = true;

  this.button.hide();
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
 this.button4.hide();


 
})

if(mousePressedOver(rightButton)){
  console.log("hello")
  example2.scale = 1.5;
  example2.x = width/2;
  example2.y = height/2;
  example1.visible = false;
  example2.visible = true;
}
if(mousePressedOver(leftButton)){
  console.log("hello")
  example2.scale = 0.07;
  example1.x = width/2;
  example1.y = height/2;
  example1.x = width/3;
  example1.y = height/2;
  example1.visible = true;
  example2.visible = false;
}

this.button2.mousePressed(()=>{
  this.back.show();
  version.visible = true;
  earth.visible = false;
  moon.visible = false;
  venus.visible = false;
  sun.visible = false;
  head.visible = false;
  this.button.hide();
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
 this.button4.hide();
 
})

this.back.mousePressed(()=>{
  aboutus.visible = false;
  version.visible = false
  leftButton.visible = false;
  rightButton.visible = false;
  this.back.hide();
  this.button.show();
this.button1.show();
this.button2.show();
this.button3.show();
head.visible = true;
example2.visible = false;
earth.visible = true;
moon.visible = true;
venus.visible = true;
sun.visible = true;
workspace.visible =false;
vigyan.visible = false;  
example1.visible = false;
capsule.visible = false;
capsule.x = 186679680;
capsule.y = 16457634576380;
fuelTank.visible = false;
this.launch.hide();
this.title.hide();
this.input.hide();
this.button5.hide();
this.email.hide();
this.button4.hide();
reset.visible = false;
})


this.launch.mousePressed(()=>{
  gamestate = 1;
  flag = 1;
  leftButton.x = width/6;
 
  leftButton.y = height/1.3;
  rightButton.x = width/4;
  rightButton.y =  height/1.3;
  upButton.x = width/4.8;
  upButton.y = height/1.5;
  downButton.visible = true;
  this.back.hide();
  this.launch.hide();
  land.visible = true;
  workspace.visible = false;
    rightButton.visible = true;
    leftButton.visible = true;
    upButton.visible = true;

  if(vigyan.x < width/2 -50 ){
    vigyan.visible = false;
    vigyanVisible = -1
  }
  if(capsule.x < width/2 -50 ){
    capsule.visible = false;
    capsulevisible = -1;
  }
  if(fuelTank.x < width/2 -50 ){
    fuelTank.visible = false;
    fuelvisible = -1;
  }
  if(vigyanVisible == 0 && fuelvisible == 0 && capsulevisible == 0){
    if(vigyan.y <fuelTank.y && vigyan.y < capsule.y){
      vigyan.y = height-100;
      if(fuelTank.y<capsule.y){
          fuelTank.y = height-400;
          capsule.y = height-600;
      }
      if(capsule.y<fuelTank.y){
        capsule.y = height-200;
        fuelTank.y = height-600;
      }
    }
    
    if(fuelTank.y<vigyan.y  && fuelTank.y<capsule.y){
      fuelTank.y = height-400;
      if(vigyan.y<capsule.y){
          vigyan.y = height-500;
          capsule.y = height-600 
      }
      if(capsule.y<vigyan.y){
        capsule.y = height-500;
        vigyan.y  = height-600;
      }
    }
  }
  sky.visible = true;
  reset.visible = true;
 
this.deleteRocket.show();

})

this.deleteRocket.mousePressed(()=>{
  vigyan.rotation = 0;
  capsule.rotation = 0;
  fuelTank.rotation = 0;
  land.visible = false;
  reset.visible = false;
  leftButton.visible = false;
  rightButton.visible = false;
  upButton.visible = false;
  prompt("are you sure to delet rocket?");
  vigyan.x = width/3;
  vigyan.y = height/2;
  downButton.visible = false;
  vigyan.visible = true;
  sky.visible = false;
  workspace.visible = true;
  background(screen1);
  capsule.x = width/3;
  capsule.y = height/2.9;
  capsule.visible = true;
  fuelTank.x = width/3;
  fuelTank.y = height/7;
  fuelTank.visible = true;
  this.deleteRocket.hide();
  this.back.show();
  this.launch.show();
  flag = 0;
})

this.button1.mousePressed(()=>{
  this.button.hide();
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
  this.back.show();
  aboutus.visible = true;
 
  head.visible = false;
earth.visible = false;
moon.visible = false;
venus.visible = false;
sun.visible = false;
this.title.show();
this.input.show();
this.button5.show();
this.email.show();
this.button4.show();
})

vigyan.collide(fuelTank);
vigyan.collide(capsule);
fuelTank.collide(vigyan);
fuelTank.collide(capsule);
capsule.collide(fuelTank);
capsule.collide(vigyan);
launchbase.collide(vigyan);
launchbase.collide(fuelTank);
launchbase.collide(capsule);
vigyan.bounceOff(launchbase);
capsule.collide(deadline);
capsule.collide(deadline1);

if (mousePressedOver(fuelTank)&& flag==0) {
  fuelTank.x = World.mouseX;
fuelTank.y = World.mouseY;
fueltankinfo.visible = true;
fueltankX = fuelTank.x;
fueltankY = fuelTank.y;
}
else{
  fueltankinfo.visible = false;
}

if (mousePressedOver(vigyan)&& flag==0) {
  vigyan.x = World.mouseX;
  vigyan.y = World.mouseY;
  engineinfo.visible = true;
  vigyanX = vigyan.x;
  vigyanY = vigyan.y;
}
else{
  engineinfo.visible = false;
}

if (mousePressedOver(capsule)&& flag==0) {
  capsule.x = World.mouseX;
  capsule.y = World.mouseY;
  capsuleinfo.visible = true;
  capsuleX = capsule.x;
  capsuleY = capsule.y;
}
else{
  capsuleinfo.visible = false;
}

if(vigyan.isTouching(launchbase)){
vigyan.collide(launchbase);

}

if(fuelTank.isTouching(vigyan)||vigyan.isTouching(fuelTank)||fuelTank.isTouching(capsule)||capsule.isTouching(fuelTank)){
vigyan.collide(launchbase);


}


if(this.button.mousePressed){
  textSize(20);
  textFont("aloha");
  text("coins",width/1.2,height/7);
}


  Launch();
  drawSprites();
}

function Launch() {

//if(capsuleX != -1 && capsuleY != -1 && fueltankX != -1 && fueltankY != -1 && vigyanX != -1 && vigyanY != -1){
if(capsuleX != -1 && capsuleY != -1){
capsule.visible = true;
}

if(mousePressedOver(reset)){
capsule.rotation = 0;
vigyan.rotation = 0;
fuelTank.rotation = 0;
//console.log(capsule.rotation)
}

if(mousePressedOver(upButton)&&gamestate == 1){
land.velocityY = 2;
sky.velocityY = 2;
capsule.y = capsule.y-1;
fuelTank.y = fuelTank.y-1;
thrust.y = vigyan.y+65;
thrust.x = vigyan.x+2;
thrust.visible = true;
vigyan.y = vigyan.y-1;
}
else{
  land.velocityY = 0;
  sky.velocityY = 0;
  thrust.visible = false;
}

if(mousePressedOver(rightButton)){
  capsule.rotation = 5;
  vigyan.rotation = 5;
  fuelTank.rotation = 5;    
  //console.log(capsule.rotation)
}

if(mousePressedOver(leftButton)){
  if(mousePressedOver(leftButton)){
    capsule.rotation = -5;
    vigyan.rotation = -5;
    fuelTank.rotation = -5;    
    //console.log(capsule.rotation)
  }
capsule.rotation = -5;
vigyan.rotation = -5;
fuelTank.rotation = -5;
}

if((!capsule.isTouching(fuelTank)||!capsule.isTouching(vigyan))&&mousePressedOver(downButton)){
  capsule.y = capsule.y+3;
  sky.y = sky.y-1;
  gamestate = 2;
  
}
if(gamestate==2){
  parachute.x = capsule.x;
  parachute.y = capsule.y-100;
  parachute.visible = true;
  parachute.depth = capsule.depth-1;
}
if(gamestate ==2 && sky.y < height+20){
  vigyan.visible = false;
  fuelTank.visible = false;
  land.visible = true;
  land.x = width/2;
  land.y = height-10; 
  
}
if(capsule.isTouching(land)&& parachute.visible == true){
}
}