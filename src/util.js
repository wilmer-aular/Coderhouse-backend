import LosslessJSON from 'lossless-json';

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