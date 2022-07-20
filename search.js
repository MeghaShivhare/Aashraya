// sticky nav bar START------------------------------------------------------------
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    if(this.window.pageYOffset > 100) //scroll value  
    {
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
});

//sticky nav bar END-------------------------------------------------------------------------

// search filter
let products = {
    data : [
        {
            productName: "A.K. Hostel Mumbai",
            category: "Paying-Guest",
            price: 8100,
            image: "media/hostel/AKhostel.jpg",
        },
        {
            productName: "Aashiyaan - Nagpur",
            category: "On-Rent",
            price: 5500,
            image: "media/hostel/Aashiyaan (1).jpg",
        },
        {
            productName: "Happiness - Banglore",
            category: "Dormitory",
            price: 9500,
            image: "media/hostel/Happiness.jpg",
        },
        {
            productName: "Moon PG Pune",
            category: "Paying-Guest",
            price: 5500,
            image: "media/hostel/Moon.jpg",
        },
        {
            productName: "Sukoon Chennai",
            category: "Dormitory",
            price: 5900,
            image: "media/hostel/Sukoon.jpg",
        },
        {
            productName: "Waikiki - Manali",
            category: "Buy",
            price: 6500,
            image: "media/hostel/Waikiki.jpg",
        },
        {
            productName: "Waikiki - Manali",
            category: "Buy",
            price: 6500,
            image: "media/hostel/Waikiki.jpg",
        },
    ],
};

for(let i of products.data){
    //creating cards 
    let card = document.createElement("div");
    //card's should have category and stay hidden initially
    card.classList.add("card", i.category , "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();   
    container.appendChild(name);

    //price
    let price = document.createElement("h6");
    price.innerText = "Rs." + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}


//parameter passed from button (Parameter same as category)
function filter(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        // console.log("searchInput");
        //display all cards on 'all' button click
        if (value == "all") {
        element.classList.remove("hide");
        console.log("searchInput");
        } 
        else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
          console.log("searchInput");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
}


//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });

//Intially display ALL hostels
window.onload = () => {
    filter('all');
};

