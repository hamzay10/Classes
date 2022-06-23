class Box{
  constructor()
  {
    this.x = 100;
    this.y = 100;
    this.width = 50;
    this.height = 50;
  }
  show()
  {
    rect(this.x,this.y,this.width,this.height)
  }
}