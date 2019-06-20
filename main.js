let template = document.querySelector('#element-template').content.querySelector('div');
let pool = document.querySelector('.pool-2')
 var elements = [
     {
         color : 'el1'
     },
     {
         color : 'el'
     },
     {
         color : 'el1'
     },
     {
         color : 'el'
     },
     {
         color : 'el1'
     },
     {
         color : 'el'
     }
 ]
for(var i=0;i<6;i++) {
    let element = template.cloneNode(true)
    element.className = elements[i].color;
    element.children[0].textContent = i;
    pool.appendChild(element) 
} 