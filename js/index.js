const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navServices= document.querySelector('a:nth-of-type(1)');
navServices.textContent = 'Services';

const navProduct= document.querySelector('a:nth-of-type(2)');
navProduct.textContent = 'Product';

const navVision= document.querySelector('a:nth-of-type(3)');
navVision.textContent = 'Vision';

const navFeatures= document.querySelector('a:nth-of-type(4)');
navFeatures.textContent = 'Features';

const navAbout= document.querySelector('a:nth-of-type(5)');
navAbout.textContent = 'About';

const navContact= document.querySelector('a:nth-of-type(6)');
navContact.textContent = 'Contact';


const headLine = document.querySelector('h1');
headLine.innerHTML = 'DOM<br>IS<br>AWESOME';

const cta = document.querySelector('button');
cta.textContent = 'Get Started';


const ctaImage = document.querySelector('#cta-img');
ctaImage.src = 'img/header-img.png';




let features = document.querySelector('h4:nth-of-type(1)');
features.id = 'features';
features.textContent = 'FEATURES';

const featuresParag = document.querySelector('p:nth-of-type(1)');
featuresParag.id = 'featPara';
featuresParag.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'



let about = document.querySelector("div.top-content > div:nth-child(2) > h4")
about.id = 'about';
about.textContent = 'ABOUT';


let aboutParag = document.querySelector("div.top-content div:nth-child(2) p")
aboutParag.id = 'aboutPara';
aboutParag.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


const textContent = document.querySelectorAll('.text-content');

let middleImg = document.getElementById('middle-img');
middleImg.src = 'img/mid-page-accent.jpg'




// textContent.forEach((card, i) => {
//   if(i <= 1){
//
//   }
//   if(i > 1){
//
// }
// });


let services = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4")
services.id = 'services';
services.textContent = 'SERVICES';


let servicesParag = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(1) > p")
servicesParag.id = 'servicesPara';
servicesParag.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


let product = document.querySelector("div.bottom-content > div:nth-child(2) > h4")
product.id = 'product';
product.textContent = 'PRODUCT';


let productParag = document.querySelector("div.bottom-content div:nth-child(2) p")
productParag.id = 'productPara';
productParag.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let vision = document.querySelector("div.bottom-content > div:nth-child(3) > h4")
vision.id = 'vision';
vision.textContent = 'VISION';


let visionParag = document.querySelector("div.bottom-content div:nth-child(3) p")
visionParag.id = 'visionPara';
visionParag.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const contactHeading = document.querySelector("section.contact > h4")
contactHeading.id = 'contact';
contactHeading.textContent = 'CONTACT';

const contactParag = document.querySelector("section.contact > p:nth-child(2)")
contactParag.innerHTML = '123 Way 456 Street<br>Somewhere, USA<br><br>1(888) 888-8888<br><br>sales@greatidea.io'


let navigation = document.querySelectorAll('a');
// let navLinks = Array.from(navigation);

let intro = document.querySelector('nav');
console.log(intro)

let newNavItem = document.createElement('a');
newNavItem.textContent = 'Appended';

let newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Prepended';

intro.prepend(newNavItem2);
intro.appendChild(newNavItem);




navigation.forEach(link => link.style.color ='green');
