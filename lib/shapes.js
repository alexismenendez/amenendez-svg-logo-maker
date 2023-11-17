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
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
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
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>`
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
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
    }
}
  


module.exports = { Triangle, Circle, Square };