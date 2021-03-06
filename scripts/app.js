// Data
const classes = [
  {
    name: "General",
    heros: [
      {
        name: "General",
        image: "unknown.png",
        achievements: [
          {
            name: "Blackjack",
            image: "unknown.png",
            description: "Earn 21 postgame cards in quick or competitive play"
          },
          {
            name: "Centenary",
            image: "unknown.png",
            description: "Win 100 games in quick or competitive play"
          },
          {
            name: "Decked Out",
            image: "unknown.png",
            description: "Collect 50 unlocks for a single hero"
          },
          {
            name: "Decorated",
            image: "unknown.png",
            description: "Earn 50 postgame medals in quick or competitive play"
          },
          {
            name: "The Friend Zone",
            image: "unknown.png",
            description: "Play a quick or competitive play game in a group with a friend"
          },
          {
            name: "Level 10",
            image: "unknown.png",
            description: "Reach level 10"
          },
          {
            name: "Level 25",
            image: "unknown.png",
            description: "Reach level 25"
          },
          {
            name: "Level 50",
            image: "unknown.png",
            description: "Reach level 50"
          },
          {
            name: "The Path is Closed",
            image: "unknown.png",
            description: "Destroy 3 of Symmetra's Teleporters in a single quick or competitive game"
          },
          {
            name: "Survival Expert",
            image: "unknown.png",
            description: "Use Health Packs to heal 900 health in a single life in quick or competitive play"
          },
          {
            name: "Undying",
            image: "unknown.png",
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
        image: "unknown.png",
        achievements: [
          {
            name: "Their Own Worst Enemey",
            image: "unknown.png",
            description: "Kill 2 enemies with a single use of Gengi's Deflect in quick or competitive play"
          },
          {
            name: "Slice and Dice",
            image: "unknown.png",
            description: "Kill 4 enemies with a single use of Genji's Dragonblade in quick or competitive play"
          }
        ]
      },
      {
        name: "McCree",
        image: "unknown.png",
        achievements: [
          {
            name: "Whoa There!",
            image: "unknown.png",
            description: "Interrupt and enemy ultimate ability with McCree's Flashbang in quick or competitive play"
          },
          {
            name: "It's High Noon",
            image: "unknown.png",
            description: "Get 4 killing blows with a single use of McCree's Deadeye in quick or competitive play"
          }
        ]
      },
      {
        name: "Pharah",
        image: "unknown.png",
        achievements: [
          {
            name: "Clearing the Area",
            image: "unknown.png",
            description: "Knock an enemy to their death using Pharah's Concussive Blast in quick or competitive play"
          },
          {
            name: "Death From Above",
            image: "unknown.png",
            description: "Kill 4 enemies in a row without touching the ground as Pharah in quick or competitive play"
          }
        ]
      },
      {
        name: "Reaper",
        image: "unknown.png",
        achievements: [
          {
            name: "Waste Not, Want Not",
            image: "unknown.png",
            description: "Get 3 solo kills with a single clip of Reaper's shotguns in quick or competitive play"
          },
          {
            name: "Die Die Die... Die",
            image: "unknown.png",
            description: "Kill 4 enemies with a single use of Reaper's Death Blossom in quick or competitive play"
          }
        ]
      },
      {
        name: "Soldier: 76",
        image: "unknown.png",
        achievements: [
          {
            name: "Rocket Man",
            image: "unknown.png",
            description: "Get 2 killing blows with a single use of Soldier: 76's Helix Rockets in quick or competitive play"
          },
          {
            name: "Target Rich Environent",
            image: "unknown.png",
            description: "Kill 4 enemies with a single use of Soldier: 76's Tactical Visor in quick or competitive play"
          }
        ]
      },
      {
        name: "Sombra",
        image: "unknown.png",
        achievements: [
          {
            name: "Hack the Planet",
            image: "unknown.png",
            description: "Hack 15 enemies without dying as Sombra in quick or competitive play"
          },
          {
            name: "Power Outage",
            image: "unknown.png",
            description: "Hack 6 enemies at once as Sombra in quick or competitive play"
          }
        ]
      },
      {
        name: "Tracer",
        image: "unknown.png",
        achievements: [
          {
            name: "Total Recall",
            image: "unknown.png",
            description: "Recover 400 health using Tracer's Recall without dying in quick or competitive play"
          },
          {
            name: "Special Delivery",
            image: "unknown.png",
            description: "Stick 4 of Tracer's Pulse Bombs onto enemies in a single quick or competitive play game"
          }
        ]
      }
    ]
  },
  {
    name: "Defense",
    heros: [
      {
        name: "Bastion",
        image: "unknown.png",
        achievements: [
          {
            name: "Triple Threat",
            image: "unknown.png",
            description: "Kill 2 enemies in each of Bastion's Configurations without dying in quick or competitive play"
          },
          {
            name: "Charge!",
            image: "unknown.png",
            description: "Kill 4 enemies with a single use of Bastion's Configuration: Tank in quick or competitive play"
          }
        ]
      },
      {
        name: "Hanzo",
        image: "unknown.png",
        achievements: [
          {
            name: "Simple Geometry",
            image: "unknown.png",
            description: "Get 2 killing blows with a single use of Hanzo's Scatter Arrow in quick or competitive play"
          },
          {
            name: "The Dragon is Sated",
            image: "unknown.png",
            description: "Kill 4 enemies with one of Hanzo's Dragonstrikes in quick or competitive play"
          }
        ]
      },
      {
        name: "Junkrat",
        image: "unknown.png",
        achievements: [
          {
            name: "Mine Like a Steel Trap",
            image: "unknown.png",
            description: "Knock an enemy into your Steel Trap using Junkrat's Concussion Mine in quick or competitive play"
          },
          {
            name: "Roadkill",
            image: "unknown.png",
            description: "Kill 4 enemies with a single use of Junkrat's RIP-Tire in quick or competitive play"
          }
        ]
      },
      {
        name: "Mei",
        image: "unknown.png",
        achievements: [
          {
            name: "Ice Blocked",
            image: "unknown.png",
            description: "Block 1200 Damage with a single use of Mei's Ice Wall in quick or competitive play"
          },
          {
            name: "Cold Snap",
            image: "unknown.png",
            description: "Freeze 4 enemies at once with Mei in quick or competitive play"
          }

        ]
      },
      {
        name: "Torbjörn",
        image: "unknown.png",
        achievements: [
          {
            name: "Armor Up!",
            image: "unknown.png",
            description: "Have one of Torbjörn's Armor Packs on 5 allies at the same time in quick or competitive play"
          },
          {
            name: "Raid Wipe",
            image: "unknown.png",
            description: "Kill 4 enemies during a single use of Torbjörn's Molten Core in quick or competitive play"
          }
        ]
      },
      {
        name: "Widowmaker",
        "image":"unknown.png",
        "achievements": [
          {
            "name": "Did That Sting?",
            image: "unknown.png",
            "description":"Kill 4 enemies using Widowmaker's Venom Mine during a single quick or competitive play game"
          },
          {
            "name":"Smooth As Silk",
            image: "unknown.png",
            "description":"Kill an enemy with a Scoped Headshot while airborne as Widowmaker in quick or competitive play"
          }
        ]
      }
    ]
  }
]

const heros = {};

// Convert classes list to heros list
classes.forEach(function(curClass) {
  curClass.heros.forEach(function(curHero) {
    heros[curHero.name] = {
      image: curHero.image,
      achievements: curHero.achievements,
      "class": curClass.name
    }
  })
})

// Initialize app
var app = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = app.addView('.view-main', {
  dynamicNavbar: true
});

const $listWrapper = document.querySelector('#list-wrapper')

classes.forEach( function(curClass) {
  let list = ""

  $listWrapper.innerHTML += `<div class="content-block-title">`+curClass.name+`</div>`
  list += `<div class="list-block media-list inset">
  <ul>`

  curClass.heros.forEach( function(curHero) {

    list += `<li>
    <a href=`+"#"+` class="item-link item-content" onclick="openHeroPage('`+curHero.name+`')">
      <div class="item-media"><img src="`+curHero.image+`" width="44"></div>
      <div class="item-inner">
        <div class="item-title-row">
          <div class="item-title">`+curHero.name+`</div>
        </div>
        <div class="item-subtitle">`+curHero.achievements.length+` achievements</div>
      </div>
    </a>
  </li>`
  })

  list += `</ul>
  </div>`

  $listWrapper.innerHTML += list
})
$listWrapper.style.display = ''
document.querySelector('#loading').style.display = 'none'
const $heroTemplate = document.querySelector('template#hero').content

function openHeroPage(name) {
  // Initialize page
  const $heroPage = $heroTemplate.cloneNode(true)
  const $loadingMessage = $heroPage.querySelector('#loading')
  const $pageContent = $heroPage.querySelector('.page-content')
  const hero = heros[name]
  $heroPage.querySelector('.navbar .center.sliding').innerText = name
  mainView.router.loadContent($heroPage)

  // Populate Achievements
  let list = ''
  list += `<div class="list-block media-list">
  <ul>`

  hero.achievements.forEach(function(achievement) {
    list += `<li>
      <a href="#" class="item-link item-content">
        <div class="item-media"><img src="`+achievement.image+`" width="44"></div>
        <div class="item-inner">
          <div class="item-title-row">
            <div class="item-title">`+achievement.name+`</div>
          </div>
          <div class="item-text">`+achievement.description+`</div>
        </div>
      </a>
    </li>`
  })

  list += `</ul>
  </div>`

  $pageContent.innerHTML += list
  $pageContent.querySelector('#loading').style.display = 'none'
}
