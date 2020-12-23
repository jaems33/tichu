import { v4 as uuidv4 } from 'uuid';

export default class Player {
  id: string;
  name: string;
  constructor(name: string){
    this.name = name;
    this.id = uuidv4();
    this.getName = this.getName.bind(this);
  }
  getName(){
    return this.name;
  }
  getId(){
    return this.id;
  }
}
