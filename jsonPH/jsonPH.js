console.log("Check");
const body = document.body;

const cardContainer = document.createElement("div");
cardContainer.classList.add("card_container");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((datas) => {
    console.log("Data Values:", datas);

    datas.forEach((data) => {
      const card = document.createElement("div");
      card.classList.add("card");

      // Id
      const id = document.createElement("small");
      id.classList.add("id");
      id.textContent = data.id;

      // user Id
      const userId = document.createElement("small");
      userId.classList.add("userId");
      userId.textContent = data.userId;

      // Title
      const title = document.createElement("h2");
      title.textContent = data.title;

      // Body
      const cardBody = document.createElement("p");
      cardBody.textContent = data.body;

      card.append(id, title, cardBody, userId);

      cardContainer.append(card);
      body.append(cardContainer);
    });
  })
  .catch((error) => console.log(error));
