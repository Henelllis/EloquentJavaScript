class Vec{
    x:number;
    y:number;
    origin:number = 0;

    constructor(x: number , y:number){
        this.x = x;
        this.y = y;
    }

     plus(vector:Vec) {
         this.x += vector.x;
         this.y += vector.y;
    }

    minus(vector:Vec){
        this.x -= vector.x;
        this.y -= vector.y;
    }

    get length(): string{
        return `(x:${this.x},y:${this.y})`;
    }

}

const myVector = new Vec(5,8);

console.log(`my vector length ${myVector.length}`);


myVector.plus(new Vec(2,2));

console.log(`my vector length ${myVector.length}`);


console.log(`Let the music of the night`);