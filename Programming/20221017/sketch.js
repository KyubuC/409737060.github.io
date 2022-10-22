function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0) 

}


function draw() {
noFill()
background(0+(frameCount/10)%100);
stroke(256-mouseX/5);
strokeWeight(mouseY/50)
var z = 100

for (let j = 0; j<height/50; j++){
  for(let k = 0; k<width/50; k++){
    
    stroke(255,mouseX/10,mouseY/5)
rect(0+z*j,0+z*k,100,100,frameCount/10%5)
stroke(255,mouseY/10,mouseX/5)
triangle(20+frameCount/10%100+z*j,20+frameCount/10%100+z*k,70+frameCount/10%100+z*j,20+mouseY/10+z*k,20+mouseX/10+z*j,70+mouseY/10+z*k)
triangle(80+frameCount/10%100+z*j,80+frameCount/10%100+z*k,30+frameCount/10%100+z*j,80+mouseY/10+z*k,80+mouseX/10+z*j,30+mouseY/10+z*k)
stroke(frameCount/10%255,mouseX/5,mouseY/5)
ellipse(50+z*j,50+z*k,50+mouseY/10%100,50+mouseX/10%100)


}}
}