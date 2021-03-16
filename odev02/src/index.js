var health = 2;

export function setCard(){
  console.log("New Game Start");
  health = 2;
  let area = document.getElementById('area');
  let images = ['<div class="card" data-type="dog" id="card_1" onclick="Cat.selectCard(1)"></div>','<div class="card" data-type="cat" id="card_2" onclick="Cat.selectCard(2)"></div>','<div class="card" data-type="dog" onclick="Cat.selectCard(3)" id="card_3"></div>'];
  for(let i = images.length-1; i > 0; i--){
    const j = Math.floor(Math.random() * i);
    const temp = images[i];
    images[i] = images[j];
    images[j] = temp;
  }
  area.innerHTML = images;
}

export function selectCard(id){
  if(id < 0){
    throw "Geçersiz ID";
  }
  if(id > 3){
    throw "ID Sınırı Aşıldı";
  }
  let messageBox = document.getElementById('message');

  if(health == 0){
    alert('Yeni Oyun Başlatmalısın');
    return false;
  }
  let selected = document.getElementById('card_'+id);
  if(selected.getAttribute("data-type") === "cat"){
    selected.innerHTML = "<img src='cat.jpg' />"
    messageBox.innerHTML = "KAZANDIN ! Yeni oyun için <a href='javascript:;' onclick='Cat.setCard()'>tıklayın</a>";
    health = 0;
  }else{
    messageBox.innerHTML = "Yanlış Seçim !";
    selected.innerHTML = "<img src='dog.jpg' />"
    health--;
    if(health == 0){
      messageBox.innerHTML = "Kaybettin ! Yeni oyun için <a href='javascript:;' onclick='Cat.setCard()'>tıklayın</a>";
    }
  }


}