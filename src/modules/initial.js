import{homePressed}from './home'
import { menuPressed } from './menu';


const nav=document.createElement('nav');
const rName=document.createElement('div');
const home=document.createElement('div'); 
const menu=document.createElement('div'); 
const contact=document.createElement('div');
const main=document.createElement('main');
function init(){
    
    rName.setAttribute('id','restaurant-name');
    home.setAttribute('id','home');
    menu.setAttribute('id','menu');
    contact.setAttribute('id','contact');
    rName.innerHTML='<a href="https://github.com/i-3B/">Naasani &reg</a>';
    home.textContent='Home';
    menu.textContent='Menu';
    contact.textContent='Contact';
    [rName,home,menu,contact].forEach(e=>nav.appendChild(e));
    document.body.appendChild(nav);
    homePressed();

}

export {home,menu,contact,main,init}
