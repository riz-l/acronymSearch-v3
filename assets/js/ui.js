const acronymsAndDefinitions = document.querySelector(
  ".acronyms-and-definitions"
);

// Render 'renderAcronymsAndDefinitions' Data
const renderAcronymsAndDefinitions = (data, id) => {
  const html = `
          <div class="card flex-row flex-wrap my-3 shadow-sm card-style" data-id="${id}">
            <div class="my-auto px-4">
            <div class="search-div">
              <i class="fas fa-align-left"></i>
            </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">${data.acronym}</h5>
              <p class="card-text">${data.definition}</p>
            </div>
          </div>
    `;

  acronymsAndDefinitions.innerHTML += html;
};
