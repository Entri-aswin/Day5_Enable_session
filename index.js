console.log("hello world");
const productImage = document.getElementById("productImage");
const productTitle = document.getElementById("productTitle");
const productDesc = document.getElementById("productDesc");
const productPrice = document.getElementById("productPrice");

const fetchProductDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            productImage.src = data.image;
            productTitle.innerHTML = data.title;
            productDesc.innerHTML = data.description;
            productPrice.innerHTML = data.price + " $";
        })
        .catch((error) => console.log(error));
};

// fetchProductDetails(1);

const fetchProductList = () => {
    fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            data.map((value, index) => {
                const productList = document.getElementById("productList");
                const productCard = document.createElement("article");
                productCard.classList.add("product-card");

                productList.appendChild(productCard);

                const imgDiv = document.createElement("div");
                imgDiv.classList.add("img-container");
                productCard.appendChild(imgDiv);

                const img = document.createElement("img");
                img.src = value.image;
                imgDiv.appendChild(img);

                const detailsDiv = document.createElement("div");
                detailsDiv.classList.add("details");
                productCard.appendChild(detailsDiv);

                const productTitle = document.createElement("h4");
                productTitle.innerHTML = value.title;
                detailsDiv.appendChild(productTitle);

                productCard.addEventListener('click',fetchProductDetails(value.id))
            });
        })
        .catch((error) => console.log(error));
};

// fetchProductList();
