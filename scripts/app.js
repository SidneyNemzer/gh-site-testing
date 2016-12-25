// Data
const classes = [
  {
    name: "General",
    heros: [
      {
        name: "General",
        image: "...",
        achievements: [
          {
            name: "Blackjack",
            image: "...",
            description: "Earn 21 postgame cards in quick or competative play"
          },
          {
            name: "Centenary",
            image: "...",
            description: "Win 100 games in quick or competitive play"
          },
          {
            name: "Decked Out",
            image: "...",
            description: "Collect 50 unlocks for a single hero"
          },
          {
            name: "Decorated",
            image: "...",
            description: "Earn 50 postgame medals in quick or competitive play"
          },
          {
            name: "The Friend Zone",
            image: "...",
            description: "Play a quick or competitive play game in a group with a friend"
          },
          {
            name: "Level 10",
            image: "...",
            description: "Reach level 10"
          },
          {
            name: "Level 25",
            image: "...",
            description: "Reach level 25"
          },
          {
            name: "Level 50",
            image: "...",
            description: "Reach level 50"
          },
          {
            name: "The Path is Closed",
            image: "...",
            description: "Destroy 3 of Symmetra's Teleporters in a single quick or competitive game"
          },
          {
            name: "Survival Expert",
            image: "...",
            description: "Use Health Packs to heal 900 health in a single life in quick or competitive play"
          },
          {
            name: "Undying",
            image: "...",
            description: "Get a 20 player kill streak in quick or competitive game"
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
        image: "...",
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
  let list = ""

  $listWrapper.innerHTML += `<div class="content-block-title">`+curClass.name+`</div>`
  list += `<div class="list-block media-list inset">
  <ul>`

  for (let hero = 0; hero < curClass.heros.length; hero++) {
    const curHero = curClass.heros[hero]

    list += `<li>
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

  list += `</ul>
  </div>`

  $listWrapper.innerHTML += list
}
$listWrapper.style.display = ''
document.querySelector('#loading').style.display = 'none'
