const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops = 100;
var drops = [];


function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;

    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }
}

function draw(){
    background(0,0,0);
    Engine.update(engine);

    for (var k = 0;k < drops.length; k++){
        drops[k].display();
    }
    console.log(drops)
}   

