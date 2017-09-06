$(document).ready();

$.getJSON('http://www.clashapi.xyz/api/cards', function(json) {
 var cardsTotal = json.length;

for (let i = 0; i < cardsTotal; i++) {
  var cardName = json[i].idName;
  var cardId = json[i]._id;
  $('.cards__commons').append('<img title=' + cardName + ' alt=' + cardName + ' id=' + cardId +
      ' src=http://www.clashapi.xyz/images/cards/' + cardName + '.png>'
  );
  console.log(cardId);
}

});
