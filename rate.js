const main = document.getElementById('contentMain');


const rate = (param1, param2, param3, param4, param5) => {
    param1.addEventListener('click', function makeTask(){
        const p1 = document.createElement('p');
        p1.textContent = 'Nos diste 1 :('
        p1.className = 'p1';
        main.appendChild(p1);
})
    param2.addEventListener('click', function makeTask(){
        console.log('Nos diste  2, tan malos somos? Wow')
        const p1 = document.createElement('p');
        p1.textContent = 'Nos diste  2, tan malos somos? Wow'
        p1.className = 'p2';
        main.appendChild(p1);
})  
    param3.addEventListener('click', function makeTask(){
    const p1 = document.createElement('p');
    p1.textContent = 'Nos diste 3... MMMMMMM dinos como podriamos hacerlo mejor... :)'
    p1.className = 'p3';
    main.appendChild(p1);

})       
    param4.addEventListener('click', function makeTask(){
    console.log('Nos diste  4 puntos, casi perfecto?')
})        
    param5.addEventListener('click', function makeTask(){
    console.log('5 Bieeenn!!!')

})
};




// for(let element of Node){
//     element.addEventListener('click', function makeTask(){
//         console.log('funciona');
//     })
// }

export {rate};