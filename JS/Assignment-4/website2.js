

var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}

var main_div = document.getElementById('main-div')
var preview_div = document.getElementById('preview')
var details_div = document.getElementById('details')

var prv_sec = document.createElement('img')
prv_sec.src = productData.preview
prv_sec.alt = productData.name
prv_sec.style.width = '450px'
prv_sec.style.height = '560px'
prv_sec.style.paddingLeft = '40px'
prv_sec.style.border = 'none'


preview_div.appendChild(prv_sec)

var title = document.createElement('h1')
title.innerHTML = productData.name

var brand = document.createElement('p')
brand.innerHTML = productData.brand

var price = document.createElement('p')
price.innerHTML = "Rs " + productData.price

var description = document.createElement('p')
description.innerHTML = 'Description <br><br>' + productData.description

var prv_prd = document.createElement('p')
prv_prd.innerHTML = 'Product Preview <br><br>'

details_div.append(title, brand, price, description, prv_prd)

var photos = productData.photos
for(var j=0; j<photos.length; j++){
  var photo_prv = document.createElement('img')
  photo_prv.id = 'prv_img'
  photo_prv.src = photos[j] 
  photo_prv.alt = productData.name
  photo_prv.style.width = '100px'
  photo_prv.style.padding = '10px'
  
  photo_prv.onclick = function(){
    var allImages = details_div.getElementsByTagName('img')
    for(var i=0; i<allImages.length; i++){
      allImages[i].style.border = 'none'
    }
    this.style.border = '2px solid brown'
    

    var clickedPhoto= this.cloneNode()
    clickedPhoto.style.width = '450px'
    clickedPhoto.style.height = '560px'
    // clickedPhoto.style.paddingLeft = '40px'
    preview_div.innerHTML = '' 
    preview_div.appendChild(clickedPhoto)
    
  }
  details_div.appendChild(photo_prv)
} 






























