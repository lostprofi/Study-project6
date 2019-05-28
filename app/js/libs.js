const template = document.querySelector('.product');
const btn = document.querySelector('#lazy-btn');

let data = {
    
    products: [
        
        //group one
        [
            {
                'data-src': '#modal-5',
                src: 'img/onesie.png',
                alt: 'onesie',
                class: 'onesie',
                id: 'modal-5',
                productName: 'Onesie',
                price1: 4,
                price2: 5
            
            },
            
            {
                'data-src': '#modal-5',
                src: 'img/onesie.png',
                alt: 'onesie',
                class: 'onesie',
                id: 'modal-5',
                productName: 'Onesie',
                price1: 4,
                price2: 5
            
            },
            
            {
                'data-src': '#modal-5',
                src: 'img/onesie.png',
                alt: 'onesie',
                class: 'onesie',
                id: 'modal-5',
                productName: 'Onesie',
                price1: 4,
                price2: 5
            
            },
            
            {
                'data-src': '#modal-5',
                src: 'img/onesie.png',
                alt: 'onesie',
                class: 'onesie',
                id: 'modal-5',
                productName: 'Onesie',
                price1: 4,
                price2: 5
            
            },
            
        ]
        
        
        
        
    ]
      
};

let i = 0;

btn.addEventListener('click', ()=>{
    
   data.products[i].forEach(el => {
    
    //console.log(el);
    
   const a = template.cloneNode(true);
    
    a.setAttribute('class', 'product col-4');
    a.setAttribute('data-lazy', 'lazy-style');
    
   let productPhoto = a.querySelector('.product-photo');
   let productName = a.children[1];
   let productFooter = a.querySelector('.product-footer');
    
    //Product Photo components
    
    let productPhotoChild1 = productPhoto.children[0];
    let productPhotoChild2 = productPhoto.children[2];
    let productPhotoChild3 = productPhoto.children[3];
    
    
    productPhotoChild1.setAttribute('data-src', `${el['data-src']}`);
    productPhotoChild2.setAttribute('src', `${el.src}`);
    productPhotoChild2.setAttribute('alt', `${el.alt}`);
    productPhotoChild2.setAttribute('class', `${el.class}`);
    productPhotoChild3.setAttribute('id', `${el.id}`);
    
    //Modal components
    
    let modal = productPhotoChild3.querySelector('.product');
    
    modal.children[0].setAttribute('src', `${el.src}`);
    modal.children[0].setAttribute('alt', `${el.alt}`)
    modal.children[0].setAttribute('class', `${el.class}`);
    
    modal.children[1].innerHTML = `${el.productName}`;
    
    modal.querySelector('.price').children[1].innerHTML = `${el.price1}`;
    modal.querySelector('.price').children[2].innerHTML = `${el.price2}`;
    
    
    
    //Product Name
    
    productName.innerHTML = `${el.productName}`;
    
    //Product price
    
    productFooter.querySelector('.price').children[1].innerHTML = `${el.price1}`;
    productFooter.querySelector('.price').children[2].innerHTML = `${el.price2}`;
    
    //Add template
    
    document.querySelector('.row-lazy-load').appendChild(a);
        
}); 
    
    i=i+1;
});