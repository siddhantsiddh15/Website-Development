// Slider starts
const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');



// Slider ends

// Product starts 

const products = [
    // 1st item
    {
        id:1,
        title: "Air Force",
        price:119,
        colors: [
            {
                code:'black',
                img: './img/air.png',
            },
            {
                code: 'darkblue',
                img:'./img/air2.png',
            },
        ],
    }
    ,
    // 2nd item
    {
        id:2,
        title: "Air Jordan",
        price:149,
        colors: [
            {
                code:'lightgray',
                img: './img/jordan.png',
            },
            {
                code: 'green',
                img:'./img/jordan2.png',
            },
        ],
    }
    ,
    // 3rd item
    {
        id:3,
        title: "Blazer",
        price:109,
        colors: [
            {
                code:'lightgray',
                img: './img/blazer.png',
            },
            {
                code: 'darkblue',
                img:'./img/blazer2.png',
            },
        ],
    }
    ,
    // 4th item
    {
        id:4,
        title: "Crater",
        price:129,
        colors: [
            {
                code:'black',
                img: './img/crater.png',
            },
            {
                code: 'lightgray',
                img:'./img/crater2.png',
            },
        ],
    }
    ,
    // 5th item
    {
        id:5,
        title: "Hippie",
        price:99,
        colors: [
            {
                code:'gray',
                img: './img/hippie.png',
            },
            {
                code: 'black',
                img:'./img/hippie2.png',
            },
        ],
    }
    ,
];


let choosenProduct = products[1];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');
// Product ends here



menuItems.forEach((item, index) =>{

    item.addEventListener("click", () => {

        // change the current slide starts
        wrapper.style.transform = `translate(${-100 *index}vw)`;
        // change of current slide ends

        // start of change shoe color based on item seleted

            // selecting product clicked in navbar
        choosenProduct = products[index]
            // end of selecting product from navbar

            // setting content as per choosenProduct
        currentProductTitle.textContent = choosenProduct.title;

        currentProductPrice.textContent = '$' + choosenProduct.price;
        

        currentProductImg.src = choosenProduct.colors[0].img;

            // end of choosen product content setting


            // setting color of product
        currentProductColors.forEach((color, idx) => {
            color.style.backgroundColor = choosenProduct.colors[idx].code;
        });
            // end of setting color of product
        // end of change of shoe color 
    });


    // changing product image based on color click
    currentProductColors.forEach((color, idx) => {

        color.addEventListener('click', () => {
            currentProductImg.src = choosenProduct.colors[idx].img;
        })
    })
    // end of changing product image

    // chossing size of shoe
    currentProductSizes.forEach( (size, idx) => {
        size.addEventListener('click', () =>{

            // loop to make default color of every element to white bg and black text 
            currentProductSizes.forEach( size => {
                size.style.backgroundColor = 'white';
                size.style.color = 'black';
            })
            // end of loop to set default color and text

            size.style.backgroundColor = 'black';
            size.style.color = 'white';
        })
    })
    // choosing size of shoe ends
    
})


// payment screen starts
const productButton = document.querySelector('.productButton');


const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
    payment.style.display = 'flex'
})

close.addEventListener('click', () => {
    payment.style.display = 'none'
})
// payment screen ends
