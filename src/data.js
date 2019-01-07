// Función para Filtrar
const filterChamp = document.getElementsByClassName('filter-champ');
const tagArray = Object.values(filterChamp);
let choices = [];

tagArray.forEach(tag => {
  tag.addEventListener('change', () => {
    if (tag.checked === true) {
      choices.push(tag.value);
    } else {
      const x = choices.indexOf(tag.value);
      choices.splice(x, 1);
      createTemplateCard(arrKeys);
    }

    const arrKeysFilter = arrKeys.filter(data => {
      const arregloTrueFalse = [];
      choices.forEach(choice => {
        if (data.tags.includes(choice)) {
          arregloTrueFalse.push(true);
        } else {
          arregloTrueFalse.push(false);
        }
      });

      if (arregloTrueFalse.includes(false)) {
        return false;
      } else {
        return data;
      }
    });

    createTemplateCard(arrKeysFilter);
  });
});

// Ordenar
const sortDataFunction = (data, sortBy, sortOrder) => {
  let newArrayFilter = [];

  for (let i = 0; i < data.length; i++)
    newArrayFilter.push(Object.assign({}, data[i]));

  if (sortBy === 0) {
    // Ordenar por Alfabéticamente
    newArrayFilter.sort(
      function(ab, cd) {
        if (sortOrder === 0) {
          if (ab.name > cd.name) return 1;
          else return -1;
        } else {
          if (ab.name < cd.name) return 1;
          else return -1;
        }
      }
    );
  } else {
    // Ordenar por Dificultad
    newArrayFilter.sort(
      function(ab, cd) {
        if (sortOrder === 0) return ab.info.difficulty - cd.info.difficulty;
        else return cd.info.difficulty - ab.info.difficulty;
      });
  }
  return newArrayFilter;
};

// Función Estadística
const statFunction = (num, arrKeys) => {
  return (parseFloat(arrKeys.stats.hp) + (parseFloat(arrKeys.stats.hpperlevel) * num)).toFixed(2);
};

// Buscador
const searchDataFunction = (data, dataSearch) => {
  let dataCopy = [];
  let arraySearch = [];
  let newArraySearch = [];

  for (let i = 0; i < data.length; i++)
    dataCopy.push(Object.assign({}, data[i]));

  if (dataSearch.length === 0)
    return dataCopy;

  for (let i = 0; i < dataCopy.length; i++) {
    arraySearch.push(dataCopy[i].name.toLowerCase());
    if (arraySearch[i].indexOf(dataSearch.toLowerCase()) !== -1)
      newArraySearch.push(dataCopy[i]);
  }
  return newArraySearch;
};


window.data = {
  sortData: sortDataFunction,
  searchData: searchDataFunction,
  computeStats: statFunction,
};