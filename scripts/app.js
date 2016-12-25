// Data
const classes = [
  {
    name: "General",
    heros: [
      {
        name: "General",
        image: "",
        achievements: [
          {
            name: "Blackjack",
            image: "",
            description: "Earn 21 postgame cards in quick or competative play"
          }
        ]
      }
    ]
  },
  {
    name: "Offense",
    heros: [
      {
        name: "Gengi",
        image: "",
        achievements: [
          {
            name: "Their Own Worst Enemey",
            description: "Kill 2 enemies with a single use of Gengi's Deflect in quick or competative play"
          }
        ]
      }
    ]
  }
]

// Initialize app
var app = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = app.addView('.view-main', {
  dynamicNavbar: true
});

const $listWrapper = document.querySelector('#list-wrapper')

for (let _class = 0; _class<classes.length; _class++) {
  const curClass = classes[_class]

  $listWrapper.innerHTML += `<div class="content-block-title">`+curClass.name+`</div>
<div class="list-block media-list inset">
  <ul>`

  for (let hero = 0; hero < curClass.heros.length; hero++) {
    const curHero = curClass.heros[hero]

    $listWrapper.innerHTML += `<li>
    <a href=`+"#"+` class="item-link item-content">
      <div class="item-media"><img src="`+curHero.image+`" width="44"></div>
      <div class="item-inner">
        <div class="item-title-row">
          <div class="item-title">`+curHero.name+`</div>
        </div>
        <div class="item-subtitle">`+curHero.achievements.length+` achievements</div>
      </div>
    </a>
  </li>`
  }

  $listWrapper.innerHTML += `</ul>
  </div>`
}
$listWrapper.style.display = ''
document.querySelector('#loading').style.display = 'none'
