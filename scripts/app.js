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
