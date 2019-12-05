
/********DATA*********** */
let itemsInCart =0;
const products = [
    {
        name: '123',
        imgA: 'img/pic2.jpeg',
        imgB: 'img/pic1.jpeg',
        imgC: 'img/pic3.jpeg',
        price: 34.99,
        details:'Sweatshirt with long raglan sleeves and ribbing at neckline, cuffs, and hem. Soft, brushed inside. Regular fit.',
    },
    {
        name: '124',
        imgA: 'img/pic4.jpeg',
        imgB: 'img/pic5.jpeg',
        imgC: 'img/pic6.jpeg',
        price: 64.99,
        details:'Lightweight, oversized sweatshirt with embroidery. Heavily dropped shoulders and ribbing at neckline, cuffs, and hem.',
    },
    {
        name: '125',
        imgA: 'img/pic7.jpeg',
        imgB: 'img/pic8.jpeg',
        imgC: 'img/pic9.jpeg',
        price: 99.99,
        details:'Short, fitted dress in crêped jersey with long puff sleeves. Concealed zip at back. Unlined.',
    },
    {
        name: '126',
        imgA: 'img/pic10.jpeg',
        imgB: 'img/pic11.jpeg',
        imgC: 'img/pic12.jpeg',
        price:79.99,
        details:'PREMIUM QUALITY/CONSCIOUS. Short, double-breasted coat in a felted, woven wool blend. Wide, notched lapels and concealed snap fasteners at front. Relaxed fit with dropped shoulders, side-seam pockets, and an inner pocket with a button. Lined. Wool content is recycled.',
    },
    {
        name: '127',
        imgA: 'img/pic13.jpeg',
        imgB: 'img/pic14.jpeg',
        imgC: 'img/pic15.jpeg',
        price:159.99,
        details:'Coat in woven, felted wool-blend fabric. Stand-up collar, buttons at front, and decorative buttons at cuffs. Diagonal welt side pockets and two inner pockets. Vent at back. Lined.',
    },
    {
        name: '128',
        imgA: 'img/pic16.jpeg',
        imgB: 'img/pic17.jpeg',
        imgC: 'img/pic18.jpeg',
        price:29.99,
        details:'Long-sleeved sweatshirt in soft fabric with a lined drawstring hood, kangaroo pocket, and ribbing at cuffs and hem. Soft, brushed inside.',
    },
    {
        name: '129',
        imgA: 'img/pic19.jpeg',
        imgB: 'img/pic20.jpeg',
        imgC: 'img/pic21.jpeg',
        price:79.99,
        details:'Soft sweatshirt with a slightly looser fit. Dropped shoulders and ribbing at neckline, cuffs, and hem. Soft, brushed inside.',
    },
    {
        name: '130',
        imgA: 'img/pic22.jpeg',
        imgB: 'img/pic23.jpeg',
        imgC: 'img/pic24.jpeg',
        price:29.99,
        details:'Relaxed-fit sweatshirt with a design. Long sleeves and ribbing at neckline, cuffs, and hem.',
    },
    {
        name: '131',
        imgA: 'img/pic25.jpeg',
        imgB: 'img/pic26.jpeg',
        imgC: 'img/pic27.jpeg',
        price:79.99,
        details:'Hooded coat in woven wool-blend fabric. Concealed snap fasteners at front, tie belt at waist, and side pockets. Vent at back. Lined. Wool content is recycled.',
         },
    {
        name: '132',
        imgA: 'img/pic28.jpeg',
        imgB: 'img/pic29.jpeg',
        imgC: 'img/pic30.jpeg',
        price:129.99,
        details:  'Straight-cut jacket in woven fabric. Shawl collar, lightweight shoulder pads, welt front pockets, and 3/4-length sleeves with short slit at cuffs. No fasteners. Lined.',
    }
]


/**********************Functions******** */

function addItemsToTheCart(curr, qty) {
    console.log(`You added ${qty} item(s). there are now: ${curr + qty}.`);
    return curr + qty;
}


function getHtmlFromProduct(product) {
    return `
    <article class="product">
        <header>
            <div>
            <img src="${product.imgA}" alt="Product Image">
            <img src="${product.imgB}" alt="Product Image">
            <img src="${product.imgC}" alt="Product Image">
        </div>
        </header>
        
        <p>${product.details}</p>
        <form class="pic_details">
        
            <div class="colours"><legend>Colours</legend>
            <ul>
                <li><label><input class="types" type="radio" name="colour" value="r"> <span>Red</span></label></li>
                <li><label><input class="types" type="radio" name="colour" value="w"> <span>White</span></label></li>
                <li ><label><input class="types" type="radio" name="colour" value="b"> <span>Blue</span></label></li>
            </ul>
            </div>
            

            
            <div class="size"><legend>Sizes</legend>
            <ul>
                <li><label><input class="types" type="radio" name="size" value="m"> <span>M</span></label></li>
                <li><label><input class="types" type="radio" name="size" value="l"> <span>L</span></label></li>
                <li><label><input class="types" type="radio" name="size" value="xl"> <span>XL</span></label></li>
            </ul>
            </div>
        

            
            <dl>
                <dt>Rating</dt>
                <dd> <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
            </dl>
            <data ${product.price}" value="39"><del>$49.99</del> <ins>$34.99</ins></data>
            <div class="cart"><button class="cart1"> </button>  <span class="material-icons">shopping_basket</span> </button></div>
            <div class="likes"><button class="likes" type="button"><span class="material-icons">favorite_border</span></button></div>
            
        
        </form>
        <a class="link" href="#">see more</a>
    </article>`;
}


/**************EXUCTION***** */
function showProducts(prodcut){
    const arrayOdProducts = prodcut.map(getHtmlFromProduct);
    const strngOfHtml = arrayOdProducts.join('\n');
    document.getElementById('products').innerHTML = strngOfHtml;
}




