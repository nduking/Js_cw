// const body = document.body;
// const card_container = document.getElementById("card_container");

// const url = "https://imdb236.p.rapidapi.com/api/imdb/most-popular-tv";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "imdb236.p.rapidapi.com",
//   },
// };

// fetch(url, options)
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((mostPopularTv) => {
//       console.log(data);
//       const card = document.createElement("div");
//       card.classList.add("card");

//       //Title
//       const primaryTitle = document.createElement("h3");
//       primaryTitle.textContent = mostPopularTv.primaryTitle;

//       card.append(primaryTitle);

//       main.append(card);
//       body.append(card_container);
//     });
//   })
//   .catch((error) => console.log(error));

// JS
const url = "https://imdb236.p.rapidapi.com/api/imdb/most-popular-tv";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "df6f651b12msh5081a3aea27eb26p12e61ajsn665106656828",
    "x-rapidapi-host": "imdb236.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    // Store data in localStorage immediately
    localStorage.setItem("tvData", JSON.stringify(data));
    console.log("Data saved to localStorage");

    // Use the data
    console.log(data);

    // Loop through data and create cards
    data.forEach((show) => {
      // Create elements
      const card = document.createElement("div");
      const image = document.createElement("img");
      const title = document.createElement("h2");
      const details = document.createElement("p");
      const description = document.createElement("p");
      const contentRating = document.createElement("small");

      let filmingLocation = ["Calgary, Alberta, Canada"];
      const filmingLocations = document.createElement("h3");

      let genre = ["Action", "Adventure", "Drama"];
      const genres = document.createElement("h4");

      //   let countriesOfOrigin = ["CA", "US"];
      //   const countriesOfOrigins = document.createElement("small");

      // Add content
      card.className = "card";

      image.src =
        show.primaryImage ||
        "https://via.placeholder.com/200x300?text=No+Image";
      image.alt = show.primaryTitle;
      image.style.width = "250px";
      image.style.height = "300px";
      image.style.objectFit = "cover";

      title.textContent = show.primaryTitle;
      details.textContent = `${show.type} • ${show.startYear} • Rating: ${show.averageRating}`;

      //Description
      description.textContent = show.description;

      //contentRating
      contentRating.textContent = show.contentRating;

      //filmLocation
      filmingLocations.textContent = show.filmingLocations;

      //genres
      genres.textContent = show.genres;

      //CoutriesOfOrigins
      //   countriesOfOrigins.textContent = show.countriesOfOrigins;

      // Build the card
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(details);
      card.appendChild(description);
      card.appendChild(contentRating);
      card.appendChild(filmingLocations);
      card.appendChild(genres);
      //   card.appendChild(countriesOfOrigins);

      // Add to container
      document.getElementById("card_container").appendChild(card);
    });
  })
  .catch((error) => {
    console.log("API failed:", error);
    console.log("Trying localStorage...");

    // If API fails, get data from localStorage
    const savedData = localStorage.getItem("tvData");
    if (savedData) {
      const data = JSON.parse(savedData);

      data.forEach((show) => {
        // Create elements
        const card = document.createElement("div");
        const image = document.createElement("img");
        const title = document.createElement("h2");
        const details = document.createElement("p");
        const description = document.createElement("p");
        const contentRating = document.createElement("small");

        let filmingLocation = ["Calgary, Alberta, Canada"];
        const filmingLocations = document.createElement("h3");

        let genre = ["Action", "Adventure", "Drama"];
        const genres = document.createElement("h4");

        // let countriesOfOrigin = ["CA", "US"];
        // const countriesOfOrigins = document.createElement("small");

        // Add content
        card.className = "card";

        image.src =
          show.primaryImage ||
          "https://via.placeholder.com/200x300?text=No+Image";
        image.alt = show.primaryTitle;
        image.style.width = "250px";
        image.style.height = "300px";
        image.style.objectFit = "cover";

        title.textContent = show.primaryTitle;
        details.textContent = `${show.type} • ${show.startYear} • Rating: ${show.averageRating}`;

        //Description
        description.textContent = show.description;

        //contentRating
        contentRating.textContent = show.contentRating;

        //filmLocation
        filmingLocations.textContent = show.filmingLocations;

        //genres
        genres.textContent = show.genres;

        //CoutriesOfOrigins
        // countriesOfOrigins.textContent = show.countriesOfOrigins;

        // Build the card
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(details);
        card.appendChild(description);
        card.appendChild(contentRating);
        card.appendChild(filmingLocations);
        card.appendChild(genres);
        // card.appendChild(countriesOfOrigins);

        // Add to container
        document.getElementById("card_container").appendChild(card);
      });
    }
  });
