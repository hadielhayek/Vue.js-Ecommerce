import Matter from "matter-js";
const Engine = Matter.Engine,
     Render = Matter.Render,
     Runner = Matter.Runner,
     Bodies = Matter.Bodies,
     Mouse = Matter.Mouse,
     World = Matter.World,
     MouseConstraint = Matter.MouseConstraint;
export const start = () => {
     const canvas = document.querySelector<HTMLCanvasElement>('[data-animation="matter-drop"]')!;
     const engine = Engine.create();
     engine.timing.timeScale = 0.6;
     const render = Render.create({
          canvas: canvas,
          engine: engine,
          options: {
               wireframes: false,
               background: "transparent",
               showAngleIndicator: false,
          },
     });
     const mouse = Mouse.create(render.canvas);
     render.mouse = mouse;
     const mouseConstraint: any = MouseConstraint.create(engine, {
          mouse,
          constraint: {
               render: {
                    visible: false,
               },
               stiffness: 0.8,
          },
     });
     mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
     mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
     const boxA = Bodies.rectangle(40, 500, 80, 80, { restitution: 0.1 });
     const boxB = Bodies.rectangle(400, 150, 80, 80, { restitution: 0, frictionAir: 0.01 });
     const boxC = Bodies.rectangle(600, 100, 80, 80);
     const ground = Bodies.rectangle(400, 600, 810, 0.5, { isStatic: true });
     const top = Bodies.rectangle(400, 0, 810, 0.5, { isStatic: true });
     const wall1 = Bodies.rectangle(0, 200, 0.5, 820, { isStatic: true });
     const wall2 = Bodies.rectangle(800, 200, 1, 820, { isStatic: true });
     World.add(engine.world, [boxA, boxB, boxC, top, ground, wall1, wall2, mouseConstraint]);
     Render.run(render);
     const runner = Runner.create();
     Runner.run(runner, engine);
};
