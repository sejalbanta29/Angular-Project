export class Product {
    id:number;
    name: string;
    description:string;
    price:number;
    imageurl:string;

    constructor(id:number, name:string, description:string, price:number, imageurl:string){
        this.id= id;
        this.name= name;
        this.description=description;
        this.price=price;
        this.imageurl=imageurl;
    }
}