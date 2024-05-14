// navigation bar
var main_div = document.getElementById('main_div')
var nav_bar = document.createElement('div')
nav_bar.id = 'nav_bar'

var shoplane = document.createElement('a')
shoplane.href = "#"
shoplane.id = "shoplane"
shoplane.innerHTML = "shoplane"

var clothing = document.createElement('a')
clothing.href ="#clothing_sec"
clothing.id = 'clothing'
clothing.innerHTML = 'clothing'

var accessories = document.createElement('a')
accessories.href ='#accessories_sec'
accessories.id = 'accessories'
accessories.innerHTML = 'accessories'

var searchBar = document.createElement('div')
searchBar.style.position = 'relative'

var inputElem = document.createElement('input')
inputElem.type = 'text'
inputElem.placeholder = 'Search for Clothing and Accessories'
inputElem.id = 'search'
inputElem.style.backgroundImage = "url('img/search_icon.png')"
inputElem.style.backgroundSize = '15px'
inputElem.style.backgroundRepeat = 'no-repeat'
inputElem.style.backgroundPosition = '10px 50%'

// Event listener for the input focus to remove border when u click on input text
inputElem.addEventListener('focus', ()=>{
    this.style.outline = 'none'
    this.style.border = 'none'
})


searchBar.appendChild(inputElem)

var cartIcon = document.createElement('i')
cartIcon.className = 'fa-solid fa-cart-shopping'
cartIcon.style.color = '#0d0d0d'
cartIcon.id = 'cart'

var prfpic = document.createElement('img')
prfpic.src = 'img/suma_pic.JPG'
prfpic.alt = 'Suma Profile_pic'
prfpic.style.width = '60px'
prfpic.style.height = '60px'
prfpic.style.borderRadius = '50%'

nav_bar.appendChild(shoplane)
nav_bar.appendChild(clothing)
nav_bar.appendChild(accessories)
nav_bar.appendChild(searchBar)
nav_bar.appendChild(cartIcon)
nav_bar.appendChild(prfpic)

// main_div.append(nav_bar)


// clothing and accessories
var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product', true)
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var productList = JSON.parse(xhr.responseText)

        var cloth_cont = document.createElement('div')
        cloth_cont.id = 'cloth_cont'

        var cloth_h2 = document.createElement('h2')
        cloth_h2.innerHTML = "Clothing for Men and Women"

        var cloth_sec = document.createElement('div')
        cloth_sec.id = 'clothing_sec'

        var access_h2 = document.createElement('h2')
        access_h2.innerHTML = "Accessories for Men and Women"

        var accessories_sec = document.createElement('div')
        accessories_sec.id = 'accessories_sec'

        for(var i=0; i<productList.length; i++){
            var card = document.createElement('div')
            card.classList.add('card')

            var image_sec = document.createElement('img')
            image_sec.src = productList[i].preview
            image_sec.alt = productList[i].name

            var text_sec = document.createElement('div')
            text_sec.classList.add('text_sec')
            card.append(image_sec, text_sec)

            var title = document.createElement('h3')
            title.id = 'heading'
            title.innerHTML = productList[i].name

            var brand = document.createElement('p')
            brand.innerHTML = productList[i].brand

            var price = document.createElement('span')
            price.innerHTML = "Rs " + productList[i].price

            text_sec.append(title, brand, price)
            // card.append(image_sec, text_sec)

            if(productList[i].isAccessory === true){
                accessories_sec.append(card)
            }
            else{
                cloth_sec.append(card)
            }
        }
        // document.body.append(cloth_cont)
        cloth_cont.append(cloth_h2,cloth_sec, access_h2,accessories_sec)

        main_div.appendChild(nav_bar)
        main_div.appendChild(cloth_cont)

         // ------------------- FOOTER -----------------------
        var foot = document.createElement('footer')
        // --------- div 1 ----------
        var store = document.createElement('div')
        store.id = 'store_id'

        var foot_head = document.createElement('h3')
        foot_head.innerHTML = 'online store'
        
        var store_1 = document.createElement('a')
        store_1.href = '#'
        store_1.innerHTML = 'men clothing'

        var store_2 = document.createElement('a')
        store_2.href = '#'
        store_2.innerHTML = 'women clothing'

        var store_3 = document.createElement('a')
        store_3.href = '#'
        store_3.innerHTML = 'men accessories'

        var store_4 = document.createElement('a')
        store_4.href = '#'
        store_4.innerHTML = 'women accessories'

        store.append(foot_head, store_1,store_2,store_3,store_4)

        // --------- div 2 -------------
        var links = document.createElement('div')
        links.id = 'link_id'

        var foot_head = document.createElement('h3')
        foot_head.innerHTML = 'helpful links'

        var home = document.createElement('a')
        home.href = '#'
        home.innerHTML = 'home'

        var about = document.createElement('a')
        about.href = '#'
        about.innerHTML = 'about'

        var contact = document.createElement('a')
        contact.href = '#'
        contact.innerHTML = 'contact'

        links.append(foot_head, home, about, contact)

        // ---------- div 3 --------------
        var partners = document.createElement('div')
        partners.id = 'partner_id'

        var foot_head = document.createElement('h3')
        foot_head.innerHTML = 'partners'

        var zara = document.createElement('a')
        zara.href = '#'
        zara.innerHTML = 'zara'

        var pantaloons = document.createElement('a')
        pantaloons.href = '#'
        pantaloons.innerHTML = 'pantaloons'

        var levis = document.createElement('a')
        levis.href = '#'
        levis.innerHTML = 'levis'

        var ucb = document.createElement('a')
        ucb.href = '#'
        ucb.innerHTML = 'ucb'

        var many = document.createElement('a')
        many.href = '#'
        many.innerHTML = '+many more'

        partners.append(foot_head, zara, pantaloons, levis, ucb, many)

        // --------------- div 4 -----------------
        var address = document.createElement('div')
        address.id = 'address_id'

        var foot_head = document.createElement('h3')
        foot_head.innerHTML = 'address'

        var a = document.createElement('p')
        a.innerHTML = 'building 101'

        var b = document.createElement('p')
        b.innerHTML = 'central avenue'

        var c = document.createElement('p')
        c.innerHTML = 'la - 902722'

        var d = document.createElement('p')
        d.innerHTML = 'united states'

        address.append(foot_head,a,b,c,d)

        foot.appendChild(store)
        foot.appendChild(links)
        foot.appendChild(partners)
        foot.appendChild(address)

        main_div.appendChild(foot)
       
    }
}
xhr.send()


//  // ------------------- FOOTER -----------------------
//  var foot = document.createElement('footer')
//  document.body.appendChild(foot)




















































