import Matter from "matter-js"
const Engine = Matter.Engine,
     Render = Matter.Render,
     Runner = Matter.Runner,
     Bodies = Matter.Bodies,
     Composite = Matter.Composite;
export const start=()=>{
const canvas = document.querySelector<HTMLCanvasElement>('[data-animation="matter-drop"]')!;
const engine = Engine.create();
const render = Render.create({
     canvas:canvas,
     engine: engine,
     options:{
        wireframes:false,
        background:"transparent"
     }
});
const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(600, 150, 80, 80);
const boxC = Bodies.rectangle(400, 100, 80, 80);
const ground = Bodies.rectangle(300, 400, 910, 100, { isStatic: true });
Composite.add(engine.world, [boxA, boxB, boxC, ground]);
Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);
}