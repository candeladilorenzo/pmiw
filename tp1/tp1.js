//Di Lorenzo Candela

let cuadrados = 12;
let medida = 200;
let color1, color2, color3, color4;
let imagen;

function preload (){
  imagen = loadImage ("data/cubitos.jpg");
}

function setup() {
  createCanvas(800, 400);
  color1 = color(0, 180, 0);
  color2 = color(180, 0, 0);
  color3 = color(180, 100, 0);
  color4 = color(100, 0, 180);
}

function draw() {
  background(255);
  image(imagen, 0, 0);
  ubicarcuadraditos();
}

function keyPressed() {
  if (key === 'v') {
    color1 = color(0, random(50, 255), 0);
  } else if (key === 'r') {
    color2 = color(random(50, 255), 0, 0);
  } else if (key === 'a') {
    color3 = color(random(50, 255), random(50, 255), 0);
  } else if (key === 'b') {
    color4 = color(random(50, 255), 0, random(50, 255));
  } else if (key === ' ') {
    restauracolores();
  }
}

function ubicarcuadraditos() {
  let xinicio = 400;
  let yinicio = 0;
  for (let fila = 0; fila < 2; fila++) {
    for (let columna = 0; columna < 2; columna++) {
      let x = xinicio + 100 + columna * 200;
      let y = yinicio + 100 + fila * 200;
      let colorcuadrado;
      if (fila === 0 && columna === 0) {
        colorcuadrado = color1;
      } else if (fila === 0 && columna === 1) {
        colorcuadrado = color2;
      } else if (fila === 1 && columna === 0) {
        colorcuadrado = color3;
      } else {
        colorcuadrado = color4;
      }
      dibujarcuadraditos(x, y, cuadrados, medida, colorcuadrado);
    }
  }
}

function dibujarcuadraditos(x, y, cuadrados, medida, colorcuadrado) {
  noStroke();
  rectMode(CENTER);
  let rojoinicial = red(colorcuadrado);
  let verdeinicial = green(colorcuadrado);
  let azulinicial = blue(colorcuadrado);
  let rojofinal = 255;
  let verdefinal = 255;
  let azulfinal = 255;
  for (let i = 0; i < cuadrados; i++) {
    let degrade = i / (cuadrados - 1);
    let r = map(degrade, 0, 1, rojoinicial, rojofinal);
    let g = map(degrade, 0, 1, verdeinicial, verdefinal);
    let b = map(degrade, 0, 1, azulinicial, azulfinal);
    let colornuevo = color(r, g, b);
    fill(colornuevo);
    let tam = medida - i * (medida / cuadrados);
    rect(x, y, tam, tam);
  }
}

function restauracolores() {
  color1 = color(0, 180, 0);
  color2 = color(180, 0, 0);
  color3 = color(180, 100, 0);
  color4 = color(100, 0, 180);
}
