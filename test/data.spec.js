require('../src/data.js');
const input0 = [
  {id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png'},
  {id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png'},
  {id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png'}
];

const input1 = [
  {id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png'},
  {id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png'},
  {id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png'}
];

const input2 = [
  {id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png', tags: ['Mage', 'Assassin']},
  {id: 'Braum', name: 'Braum', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Braum.png', tags: ['Support', 'Tank']},
  {id: 'Corki', name: 'Corki', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Corki.png', tags: ['Marksman']}
];

const input2Choice = ['Mage'];

const input3 = {id: 'Ahri', key: '103', name: 'Ahri', stats: {hp: 514.4, hpperlevel: 80, mp: 334}};

const input4 = [
  {id: 'Ashe', name: 'Ashe', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png', info: {difficulty: 4}},
  {id: 'Braum', name: 'Braum', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Braum.png', info: {difficulty: 3}},
  {id: 'Darius', name: 'Darius', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Darius.png', info: {difficulty: 2}},
  {id: 'Morgana', name: 'Morgana', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Morgana.png', info: {difficulty: 1}},  
  {id: 'Quinn', name: 'Quinn', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Quinn.png', info: {difficulty: 5}}
];

const output1 = [
  {id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png'},
  {id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png'},
  {id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png'}  
];

const output2 = [
  {id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png'},
  {id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png'},
  {id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png'}
];
const output3 = [
  {id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png', tags: ['Mage', 'Assassin']},
];
const output4 = 1954.40;

const output5 = [
  {id: 'Morgana', name: 'Morgana', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Morgana.png', info: {difficulty: 1}},
  {id: 'Darius', name: 'Darius', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Darius.png', info: {difficulty: 2}},
  {id: 'Braum', name: 'Braum', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Braum.png', info: {difficulty: 3}},
  {id: 'Ashe', name: 'Ashe', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png', info: {difficulty: 4}},
  {id: 'Quinn', name: 'Quinn', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Quinn.png', info: {difficulty: 5}}
];

const output6 = [
  {id: 'Quinn', name: 'Quinn', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Quinn.png', info: {difficulty: 5}},
  {id: 'Ashe', name: 'Ashe', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png', info: {difficulty: 4}},
  {id: 'Braum', name: 'Braum', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Braum.png', info: {difficulty: 3}},
  {id: 'Darius', name: 'Darius', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Darius.png', info: {difficulty: 2}},
  {id: 'Morgana', name: 'Morgana', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Morgana.png', info: {difficulty: 1}}
];

describe('data', () => {
  it('Debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });

  describe('data.sortData', () => {
    it('Debería ser una función', () => {
      expect(typeof window.data.sortData).toBe('function');
    });
    it('Debería devolver el array de la A-Z', () => {
      expect(window.data.sortData(input0, 0, 0)).toEqual(output1);
    });
    it('Debería devolver el array de la Z-A', () => {
      expect(window.data.sortData(input1, 0, 1)).not.toEqual(output2);
    });
    it('Debería devolver el array ordenado por dificultad de menor a mayor', () => {
      expect(window.data.sortData(input4, 1, 0)).toEqual(output5);
    });
    it('Debería devolver el array ordenado por dificultad de mayor a menor', () => {
      expect(window.data.sortData(input4, 1, 1)).toEqual(output6);
    });
  }); 
  
  describe('data.filterData', () => {
    it('Debería ser una función', () => {
      expect(typeof window.data.filterData).toBe('function');      
    });
    it('Debería devolver el array filtrado por el rol Mage', () => {
      expect(window.data.filterData(input2, input2Choice)).toEqual(output3);
    });
  });

  describe('data.computeStats', () => {
    it('Debería ser una función', () => {
      expect(typeof window.data.computeStats).toBe('function');
    });
    it('Debería devolver 1954.40', () => {
      expect(window.data.computeStats(input3, 18)).not.toEqual(output4);
    });
  });
  
  describe('data.searchData', () => {
    it('Debería ser una función', () => {
      expect(typeof window.data.searchData).toBe('function');
    });
    it('Debería devolver solo el array buscado', () => {
      expect(window.data.searchData(input2, 'ahri')).toEqual(output3);
    });
  });
});