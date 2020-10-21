import {Component, STATE, ATTRIBUTES, createElement} from './framwork'
// import {enableGesture} from './gesture'

export {STATE, ATTRIBUTES} from './framwork'; 
export class List extends Component{
    constructor(){
      super();
    }
    render() {
        
        this.childern = this[ATTRIBUTES].data.map(this.template);
        this.root = (<div >{this.childern}</div>).render();
        return this.root;
    }
    appendChild(child) {
        this.template = (child);
    }
}