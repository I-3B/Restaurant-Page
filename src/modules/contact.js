import { contact, home, main, menu } from "./initial";

const contactContent=document.createElement('div');
contactContent.setAttribute('id','contact-content');
contactContent.innerHTML=`
    <ul>
        <li>
            delivery: 0420
        </li>
        <li>
            contact us: +963x42069420
        </li>
        <li>
            Facebook: <a href="https://www.facebook.com/Naasani-restaurant/">Naasani-restaurant</a>
        </li>
        <li>
            
            Instagram: <a href="https://www.instagram.com/Naasani-restaurant/">Naasani-restaurant</a>
        </li>
    </ul>
    <p>* all the info are fake</p>
`;


export function contactPressed(){
    contact.setAttribute('class','active')
    home.removeAttribute('class','active');
    menu.removeAttribute('class','active')
    main.innerHTML=contactContent.outerHTML;
    document.body.appendChild(main);
}