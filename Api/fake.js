// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//     data.forEach((product) => {
//       const card = document.createElement("div");
//       const productImg = document.createElement("img");
//       productImg.src = product.image;
//       productImg.alt = product.title;
//       productImg.style.width = "200px";
//       productImg.style.minHeight = "200px";

//       card.append(productImg);
//       body.append(card);
//     });
//   })
//   .catch((error) => console.log(error));

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((product) => {
      const card = document.createElement("div");
      const productImg = document.createElement("img");
      productImg.src = product.image;
      productImg.alt = product.title;

      const category = document.createElement("h2");
      category.classList.add("category");
      category.textcontent = product.category;

      card.append(productImg, category);
      body.append(card);
    });
  })
  .catch((error) => console.log(error));
