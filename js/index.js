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



//  Do T



let features = document.querySelector('h4:nth-of-type(1)');
features.id = 'features';
features.textContent = 'FEATURES';

const featuresParag = document.querySelector('p:nth-of-type(1)');
featuresParag.id = 'featPara';
featuresParag.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'



// let about = = document.querySelector('h4:nth-of-type(2)');
let about = document.querySelector("div.top-content > div:nth-child(2) > h4")
console.log(about)
about.id = 'about';
about.textContent = 'ABOUT';


let aboutParag = document.querySelector("div.top-content div:nth-child(2) p")
aboutParag.id = 'aboutPara';
aboutParag.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// const topContent = document.getElementsByClass('top-content');
// topContent.style.flex;


const textContent = document.querySelectorAll('.text-content');

let middleImg = document.getElementById('middle-img');
middleImg.src = 'img/mid-page-accent.jpg'

console.log(textContent)

textContent.forEach((card, i) => {
  if(i <= 1){
    card.style.background = 'red';
  }
  if(i > 1){
    card.style.background = 'blue';
}
})

// const navServices= document.querySelector('a:nth-of-type(1)');
// navServices.textContent = 'Services';

// const about = document.querySelector('h4');
// about.id = 'about';
// const aboutID = document.getElementById('about');
// about.textContent = 'ABOUT';
