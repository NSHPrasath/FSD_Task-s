class Circle {
    radius: double;
    color: String;

    constructor(radius: double) {
        this.radius = 1.0;
        this.color = "red"
    }

    getRadius(): double {
        return this.radius;
    }

    setRadius(radius: double): void {
        this.radius = radius;
    }

    getArea(): double {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference(): double {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
let circle = new Circle(5);
console.log("Radius:", circle.getRadius());
console.log("Area:", circle.getArea());
console.log("Circumference:", circle.getCircumference());