import {main,home,menu,contact}from './initial'

const menuContent=document.createElement('div');
menuContent.setAttribute('id','menu-content');
menuContent.innerHTML=`
        
    <div class="food-card">
    <img src="../src/burger.jpg">
    burger
    </div>

    <div class="food-card">
    <img src="../src/pizza.jpg">
    pizza
    </div>
    
    <div class="food-card">
    <img src="../src/french-fries.jpg">
    french fries
    </div>
    <div class="food-card">
    <img src="../src/fried-fish.jpg">
    fried fish
    </div>
    
    <div class="food-card">
    <img src="../src/hotdog.jpg">
    hotdog
    </div>

    <div class="food-card">
    <img src="../src/spaghetti.jpg">
    spaghetti
    </div>
`;


export function menuPressed(){
    menu.setAttribute('class','active')
    home.removeAttribute('class','active');
    contact.removeAttribute('class','active')
    main.innerHTML=menuContent.outerHTML;
    document.body.appendChild(main);
}