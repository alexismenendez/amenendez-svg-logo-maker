class Shapes {
    constructor(color) {
      this.color = "";
    }
}

class Circle extends Shapes {
    constructor(color) {
        super(color)
    }

    setColor(color) {
        this.color = color
    }

    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`
    }
}

class Triangle extends Shapes {
    constructor(color) {
        super(color)
    }

    setColor(color) {
        this.color = color
    }

    render(){
        return `<polygon points="150 15, 250 185, 50 185" fill="${this.color}"/>`
    }
}

class Square extends Shapes {
    constructor(color) {
        super(color)
    }

    setColor(color) {
        this.color = color
    }

    render(){
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`
    }
}
  


module.exports = { Triangle, Circle, Square };