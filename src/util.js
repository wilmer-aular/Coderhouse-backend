import LosslessJSON from 'lossless-json';

const majorkey = (array) => {
  const getMax = (a, b) => Math.max(a, b);
  return array.reduce(getMax);
};
export const createId = (array) => {
  if (array.length) {
    const majorId = (majorkey(array.map((i) => i.id))) + 1;
    return majorId;
  } 
  return 1;
};

export const setProduct = (i) => {
  return {
    ...i,
      id : JSON.parse(i.id),
      price : JSON.parse(i.price), 
  }
};

export const fromStringList = (value) => {
    if (!value) return [];
    const valueList = '[' + value + ']';
    return LosslessJSON.parse(valueList).map(setProduct);
  };
  export const fromListString = (v) => {
    if (v.length) {
      const transformer = LosslessJSON.stringify(v);
      return transformer.substring(1, transformer.length - 1);
    }
    return '';
  };

export const listProducts = [
  {title:"Papa",price:400,thumbnail:"wwww.papa.com"}, 
  {title:"Pasta",price:350,thumbnail:"wwww.pasta.com"},
  {title:"Harina",price:600,thumbnail:"wwww.harina.com"},
  {title:"Cereal",price:200,thumbnail:"wwww.Cereal.com"},
  {title:"Arroz",price:500,thumbnail:"wwww.arroz.com"},
  {title:"Cafe",price:800,thumbnail:"wwww.cafe.com"},
  {title:"Porotos",price:800,thumbnail:"wwww.Porotos.com"},
]