
export class Recipe {
    public name: String;
    public desc: String;
    public imgPath: String;

    constructor(name: String, desc: String, imgPath: String) {
        this.name = name;
        this.desc = desc;
        this.imgPath = imgPath;
    }
}