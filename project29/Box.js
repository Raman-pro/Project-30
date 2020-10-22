class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
  display() {
    if(this.body.speed<3){
      super.display();
    }
  else{
      this.Visibility-=5;
      push();
      image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
      tint(255,this.Visibility);
      pop();
    }
  }

};
