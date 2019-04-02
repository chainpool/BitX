export const isNumber = (value) => typeof value === 'number';

export const isFunction = (fun) => typeof fun === 'function';

export const Patterns = {
  required: (value, errMsg = '必填') => {
    return !value && value !== 0 ? errMsg : '';
  },
  equal: (value1, value2, errMsg = '不相等') => {
    if (value1 && value2) {
      return value1 === value2 ? '' : errMsg;
    }
    return '';
  },
  strictEqual: (value1, value2, errMsg = '不相等') => {
    return value1 === value2 ? '' : errMsg;
  },
  smaller: (inputValue, baseValue, errMsg = '余额不足') => {
    if (!isNaN(inputValue) && !isNaN(baseValue)) {
      return Number(inputValue) >= Number(baseValue) ? errMsg : '';
    }
  },
  smallerOrEqual: (inputValue, baseValue, errMsg = '余额不足') => {
    if (!isNaN(inputValue) && !isNaN(baseValue)) {
      return Number(inputValue) > Number(baseValue) ? errMsg : '';
    }
  },
  characterLength: (inputValue = '', minLength, maxLength) => {
    let result = '';
    result = inputValue.length >= minLength ? '' : `最少${minLength}个字符`;
    result = inputValue.length > maxLength ? `最多${maxLength}个字符` : result;
    return result;
  },
  check: (value) => {
    return (...params) => {
      if (!Patterns[value]) {
        return console.error('check对应的方法必须存在');
      }
      return Patterns[value](...params);
    };
  },
};
