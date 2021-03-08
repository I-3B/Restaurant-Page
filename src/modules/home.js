import {main,home,menu,contact}from './initial';
const homeContent=document.createElement('div');
homeContent.setAttribute('id','home-content');
homeContent.innerHTML=`
    <h>Naasani</h><span>Restaurant</span>
    <p>Best fast food restaurant in aleppo!</p>
    <ul>
        <li>
           fast delivery service.
        </li>
        <li>
            high quality ingredients.
        </li>
        <li>
            very attractive prices.
        </li>
    </ul>
`;
export function homePressed(){
    home.setAttribute('class','active')
    menu.removeAttribute('class','active');
    contact.removeAttribute('class','active')
    main.innerHTML=homeContent.outerHTML;
    document.body.appendChild(main);
}