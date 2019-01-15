// Variables declaradas
// const arrKeys = Object.values(window.LOL.data);
const sortBy = document.getElementById('lol-sort'); // Valores de cada Select
const inputSearchText = document.getElementById('search-for-champion'); // Búsqueda Ingresada
const btnSearch = document.getElementById('search-btn'); // Botón de Búsqueda
const tagArray = Object.values(document.getElementsByClassName('filter-champ')); // Valores de los checkboxes

// Fetch (?)
fetch('https://raw.githubusercontent.com/Laboratoria/lim-2018-11-bc-core-am-data-lovers/master/src/data/lol/lol.json')
  .then((response) => {
    return response.json();
  })
  .then((dataLOL) => {
    let arrKeysFetch = Object.values(dataLOL.data);
    containerOfAllFunctions(arrKeysFetch);
  })
  .catch((error) => {
    alert('Error' + error.message);
  });

function containerOfAllFunctions(arrKeys) {
  // Recorre la data y plasma en el html templates (cards y ventanas modales)

  const containerList = document.getElementById('container-list');
  const createTemplateCard = (arrKeys) => {
    let newArrKeys = [];
    let templates = [];
    containerList.value = '';

    for (let i = 0; i < arrKeys.length; i++) {
      newArrKeys.push(Object.assign({}, arrKeys[i]));
    }

    for (let i = 0; i < newArrKeys.length; i++) {
      templates.push(`

      <div class ="card-link">
          <a class="blog-card" id="${ newArrKeys[i].id }" href="#openmodal${i}">
          <div>
            <img class="post-image " src="${ newArrKeys[i].img}" />
            <div class="article-details" >
              <h1 class="post-name" id="${ newArrKeys[i].id }">${ newArrKeys[i].name} </h1>
              <h3 class="post-title" id="${ newArrKeys[i].id }"> ${ newArrKeys[i].title}</h3>
              <h3 class="post-title" id="${ newArrKeys[i].id }"> <img class="difficulty-img" src="img/difficulty.jpg"/> ${ newArrKeys[i].info.difficulty}</h3>
            </div>                   
          </div>
          </a>
      </div>
            
      <section id="openmodal${i}" class="modal-window">
        <div class = "modal-content" id="${ newArrKeys[i].id }">
        <a href="#" title="Close" class="modal-close">X</a>
        <img class="modal-img" src="${ newArrKeys[i].splash }" />
        <div class="modal-info">
        <img src="${ newArrKeys[i].img}"/>
        <h1>${ newArrKeys[i].name}</h1>
        <h3>${ newArrKeys[i].title}</h3>
        <p>${ newArrKeys[i].blurb}</p>
        <p>${ newArrKeys[i].tags}</p>
        <table>
        <tr>
          <th> Health Points (HP)</th>
          <th> HP per Level</th>
          <th> HP at Lvl. 5</th>
          <th> HP at Lvl. 10</th>
          <th> HP at Lvl. 15</th>
          <th> HP at Lvl. 18</th>
        </tr>
        <tr>
          <td>${ newArrKeys[i].stats.hp}</td>
          <td>${ newArrKeys[i].stats.hpperlevel}</td>
          <td>${window.data.computeStats(newArrKeys[i], 5)}</td>
          <td>${window.data.computeStats(newArrKeys[i], 10)}</td>
          <td>${window.data.computeStats(newArrKeys[i], 15)}</td>
          <td>${window.data.computeStats(newArrKeys[i], 18)}</td>
        </tr>
        </table>
        </div>

      </div>
      </section>`
      );
    }
    containerList.innerHTML = templates.join('');
  };
  createTemplateCard(arrKeys);

  // Filtrar
  // Se captura el valor de checkbox en un array al ser seleccionado y se quita el valor al deseleccionarlo
  const filterChamp = (arrayTag) => {
    let arrayChoices = [];
    arrayTag.forEach(tag => {
      tag.addEventListener('change', () => {
        if (tag.checked === true) {
          arrayChoices.push(tag.value);
        } else {
          const x = arrayChoices.indexOf(tag.value);
          arrayChoices.splice(x, 1);
          createTemplateCard(arrKeys);
        }
        createTemplateCard(window.data.filterData(arrKeys, arrayChoices)); // Se llama a la función filtrando con el array nuevo donde se encuentran los valores de los tags
      });
    });
  };
  filterChamp(tagArray);


  // Ordenar y Buscar

  const functionOrderSearch = () => {
    const listenSortBy = sortBy.options[sortBy.selectedIndex].value; // Llama a la posición en la que se encuentra cada opción del select
    const arrayInputSearch = window.data.searchData(arrKeys, inputSearchText.value); // Valores de la Búsqueda
    // const arrayFilter = window.data.filterData(arrKeys, tagArray);
    createTemplateCard(window.data.sortData(arrayInputSearch, parseInt(listenSortBy[0]), parseInt(listenSortBy[1]))); // Ingresa como data el array que se ha buscado permitiendo que se pueda ordenar
    // createTemplateCard(window.data.sortData(arrayFilter, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
  };

  const callFunctionToSearchAndOrder = () => {
    functionOrderSearch();
    sortBy.addEventListener('change', functionOrderSearch); // Se añade evento para la función de ordenado y búsqueda
    btnSearch.addEventListener('click', functionOrderSearch);
  };

  callFunctionToSearchAndOrder();

}

