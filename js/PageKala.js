let $ = document
let serach_box = $.querySelector('.serach_box')
let Purchase_offer = $.querySelector('.Purchase_offer')
let email = $.querySelector('.input_email')
let password = $.querySelector('.input_password')
let loginbtn = $.querySelector('.login_btn')
let errorValueEmail = $.querySelector('.error_value_email')
let errorValuePassword = $.querySelector('.error_value_password')
let ww = $.querySelector('.ww')
let grpupingproducts = $.querySelector('.grpuping_product')
let megaMenu = $.querySelector('.container_mega_menu')
let itemsDigital = $.querySelector('.items_digital_desktop')
let chargerTablet = $.querySelector('.charger_tablet')
let Suppliescamera = $.querySelector('.Supplies_camera')
let cameradigital = $.querySelector('.camera_digital')
let game_console = $.querySelector('.game_console')
let digitaldesktop = $.querySelector('.product_digital')
let marketShop = $.querySelector('.shop_market')
let market1 = $.querySelector('.market1')
let market2 = $.querySelector('.market2')
let market3 = $.querySelector('.market3')
let listProductMenu = $.querySelector('.List_product_menu')
let btnListProduct = $.querySelector('.list_product')
let topBar = $.querySelector('.container_topbar')
// Focus Search Box 
serach_box.addEventListener('focus', function () {
    Purchase_offer.style.display = 'block'
})
serach_box.addEventListener('blur', function () {
    Purchase_offer.style.display = 'none'
})
// Focus Search Box 


// Modal Form Login
email.addEventListener('keydown', function () {
    checkEmail()
})
password.addEventListener('keydown', function () {
    CheckPassword()
})
loginbtn.addEventListener('submit', function () {
    console.log('ad');
})
function checkEmail() {
    let valueemail = email.value.length
    if (valueemail < 7) {
        email.style.border = '3px solid red'
        errorValueEmail.style.display = 'block'
    } else {
        email.style.border = '3px solid green'
        errorValueEmail.style.display = 'none'
    }
}

function CheckPassword() {
    let valuepassword = password.value.length
    if (valuepassword < 8) {
        password.style.border = '3px solid red'
        errorValuePassword.style.display = 'block'
    } else {
        password.style.border = '3px solid green'
        errorValuePassword.style.display = 'none'
    }
}
// Modal Form Login


//Mega Menu 
grpupingproducts.addEventListener('mouseover', function () {
    megaMenu.style.display = 'block'
    listProductMenu.style.display = 'none'
})
megaMenu.addEventListener('mouseleave', function () {
    megaMenu.style.display = 'none'
    itemsDigital.style.display = 'none'
    chargerTablet.style.display = 'none'
    Suppliescamera.style.display = 'none'
    cameradigital.style.display = 'none'
    game_console.style.display = 'none'
    market1.style.display = 'none'
    market2.style.display = 'none'
    market3.style.display = 'none'
})
digitaldesktop.addEventListener('mouseover', function () {
    itemsDigital.style.display = 'block'
    chargerTablet.style.display = 'block'
    Suppliescamera.style.display = 'block'
    cameradigital.style.display = 'block'
    game_console.style.display = 'block'
    market1.style.display = 'none'
    market2.style.display = 'none'
    market3.style.display = 'none'

})
marketShop.addEventListener('mouseover', function () {
    itemsDigital.style.display = 'none'
    chargerTablet.style.display = 'none'
    Suppliescamera.style.display = 'none'
    cameradigital.style.display = 'none'
    game_console.style.display = 'none'
    market1.style.display = 'block'
    market2.style.display = 'block'
    market3.style.display = 'block'
})
marketShop.addEventListener('mouseleave', function () {
    itemsDigital.style.display = 'none'
    chargerTablet.style.display = 'none'
    Suppliescamera.style.display = 'none'
    cameradigital.style.display = 'none'
    game_console.style.display = 'none'
    market1.style.display = 'none'
    market2.style.display = 'none'
    market3.style.display = 'none'
})
btnListProduct.addEventListener('mouseover', function () {
    listProductMenu.style.display = 'flex'
    megaMenu.style.display = 'none'
})
listProductMenu.addEventListener('mouseleave', function () {
    listProductMenu.style.display = 'none'
})
topBar.addEventListener('mouseover', function () {
    listProductMenu.style.display = 'none'
    megaMenu.style.display = 'none'
})
//Mega Menu


// Story Product

let StoryProduct = [
    { id: 1, img: '../../Image/Story-cover1.jpeg', Title: 'لوازم التحریر' },
    { id: 2, img: '../../Image/Story.cover_2.jpeg', Title: 'مکمل دارویی' },
    { id: 3, img: '../../Image/Story.Cover_3.jpeg', Title: 'دکوری' },
    { id: 4, img: '../../Image/In-Story.Cover_11.jpeg', Title: 'آرایش صورت' },
    { id: 5, img: '../../Image/In-Story-cover-5.jpeg', Title: 'انواع بوت' },
    { id: 6, img: '../../Image/In-Story.Cover-6.jpeg', Title: 'برترین فروش ها' },
    { id: 7, img: '../../Image/6.jpg', Title: 'اکسسوری' },
    { id: 8, img: '../../Image/In-Storycover-8.jpeg', Title: 'استایل جذاب' },
    { id: 9, img: '../../Image/9.jpg', Title: 'لوازم مبلمان' },
    { id: 10, img: '../../Image/In-Story.cover-10.jpeg', Title: 'نظم دهنده' },
    { id: 11, img: '../../Image/In-Story.Cover_11.jpeg', Title: 'انواع کرم' },
    { id: 12, img: '../../Image/12.jpg', Title: 'انواع تزیینات' },
    { id: 13, img: '../../Image/13.jpg', Title: 'گوشی و موبایل' },
    { id: 14, img: '../../Image/14.jpg', Title: 'لوارم خانگی' },
    { id: 15, img: '../../Image/16.jpg', Title: 'هدفون بیسیم' },
    { id: 16, img: '../../Image/16.jpg', Title: 'اسمارت واچ' },
    { id: 17, img: '../../Image/17.jpg', Title: 'جانبی موبایل' },
    { id: 18, img: '../../Image/18.jpg', Title: 'گوشی و موبایل' },
]

let mainParent = $.getElementById('container_slider')
let divParentStory = $.createElement('div')
divParentStory.className = 'items_slider'

StoryProduct.forEach(function (products) {
    divParentStory.insertAdjacentHTML('beforeend', '<div class="swiper-slide1" id="container_img_sider_story"><img src=' + products.img + ' alt="" class="img_slider_story" onclick="ss()"><p>' + products.Title + '</p></div>')
})
mainParent.append(divParentStory)
// Story Product




//Slider Products
let userBasket = []

let productSlider = [
    { id: 1, class: "img_chang", image: '../Image/موبایل-اپل-آیفون-13-ظرفیت-128-گیگابایت-4-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 2, class: "img_change2", image: '../Image/iphone-12-white-select-2020-866x1024-1-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 3, class: "w", image: '../Image/wach-product-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 4, class: "w", image: '../Image/product1-1-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 5, class: "img_change2", image: '../Image/wach-apple-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 6, class: "w", image: '../Image/headset-product2-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 7, class: "w", image: '../Image/wach-product-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 8, class: "w", image: '../Image/headset-product3-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
]
let sliderProduct = $.querySelector('#slider-product')

let Slider1 = $.querySelector('.mySwiper1')

productSlider.forEach(function (products) {
    sliderProduct.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div><div class="items_slider_product"><div class="img_product"><img src=' + products.image + ' alt="" class=' + products.class + '></div><div class="prosice_products"><p>' + products.title1 + '</p><p>' + products.title2 + '</p></div><div class="price_offer"><span class="percent_offer">' + products.PercentPrice + '</span><del>' + products.priceRelly + '</del><p>' + products.offerPRice + '<span style="font-size: 11px;color: gray;">' + products.Toman + '</span></p></div><div class="time_offer_product"><span class="time_offer_product_icon" onClick=addProduct(' + products.id + ')><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"stroke-width="2"d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" /></svg></span><span class="time_offer_product_time">0 : 0 : 0 : 0<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"stroke-width="2"d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" /></svg></span></div><div class="container_color_mobile"><div class="color_mobile_red" id="myButton"></div><div class="color_mobile_blue" id="myButton2"></div><div class="color_mobile_black" id="myButton3"></div></div></div></div></div>')
})
Slider1.append(sliderProduct)


function addProduct(productId) {
    let appProductUserBsket = productSlider.find(function (products) {
        return products.id == productId
    })
    userBasket.push(appProductUserBsket)

    productsUserBasket(userBasket)
    console.log(userBasket);


    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        className: 'def',
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        html: '<p>محصول مورد نظر اضافه شد</p>',
    });
}

let lengtnuserBasket = $.querySelector('.Number_products_purchased')
let parentProductBuy = $.querySelector('.parent_buy_products')
let userBasketContainer = $.querySelector('.userBasket')
let bodyProDuctModal = $.querySelector('.body_modal_basket')
let numBasket = $.querySelector('.numBasket')
function productsUserBasket(userBasketArrey) {
    parentProductBuy.innerHTML = ''
    userBasketArrey.forEach(function (product) {
        parentProductBuy.insertAdjacentHTML('beforeend', ' <div class="container-buy-product"><div class="buy_product"><div class="deleteProduct"><svg onClick=removeProductFromUserbasket(' + product.id + ') class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"d="M6 18 17.94 6M18 18 6.06 6" /></svg></div><div class="img-buy-product"><img src=' + product.image + ' alt=""></div><div class="about-buy-product"><p class="title-product-buy">' + product.title1 + product.title2 + '</p><p class="garanti">' + product.GarantProduct + '</p><div class="container-price-product-boy"><p class="price_product_buy">' + product.offerPRice + '</p><div class="count-product"><div class="plus">+</div><input type="text" placeholder="1"></input><div class="minus">-</div></div></div></div></div></div>')

    })
    userBasketContainer.append(parentProductBuy)
    numBasket.innerHTML = userBasketArrey.length
    lengtnuserBasket.innerHTML = userBasketArrey.length
    if (userBasketArrey.length > 0) {
        bodyProDuctModal.style.display = 'none'
    }

    if (userBasketArrey.length == '') {
        bodyProDuctModal.style.display = 'flex'
    }

}


function removeProductFromUserbasket(products) {
    userBasket = userBasket.filter(function (productId) {
        return productId.id != products
    })
    productsUserBasket(userBasket)

}


//Slider Products



//Alert Product
let allProducts = [
    { id: 1, class: "img_chang", image: '../Image/موبایل-اپل-آیفون-13-ظرفیت-128-گیگابایت-4-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 2, class: "img_change2", image: '../Image/iphone-12-white-select-2020-866x1024-1-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 3, class: "w", image: '../Image/wach-product-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 4, class: "w", image: '../Image/product1-1-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 5, class: "img_change2", image: '../Image/wach-apple-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 6, class: "w", image: '../Image/headset-product2-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 7, class: "w", image: '../Image/wach-product-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 8, class: "w", image: '../Image/headset-product3-460x460.png', title1: 'گوشی موبایل اپل مدل', title2: 'iphone 13 A24 32 دوسیم', PercentPrice: '4%', priceRelly: '52.390.000', offerPRice: '47.290.000', Toman: ': تومان', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی' },
    { id: 9, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/موبایل-اپل-آیفون-13-ظرفیت-128-گیگابایت-4-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 10, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/iphone-13-pro-max-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 11, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/32-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 12, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/34-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 13, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/493b0d1dc02cf2cdf9eb3ebe7d5b0e5b6dc79ce1_1653825703-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 14, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/iphone-13-pro-max-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 15, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/PrdImages-fda96db6-a1f4-482e-b929-98cd385b4b33-460x460.webp', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 16, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/iphone-12-white-select-2020-866x1024-1-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 17, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/18-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 18, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/19-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 19, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/21-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 20, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/36.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 21, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/wach-apple-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 22, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/wach-product-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 23, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/2-10-600x600-1-300x300.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
]
allProducts.forEach(function (product) {
    let i = 0
    setInterval(() => {
        let productAlert = allProducts[i]
        i++
        if (i == 23) {
            i = 0
        }
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-right",
            showConfirmButton: false,
            heightAuto: false,
            height: 100,
            timer: 4000,
            padding: 0,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            html: `<div style="display:flex;align-items: center; justify-content:space-between;cursor: pointer">
                <div style="border-left: 1px solid #eceaea;">
                    <img src='${productAlert.image}' style="width:100px;padding-bottom: 12px;";height:100px>
                </div>

                <div style="margin-right:14px; margin-top:4px">
                    <p style="font-size:11px;margin-bottom:3px;color:black;">${productAlert.title1 + productAlert.title2}</p>
                    <p style="font-size:10px;margin-bottom:3px;color:grey">${productAlert.GarantProduct}</p>
                    <div style="display:flex;align-items: center;">
                        <del style="font-size:11px;margin-bottom:3px;color:rgb(255, 89, 0);">${productAlert.priceRelly}</del>
                        <p style="font-size:11px;margin-bottom:3px;color:black;margin-right:20px">${productAlert.offerPRice} : تومان</p>
                    </div>
                </div>
            <div>`,
        });
    }, 10000);
})

//Alert Product


//silder2 mobile 

let productSlider2 = [
    { id: 9, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/موبایل-اپل-آیفون-13-ظرفیت-128-گیگابایت-4-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 10, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/iphone-13-pro-max-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 11, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/32-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 12, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/34-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 13, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/493b0d1dc02cf2cdf9eb3ebe7d5b0e5b6dc79ce1_1653825703-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 14, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/iphone-13-pro-max-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 15, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/PrdImages-fda96db6-a1f4-482e-b929-98cd385b4b33-460x460.webp', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 16, title1: 'گوشی موبایل اپل مدل iphone13', title2: 'A2634 دوسیم کارت', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/iphone-12-white-select-2020-866x1024-1-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
]

let itemsProdct = $.querySelector('.swiper-wrapper2')
let containerProductSlider2 = $.querySelector('.mySwiper2')

productSlider2.forEach((items) => {
    itemsProdct.insertAdjacentHTML('beforeend', ' <div class="swiper-slide"><div class="slider-phone"><div class="container-image-slider-phone"><img class="image-slider-phone"src=' + items.image + ' alt=""></div><div><p class="title-phone-slider">' + items.title1 + '<br>' + items.title2 + '</p></div><div class="price-phone-slider"><span class="icon-shopping-cart" onClick=addProductSlide2(' + items.id + ')><img src=' + items.icon + ' alt="" ></span><div><div class="container-offer-price-phone-slider"><del>' + items.priceRelly + '</del><span class="offer-price-phone-slider">' + items.PercentPrice + '</span></div><div class="container-relly-price-phone-slider"><span class="relly-price-phone-slider">' + items.offerPRice + '</span><span class="toman">' + items.Toman + '</span></div></div></div></div></div>')
})
containerProductSlider2.append(itemsProdct)


function addProductSlide2(productId) {
    let appProductUserBsketSlider2 = productSlider2.find(function (products) {
        return products.id == productId
    })
    userBasket.push(appProductUserBsketSlider2)
    console.log(userBasket);

    productsUserBasket(userBasket)

    console.log(userBasket);

    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        className: 'def',
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        html: '<p>محصول مورد نظر اضافه شد</p>',
    });
}

function removeProductFromUserbaskets(products) {
    userBasket = userBasket.filter(function (productId) {
        return productId.id != products
    })
    productsUserBasket(userBasket)

}
//silder2 mobile 

//Slider Watch
let productsSlider3 = [
    { id: 17, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/18-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 18, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/19-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 19, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/21-460x460.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 20, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/36.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 21, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/wach-apple-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 22, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/wach-product-460x460.png', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
    { id: 23, title1: 'ساعت مچی عقربه ای سون فرایدی', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/2-10-600x600-1-300x300.jpg', priceRelly: '52,450,000', PercentPrice: '10%', offerPRice: '47,390,000', Toman: 'تومان' },
]

let itemsSlider3 = $.querySelector('.swiper-wrapper3')
let containerSlider3 = $.querySelector('.mySwiper3')

productsSlider3.forEach((items) => {
    itemsSlider3.insertAdjacentHTML('beforeend', ' <div class="swiper-slide"><div class="slider-phone"><div class="container-image-slider-phone"><img class="image-slider-phone"src=' + items.image + ' alt=""></div><div><p class="title-phone-slider">' + items.title1 + '<br>' + items.title2 + '</p></div><div class="price-phone-slider"><span class="icon-shopping-cart" onClick=addProductSlide3(' + items.id + ')><img src=' + items.icon + ' alt="" ></span><div><div class="container-offer-price-phone-slider"><del>' + items.priceRelly + '</del><span class="offer-price-phone-slider">' + items.PercentPrice + '</span></div><div class="container-relly-price-phone-slider"><span class="relly-price-phone-slider">' + items.offerPRice + '</span><span class="toman">' + items.Toman + '</span></div></div></div></div></div>')
})
containerSlider3.append(itemsSlider3)

function addProductSlide3(productId) {
    let appProductUserBsketSlider3 = productsSlider3.find(function (products) {
        return products.id == productId
    })
    userBasket.push(appProductUserBsketSlider3)
    console.log(userBasket);

    productsUserBasket(userBasket)

    console.log(userBasket);

    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        className: 'def',
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        html: '<p>محصول مورد نظر اضافه شد</p>',
    });
}

function removeProductFromUserbaskets(products) {
    userBasket = userBasket.filter(function (productId) {
        return productId.id != products
    })
    productsUserBasket(userBasket)

}
//Slider Watch

// btn group suggestion
let containerSpectial = $.querySelector('.container_products_special_item_suggestion_product')
let btnGroup1 = $.querySelector('.btn_group_product_special1')

btnGroup1.addEventListener('click', () => {
    containerSpectial.innerHTML = ''
    btnGroup1.classList.add('btn_group_product_special_active')
    containerSpectial.insertAdjacentHTML('beforeend', `  
         <div class="container_products_special_item_suggestion_product_description">
                <span>1.257.000 </span><span>تومان</span>
                <p class="title_decroption"> اپل واچ سری 7 نسخه 41 میلی متری نارنجی</p>
                <ul>
                    <li>فرم صفحه : مستطیل</li>
                    <li>قابلیت های ساعت هوشمند : کنترل سطح انرژی خون</li>
                    <li>زبان های قابل پشتیبان برای تماس ها و اعلان : انگلیسی</li>
                </ul>
                <p class="time_suggestion">زمان باقی مانده تا اتمام پشنهاد</p>
            </div>
            <div class="container_products_special_item_suggestion_product_image">
                <img src="./Image/wach-product-460x460.png" alt="">
            </div> `)
})
btnGroup1.addEventListener('mouseleave', () => {
    setTimeout(() => {
        btnGroup1.classList.remove('btn_group_product_special_active')
    }, 1000);
})

let btnGroup12 = $.querySelector('.btn_group_product_special2')

btnGroup12.addEventListener('click', () => {
    containerSpectial.innerHTML = ''
    btnGroup12.classList.add('btn_group_product_special_active')
    containerSpectial.insertAdjacentHTML('beforeend', `  
         <div class="container_products_special_item_suggestion_product_description">
                <span>51,450,000</span><span>تومان</span>
                <p class="title_decroption"> آیفون 13 پرو مکس 512 گیگابایت دو سیمکارت (ZAA) Active</p>
                <ul>
                    <li>فرم صفحه : مستطیل</li>
                    <li>قابلیت های ساعت هوشمند : کنترل سطح انرژی خون</li>
                    <li>زبان های قابل پشتیبان برای تماس ها و اعلان : انگلیسی</li>
                </ul>
                <p class="time_suggestion">زمان باقی مانده تا اتمام پشنهاد</p>
            </div>
            <div class="container_products_special_item_suggestion_product_image">
                <img src="./Image/slider2/iphone-13-pro-max-460x460.png" alt="">
            </div> `)
})
btnGroup12.addEventListener('mouseleave', () => {
    setTimeout(() => {
        btnGroup12.classList.remove('btn_group_product_special_active')
    }, 1000);
})


let btnGroup3 = $.querySelector('.btn_group_product_special3')

btnGroup3.addEventListener('click', () => {
    containerSpectial.innerHTML = ''
    btnGroup3.classList.add('btn_group_product_special_active')
    containerSpectial.insertAdjacentHTML('beforeend', `  
         <div class="container_products_special_item_suggestion_product_description">
                <span>2,860,000</span><span>تومان</span>
                <p class="title_decroption"> کوله پشتی میلت مدل PEUTEREY INTEGRALE 45+10</p>
                <ul>
                    <li>فرم صفحه : مستطیل</li>
                    <li>قابلیت های ساعت هوشمند : کنترل سطح انرژی خون</li>
                    <li>زبان های قابل پشتیبان برای تماس ها و اعلان : انگلیسی</li>
                </ul>
                <p class="time_suggestion">زمان باقی مانده تا اتمام پشنهاد</p>
            </div>
            <div class="container_products_special_item_suggestion_product_image">
                <img src="./Image/BackPack-High-Sierra-Karadon-30-L-W-M-L-705424886acbfb9-600x600-1-460x460.jpg" alt="">
            </div> `)
})
btnGroup3.addEventListener('mouseleave', () => {
    setTimeout(() => {
        btnGroup3.classList.remove('btn_group_product_special_active')
    }, 1000);
})


let btnGroup4 = $.querySelector('.btn_group_product_special4')

btnGroup4.addEventListener('click', () => {
    containerSpectial.innerHTML = ''
    btnGroup4.classList.add('btn_group_product_special_active')
    containerSpectial.insertAdjacentHTML('beforeend', `  
         <div class="container_products_special_item_suggestion_product_description">
                <span>36,400,000</span><span>تومان</span>
                <p class="title_decroption"> ساعت مچی عقربه ای سون فرایدی مدل SF-P1/03C0092</p>
                <ul>
                    <li>فرم صفحه : مستطیل</li>
                    <li>قابلیت های ساعت هوشمند : کنترل سطح انرژی خون</li>
                    <li>زبان های قابل پشتیبان برای تماس ها و اعلان : انگلیسی</li>
                </ul>
                <p class="time_suggestion">زمان باقی مانده تا اتمام پشنهاد</p>
            </div>
            <div class="container_products_special_item_suggestion_product_image">
                <img src="./Image/slider2/18-460x460.jpg" alt="">
            </div> `)
})
btnGroup4.addEventListener('mouseleave', () => {
    setTimeout(() => {
        btnGroup4.classList.remove('btn_group_product_special_active')
    }, 1000);
})


let btnGroup5 = $.querySelector('.btn_group_product_special5')

btnGroup5.addEventListener('click', () => {
    containerSpectial.innerHTML = ''
    btnGroup5.classList.add('btn_group_product_special_active')
    containerSpectial.insertAdjacentHTML('beforeend', `  
         <div class="container_products_special_item_suggestion_product_description">
                <span>4,639,000</span><span>تومان</span>
                <p class="title_decroption">  کوله پشتی میلت مدل PEUTEREY INTEGRALE 45+10</p>
                <ul>
                    <li>فرم صفحه : مستطیل</li>
                    <li>قابلیت های ساعت هوشمند : کنترل سطح انرژی خون</li>
                    <li>زبان های قابل پشتیبان برای تماس ها و اعلان : انگلیسی</li>
                </ul>
                <p class="time_suggestion">زمان باقی مانده تا اتمام پشنهاد</p>
            </div>
            <div class="container_products_special_item_suggestion_product_image">
                <img src="./Image/PEUTEREYproduct-460x460.png" alt="">
            </div> `)
})
btnGroup5.addEventListener('mouseleave', () => {
    setTimeout(() => {
        btnGroup5.classList.remove('btn_group_product_special_active')
    }, 1000);
})


let btnGroup6 = $.querySelector('.btn_group_product_special6')

btnGroup6.addEventListener('click', () => {
    containerSpectial.innerHTML = ''
    btnGroup6.classList.add('btn_group_product_special_active')
    containerSpectial.insertAdjacentHTML('beforeend', `  
         <div class="container_products_special_item_suggestion_product_description">
                <span>51,450,000</span><span>تومان</span>
                <p class="title_decroption"> اپل واچ سری 7 نسخه 41 میلی متری مشکی</p>
                <ul>
                    <li>فرم صفحه : مستطیل</li>
                    <li>قابلیت های ساعت هوشمند : کنترل سطح انرژی خون</li>
                    <li>زبان های قابل پشتیبان برای تماس ها و اعلان : انگلیسی</li>
                </ul>
                <p class="time_suggestion">زمان باقی مانده تا اتمام پشنهاد</p>
            </div>
            <div class="container_products_special_item_suggestion_product_image">
                <img src="./Image/slider2/36.jpg" alt="">
            </div> `)
})
btnGroup6.addEventListener('mouseleave', () => {
    setTimeout(() => {
        btnGroup6.classList.remove('btn_group_product_special_active')
    }, 1000);
})

let btnGroup7 = $.querySelector('.btn_group_product_special7')

btnGroup7.addEventListener('click', () => {
    containerSpectial.innerHTML = ''
    btnGroup7.classList.add('btn_group_product_special_active')
    containerSpectial.insertAdjacentHTML('beforeend', `  
         <div class="container_products_special_item_suggestion_product_description">
                <span>51,450,000</span><span>تومان</span>
                <p class="title_decroption">چمدان پلاستیکی مسافرتی صورتی </p>
                <ul>
                    <li>فرم صفحه : مستطیل</li>
                    <li>قابلیت های ساعت هوشمند : کنترل سطح انرژی خون</li>
                    <li>زبان های قابل پشتیبان برای تماس ها و اعلان : انگلیسی</li>
                </ul>
                <p class="time_suggestion">زمان باقی مانده تا اتمام پشنهاد</p>
            </div>
            <div class="container_products_special_item_suggestion_product_image">
                <img src="./Image/ad2c73252c4eeefe8d4f52aa3ccc75d15620a31b_1620673949-460x460.jpg" alt="">
            </div> `)
})
btnGroup7.addEventListener('mouseleave', () => {
    setTimeout(() => {
        btnGroup7.classList.remove('btn_group_product_special_active')
    }, 1000);
})
// btn group suggestion

//productSliderWatch
let productSliderWatch = [
    { id: 24, title1: 'ست ساعت مچی بین باند BINBOND مدل 2170', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/watch/229-460x460.webp', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 25, title1: 'ست ساعت مچی بین باند BINBOND مدل 2170', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/watch/336-460x460.webp', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 26, title1: 'ست ساعت مچی بین باند BINBOND مدل 2170', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/watch/366-460x460.webp', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 27, title1: 'ست ساعت مچی بین باند BINBOND مدل 2170', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/watch/371-460x460.webp', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 26, title1: 'ست ساعت مچی بین باند BINBOND مدل 2170', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/watch/376-460x460.webp', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 29, title1: 'ست ساعت مچی بین باند BINBOND مدل 2170', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/watch/381-460x460.webp', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 30, title1: 'ست ساعت مچی بین باند BINBOND مدل 2170', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/watch/447-460x460.webp', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 31, title1: 'ست ساعت مچی بین باند BINBOND مدل 2170', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/watch/452-460x460.webp', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 32, title1: 'ست ساعت مچی بین باند BINBOND مدل 2170', title2: 'مدل SF-P1/03C0092', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider2/watch/556-460x460.webp', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
]

let SliderWatchItems = $.querySelector('.swiper-wrapper4')
let containerSliderWatch = $.querySelector('.mySwiper8')

productSliderWatch.forEach((items) => {
    SliderWatchItems.insertAdjacentHTML('beforeend', ` <div class="swiper-slide">
                    <div class="slider-phone">
                        <div class="container-image-slider-phone">
                            <img class="image-slider-phone" src="${items.image}" alt="">
                        </div>
                        <div>
                            <p class="title-phone-slider">${items.title1}</p>
                        </div>
                        <div class="price-phone-slider">
                            <span onClick=addProductSWatch(${items.id}) class="icon-shopping-cart">
                                <img src="${items.icon}" alt="">
                            </span>
                            <div>
                                <div class="container-offer-price-phone-slider">
                                    <del>${items.priceRelly}</del>
                                    <span class="offer-price-phone-slider">${items.PercentPrice}</span>
                                </div>
                                <div class="container-relly-price-phone-slider">
                                    <span class="relly-price-phone-slider">${items.offerPRice}</span>
                                    <span class="toman">${items.Toman}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`)
})
containerSliderWatch.append(SliderWatchItems)

function addProductSWatch(productId) {
    let addPruductSliderWatch = productSliderWatch.find(function (products) {
        return products.id == productId
    })
    userBasket.push(addPruductSliderWatch)
    console.log(userBasket);

    productsUserBasket(userBasket)

    console.log(userBasket);

    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        className: 'def',
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        html: '<p>محصول مورد نظر اضافه شد</p>',
    });
}

function removeProductFromUserbaskets(products) {
    userBasket = userBasket.filter(function (productId) {
        return productId.id != products
    })
    productsUserBasket(userBasket)

}
//productSliderWatch

//productSliderHouseholdappliances
let productSliderHouseholdappliances = [
    { id: 33, title1: 'کتری برقی درما مدل BM-DH060B', title2: 'مدل BM-DH060B', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider3/22-1-300x300.jpg', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 34, title1: 'کتری برقی درما مدل BM-DH060B', title2: 'مدل BM-DH060B', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider3/25-2-300x300.jpg', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 35, title1: 'کتری برقی درما مدل BM-DH060B', title2: 'مدل BM-DH060B', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider3/4fada4-600x328-2-300x300.jpeg', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 36, title1: 'کتری برقی درما مدل BM-DH060B', title2: 'مدل BM-DH060B', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider3/c9d417-600x328-1-300x300.jpeg', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 37, title1: 'کتری برقی درما مدل BM-DH060B', title2: 'مدل BM-DH060B', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider3/gesperso2-product-300x300.jpg', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 38, title1: 'کتری برقی درما مدل BM-DH060B', title2: 'مدل BM-DH060B', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider3/ketray-product-460x460.png', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
    { id: 39, title1: 'کتری برقی درما مدل BM-DH060B', title2: 'مدل BM-DH060B', GarantProduct: 'قرمز - گارانتی 18 ماهه شرکتی', icon: '../Image/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg', image: '../Image/slider3/ketray2-product-460x460.png', priceRelly: '3,200,000', PercentPrice: '10%', offerPRice: '3,390,000', Toman: 'تومان' },
]

let sliderHouseholdappliancesItems = $.querySelector('.swiper-wrapper5')
let containersliderHouseholdappliancesItems = $.querySelector('.mySwiper9')

productSliderHouseholdappliances.forEach((items) => {
    sliderHouseholdappliancesItems.insertAdjacentHTML('beforeend', ` <div class="swiper-slide">
        <div class="slider-phone">
            <div class="container-image-slider-phone">
                <img class="image-slider-phone" src="${items.image}" alt="">
            </div>
            <div>
                <p class="title-phone-slider">${items.title1}</p>
            </div>
            <div class="price-phone-slider">
                <span onClick=addProductproductSliderHouseholdappliances(${items.id}) class="icon-shopping-cart">
                    <img src="${items.icon}" alt="">
                </span>
                <div>
                    <div class="container-offer-price-phone-slider">
                        <del>${items.priceRelly}</del>
                        <span class="offer-price-phone-slider">${items.PercentPrice}</span>
                    </div>
                    <div class="container-relly-price-phone-slider">
                        <span class="relly-price-phone-slider">${items.offerPRice}</span>
                        <span class="toman">${items.Toman}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
})

containersliderHouseholdappliancesItems.append(sliderHouseholdappliancesItems)

function addProductproductSliderHouseholdappliances(productId) {
    let addPruductSliderHouseholdappliances = productSliderHouseholdappliances.find(function (products) {
        return products.id == productId
    })
    userBasket.push(addPruductSliderHouseholdappliances)
    console.log(userBasket);

    productsUserBasket(userBasket)

    console.log(userBasket);

    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        className: 'def',
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        html: '<p>محصول مورد نظر اضافه شد</p>',
    });
}

function removeProductFromUserbaskets(products) {
    userBasket = userBasket.filter(function (productId) {
        return productId.id != products
    })
    productsUserBasket(userBasket)
}
//productSliderHouseholdappliances





