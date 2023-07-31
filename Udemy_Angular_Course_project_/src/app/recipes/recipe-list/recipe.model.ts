export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name:string, desc:string, imagePath: string){ //the "this" keyword is refering to the properties of the Recipe class
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}