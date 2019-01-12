// Función para Filtrar
const filterDataFunction = (data, choices) => {
  const arrKeysFilter = data.filter(champion => {
    const arrTrueFalse = [];
    choices.forEach(choice => {
      if (champion.tags.includes(choice)) {
        arrTrueFalse.push(true);
      } else {
        arrTrueFalse.push(false);
      }
    });

    if (arrTrueFalse.includes(false)) {
      return false;
    } else {
      return champion;
    }
  });
  return arrKeysFilter;
};

// Función para Ordenar
const sortDataFunction = (data, sortBy, sortOrder) => {
  let newArrayFilter = [];

  for (let i = 0; i < data.length; i++)
    newArrayFilter.push(Object.assign({}, data[i]));

  if (sortBy === 0) {
    // Ordenar por Alfabéticamente
    newArrayFilter.sort(
      function(championAsc, championDsc) {
        if (sortOrder === 0) {
          if (championAsc.name > championDsc.name) {
            return 1;
          } 
        } else {
          if (championAsc.name < championDsc.name) {
            return 1;
          } else {
            return -1;
          }
        }
      }
    );
  } else {
    // Ordenar por Dificultad
    newArrayFilter.sort(
      function(championAsc, championDsc) {
        if (sortOrder === 0) return championAsc.info.difficulty - championDsc.info.difficulty;
        else return championDsc.info.difficulty - championAsc.info.difficulty;
      });
  }
  return newArrayFilter;
};

// Función Estadística
const statFunction = (data, num) => {
  const healthPoints = [data.stats.hp];
  const healthPointsPerLevel = [data.stats.hpperlevel];
  return (parseFloat(healthPoints) + (parseFloat(healthPointsPerLevel) * num)).toFixed(2);
};


// Buscador
const searchDataFunction = (data, dataSearch) => {
  let dataCopy = [];
  let arraySearch = [];
  let newArraySearch = [];

  for (let i = 0; i < data.length; i++)
    dataCopy.push(Object.assign({}, data[i]));

  for (let i = 0; i < dataCopy.length; i++) {
    arraySearch.push(dataCopy[i].name.toLowerCase());
    if (arraySearch[i].indexOf(dataSearch.toLowerCase()) !== -1)
      newArraySearch.push(dataCopy[i]);
  }
  return newArraySearch;
};


window.data = {
  sortData: sortDataFunction,
  filterData: filterDataFunction,
  computeStats: statFunction,
  searchData: searchDataFunction,
};