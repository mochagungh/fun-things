function shuffle(array) {
  const newArray = array.slice(0);
  for (let i = 0; i < newArray.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = newArray[i];
    newArray[i] = newArray[randomIndex];
    newArray[randomIndex] = temp;
  }

  return newArray;
}

export default function initialCardList() {
  let id = 1;
  const cards = ["1", "2", "3", "4", "5", "6"].reduce((acc, type) => {
    acc.push({
      id: id++,
      type
    });
    acc.push({
      id: id++,
      type
    });
    return acc;
  }, []);

  return shuffle(cards);
}
