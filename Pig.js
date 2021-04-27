class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,100,100);
    this.image = loadImage("images/rock1.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
  
    super.display();
  
  }

  


};