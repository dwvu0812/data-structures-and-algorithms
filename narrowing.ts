interface Circle {
  kind: "Circle";
  radius: number;
}

interface Square {
  kind: "Square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "Circle":
      return Math.PI * shape.radius ** 2;
    case "Square":
      return shape.sideLength ** 2;
  }
}
