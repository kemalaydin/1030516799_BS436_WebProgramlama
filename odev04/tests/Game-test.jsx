const React = require('react');
const { mount } = require('enzyme');
const { Game }  = require('../src/Game');

test("Test Oluşturuldu",()=>{
  const driver = mount(<Game />);
  const cards = driver.find('.card');
  expect(cards.length).toEqual(3);
});

test("Resim Seçme Testi",() => {
  const driver = mount(<Game />);
  let card = driver.find('.card').at(0);
  card.simulate('click');
  card = driver.find('.card').at(0);
  let type = card.find('img').prop("src");
  if(type === "cat.jpg"){
    console.log("Success Select");
  }else{
    console.log("Unsuccess Select");
  }
});

test("Oyun Sonlandırma Testi",() => {
  const driver = mount(<Game />);
  for(let i = 0; i <= 2; i++){
    let card = driver.find('.card').at(i);
    card.simulate('click');
    card = driver.find('.card').at(i);
    let type = card.find('img').prop("src");
    if(type === "cat.jpg"){
      console.log("Success Select");
    }else{
      console.log("Unsuccess Select");
    }
  }
});