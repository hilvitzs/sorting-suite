export const generateRandomNumber = length => {
  let randomArray = [];

  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
  }
  return randomArray;
}

export const compare = (a, b) => {
  
}
