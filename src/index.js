import { contactPressed } from './modules/contact';
import { homePressed } from './modules/home';
import {contact, home, init, menu}  from './modules/initial'
import { menuPressed } from './modules/menu';

init();
home.addEventListener('click',homePressed);
menu.addEventListener('click',menuPressed);
contact.addEventListener('click',contactPressed);

