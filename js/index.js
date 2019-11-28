
/********DATA*********** */
let itemsInCart =0;
const products = [
    {
        name: '123',
        imgA: 'img/pic2.jpeg',
        imgB: 'img/pic1.jpeg',
        imgC: 'img/pic3.jpeg',
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
        
        <p>Sweatshirt with long raglan sleeves and ribbing at neckline, cuffs, and hem. Soft, brushed inside. Regular fit.</p>
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
            <data value="39"><del>$49.99</del> <ins>$34.99</ins></data>
            <div class="cart"><button class="cart1"> </button>  <span class="material-icons">shopping_basket</span> </button></div>
            <div class="likes"><button class="likes" type="button"><span class="material-icons">favorite_border</span></button></div>
            
        
        </form>
        <a class="link" href="#">see more</a>
    </article>`;
}


/**************EXUCTION***** */
itemsInCart = addItemsToTheCart(itemsInCart, 1);//1
itemsInCart = addItemsToTheCart(itemsInCart, 5);//6


/*document.???*/ = products.map(getHtmlFromProduct).join('')

