export function setCard(){
  let images = [['cat',''],['dog',''],['dog','']];
  for(let i = images.length-1; i > 0; i--){
    const j = Math.floor(Math.random() * i);
    const temp = images[i];
    images[i] = images[j];
    images[j] = temp;
  }
  return images;
}
