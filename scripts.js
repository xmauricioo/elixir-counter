$(document).ready();

var cardsTotal = cards.length;

for (let i = 0; i < cardsTotal; i++) {
  var cardName = cards[i].idName;
  var cardTitle = cards[i].name;
  var cardId = cards[i]._id;
  var cardRarity = cards[i].rarity;
  var elixirCost = cards[i].elixirCost;

  $('.cards__' + cardRarity).append('<img class="cards" data-elixir-cost="'
  + elixirCost +'" title=' + cardTitle + ' alt=' + cardName + ' id='
  + cardId + ' src=cards/' + cardName + '.png>'
  );
}

// DEFINIÇÕES DE TEMPO E ELIXIR BASICOS
var elixir1xTime = 2800;
var elixir2xTime = elixir1xTime/2;
var elixirBar1xTime = elixir1xTime*10;
var elixirBar2xTime = elixir2xTime*10;



var e = 5;

for (let i = 1; i <= e; i++) {
  $('[data-elixir-quantity="' + i + '"]').removeClass('elixir').addClass( "elixir" );
}

var elixirCounter = setInterval(myTimer, elixir1xTime);
function myTimer() {
  if (e < 10) {
    e++;
    console.log(e);
  }
  $('[data-elixir-quantity="' + e + '"]').addClass( "elixir" );
}

/* TESTANDO A DIMINUIÇÃO DO ELIXIR REF. A CARTA QUANDO CLICO NELA.
    E SE O 'E' FICAR MENOR QUE 0 ENTÃO DEIXO COMO 0 */
$(".cards").click( function () {
  let eCost = $(this).data('elixir-cost') // valor em elixir da carta
  for (let i = 0; i < eCost; i++ ) {
    $('[data-elixir-quantity="' + e + '"]').removeClass( "elixir" );
    e--;
    if (e < 0) {
      e = 0;
    }
    }
});


// PASSANDO AS CARTAS DISPONIVEIS PARA O DECK GERAL (NÃO O DECK DA MÃO)
var position = 1;

$(".cards").click( function () {
  var id = $(this).attr("alt");
  $('[data-card-deck="' + position + '"]')
    .css('background-image', 'url(cards/' + id + '.png)')

  position = position + 1;
  console.log(id, position);
});
