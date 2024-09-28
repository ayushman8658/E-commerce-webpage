const wrapper = document.querySelector(".sliderwrapper")
const menuitem = document.querySelectorAll(".menuitem")
// product array or details
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 110,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],

  },

  {
    id: 2,
    title: "Air Jorden ",
    price: 250,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],

  },

  {
    id: 3,
    title: "Blazer",
    price: 100,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],

  },

  {
    id: 4,
    title: "Crater",
    price: 110,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],

  },

  {
    id: 5,
    title: "Hippie",
    price: 110,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "darkbalck",
        img: "./img/hippie2.png",
      },
    ],

  },

];

let choosenProduct = products[0]
const currentProductImg = document.querySelector(".productimg");
const currentProductTitle = document.querySelector(".producttitle");
const currentProductPrice = document.querySelector(".productprice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuitem.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosenProduct
    choosenProduct = products[index]

    //change text of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price; 
    currentProductImg.src =choosenProduct.colors[0].img;

     //assing new colors
    currentProductColors.forEach((colors,index)=>{
      colors.style.backgroundColor= choosenProduct.colors[index].code;
    });
        

  });
});

currentProductColors.forEach((colors,index)=>{
  colors.addEventListener("click",()=>{
    currentProductImg.src=choosenProduct.colors[index].img
  });
});

// for sizes color changing
currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    // for changing the previous one or same color size 
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="white"
      size.style.color="black"
    });
    // for next one 
    size.style.backgroundColor="black"
    size.style.color="white"
  });
});
const productButton=document.querySelector(".productbutton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
});

close.addEventListener("click",()=>{
  payment.style.display="none"
});