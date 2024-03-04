export const roundWithAcc  = function(num, acc = 1) {
  let accuracy = 10 * acc;
  return (Math.trunc(num * accuracy)) / accuracy;
}

export const format = function(num) {
  let number;
  if (num > 0 && num < 1000) {
    number = num;
  } else if (num > 999 && num < 1000000) {
    number = `${roundWithAcc(num / 1000)}k`;
  } else if (num > 999999 && num < 1000000000) {
    number = `${roundWithAcc(num / 1000000)}mln`
  } else {
    number = `${roundWithAcc(num / 1000000000)}bln`
  }
  return number
}

export const sortDataByParam = function(data, param) {
  const returnData = data;

  returnData.sort((hero1, hero2) => {
    if (hero1.get(param).props.pieces > hero2.get(param).props.pieces) return 1;
    if (hero1.get(param).props.pieces === hero2.get(param).props.pieces) return 0;
    if (hero1.get(param).props.pieces < hero2.get(param).props.pieces) return -1;
  })

  return returnData
}