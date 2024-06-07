class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`)
    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`)
    this.a = a
    this.b = b
    this.area = this.getArea(this.a, this.b)
    this.hypotenuse = this.getHypotenuse(this.a, this.b)
  }
  getArea() {
    return (this.a * this.b) / 2
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }

  describe() {
    return (
      'I am a triangle with an area of ' +
      this.area +
      ' and a hypotenuse of ' +
      this.hypotenuse
    )
  }
}

class ShyTrinagle extends Triangle {
  constructor(a, b) {
    // calls the parent class constructor
    super(a, b)
  }
  describe() {
    return 'Runs and hides'
  }
}

const triangles = [
  {
    a: 3,
    b: 4,
    shy: true,
  },
  {
    a: 6,
    b: 8,
    shy: false,
  },
  {
    a: 9,
    b: 12,
    shy: false,
  },
  {
    a: 12,
    b: 16,
    shy: true,
  },
]

let parsedTriangles = []

triangles.forEach(triangle => {
  if (triangle.shy) {
    parsedTriangles.push(new ShyTrinagle(triangle.a, triangle.b))
    return
  }
  parsedTriangles.push(new Triangle(triangle.a, triangle.b))
})

parsedTriangles.forEach(triangle => {
  console.log(triangle.describe())
})
