
const products = [
    {
        "id": "coffee-1",
        "name": "Irish coffee",
        "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
        "price": "7.00",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },

    {
        "id": "coffee-2",
        "name": "Kahlua coffee",
        "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
        "price": "7.00",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "coffee-3",
        "name": "Honey raf",
        "description": "Espresso with frothed milk, cream and aromatic honey",
        "price": "5.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "coffee-4",
        "name": "Ice cappuccino",
        "description": "Cappuccino with soft thick foam in summer version with ice",
        "price": "5.00",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "coffee-5",
        "name": "Espresso",
        "description": "Classic black coffee",
        "price": "4.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "coffee-6",
        "name": "Latte",
        "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
        "price": "5.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "coffee-7",
        "name": "Latte macchiato",
        "description": "Espresso with frothed milk and chocolate",
        "price": "5.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "coffee-8",
        "name": "Coffee with cognac",
        "description": "Fragrant black coffee with cognac and whipped cream",
        "price": "6.50",
        "category": "coffee",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Cinnamon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "tea-1",
        "name": "Moroccan",
        "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
        "price": "4.50",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "tea-2",
        "name": "Ginger",
        "description": "Original black tea with fresh ginger, lemon and honey",
        "price": "5.00",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "tea-3",
        "name": "Cranberry",
        "description": "Invigorating black tea with cranberry and honey",
        "price": "5.00",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "tea-4",
        "name": "Sea buckthorn",
        "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
        "price": "5.50",
        "category": "tea",
        "sizes": {
            "s": {
                "size": "200 ml",
                "add-price": "0.00"
            },
            "m": {
                "size": "300 ml",
                "add-price": "0.50"
            },
            "l": {
                "size": "400 ml",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Sugar",
                "add-price": "0.50"
            },
            {
                "name": "Lemon",
                "add-price": "0.50"
            },
            {
                "name": "Syrup",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "dessert-1",
        "name": "Marble cheesecake",
        "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
        "price": "3.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "dessert-2",
        "name": "Red velvet",
        "description": "Layer cake with cream cheese frosting",
        "price": "4.00",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "dessert-3",
        "name": "Cheesecakes",
        "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
        "price": "4.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "dessert-4",
        "name": "Creme brulee",
        "description": "Delicate creamy dessert in a caramel basket with wild berries",
        "price": "4.00",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "dessert-5",
        "name": "Pancakes",
        "description": "Tender pancakes with strawberry jam and fresh strawberries",
        "price": "4.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "dessert-6",
        "name": "Honey cake",
        "description": "Classic honey cake with delicate custard",
        "price": "4.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "dessert-7",
        "name": "Chocolate cake",
        "description": "Cake with hot chocolate filling and nuts with dried apricots",
        "price": "5.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    },
    {
        "id": "dessert-8",
        "name": "Black forest",
        "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
        "price": "6.50",
        "category": "dessert",
        "sizes": {
            "s": {
                "size": "50 g",
                "add-price": "0.00"
            },
            "m": {
                "size": "100 g",
                "add-price": "0.50"
            },
            "l": {
                "size": "200 g",
                "add-price": "1.00"
            }
        },
        "additives": [
            {
                "name": "Berries",
                "add-price": "0.50"
            },
            {
                "name": "Nuts",
                "add-price": "0.50"
            },
            {
                "name": "Jam",
                "add-price": "0.50"
            }
        ]
    }
];

function downloadProduct(category,name){

    // console.log('downloadProduct2');
    // console.log(category)
    // console.log(name)

    const selectedProduct =  products.find(product => product.name === name);

    console.log(selectedProduct)

    const modal = document.querySelector('.modal')

    //./assets/img/menu/coffee-1.jpg

    const photo = modal.querySelector('.modal__photo');
    const photoFigure = photo.querySelector('figure');
    const photoImg = photoFigure.querySelector('img');

    const title = modal.querySelector('.modal__title')
    const description = modal.querySelector('.modal__description')
    const modalForm = modal.querySelector('.modal__form')
    const sizes = modalForm.querySelector('.modal__info-size')
    const sizesGroup = sizes.querySelectorAll('.modal__form-group')
    const additives = modalForm.querySelector('.modal__info-additives')
    const additivesGroup = additives.querySelectorAll('.modal__form-group')
    const total = modal.querySelector('.modal__total')
    const price = total.querySelector('.modal__total-price')


    const prodectPrice = selectedProduct.price;
    photoImg.src=`./assets/img/menu/${selectedProduct.id}.jpg`;
    title.textContent = name;
    description.textContent = selectedProduct.description;
    price.textContent = `$${prodectPrice}`

    sizesGroup.forEach((itemSize) => {
        const labelSize = itemSize.querySelector('.size')
        const viewSizes = itemSize.querySelector('.btn__menu-ico')
        labelSize.textContent = selectedProduct.sizes[viewSizes.textContent].size;

        const input = itemSize.querySelector('input')
        // console.log(input)
        //
        // console.log(input.value)

        input.checked = input.value === 's';

        itemSize.addEventListener('click', (e) => {
            //console.log(selectedProduct.sizes[viewSizes.textContent]['add-price'])
            const sizeAddPrice = selectedProduct.sizes[viewSizes.textContent]['add-price'];

            let additivesPrice = 0;
            additivesGroup.forEach((itemAdditives,index) => {
                const input =  itemAdditives.querySelector('input')
                if(input.checked){
                    additivesPrice += Number(selectedProduct.additives[index]['add-price'])
                }
            })

            price.textContent = `$${(Number(prodectPrice) + Number(sizeAddPrice) + additivesPrice).toFixed(2)}`
        })
    });

    additivesGroup.forEach((itemAdditives,index) => {
        const input = itemAdditives.querySelector('input');
        input.checked = false

        const additivesName = itemAdditives.querySelector('.additives-name')
        additivesName.textContent = selectedProduct.additives[index].name


        itemAdditives.addEventListener('click', (e) => {
            let additivesPrice = 0;
            additivesGroup.forEach((itemAdditives,index) => {
                const input =  itemAdditives.querySelector('input')
                if(input.checked){
                    additivesPrice += Number(selectedProduct.additives[index]['add-price'])
                }


            })

            let sizePrice = 0;
            sizesGroup.forEach((itemSize) => {
                const viewSizes = itemSize.querySelector('.btn__menu-ico')
                const input = itemSize.querySelector('input')

                if(input.checked){
                    sizePrice = selectedProduct.sizes[viewSizes.textContent]['add-price'];
                }
                //const viewSizes = itemSize.querySelector('.btn__menu-ico')
            })
            price.textContent = `$${(Number(prodectPrice) + Number(sizePrice) + additivesPrice).toFixed(2) }`
        })



    })







}

export { downloadProduct };
