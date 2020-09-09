window.onload = function() {
  FBInstant.initializeAsync().then(function(){
    FBInstant.logEvent('afterInitialized205');
			FBInstant.startGameAsync().then(function() {
			  FBInstant.logEvent('afterStartGameAsync');
			  document.startApp();
			});
  });
}

let cat_images = [];

for(let i = 0; i < 45; i++) {
  let new_image = new Image(200, 200);
  new_image.src = `cats/cat${i}.jpg`;
  cat_images.push(new_image.src)
}

const CATS = [
  {
    breed: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats that are extremely interactive cats and bond with their human family with great devotion.",
    image: [
      cat_images[0],
      cat_images[1],
      cat_images[2]
    ]
  },
  {
    breed: "American Curl",
    description: "Curls are very people-oriented, faithful, affectionate soulmates, adjusting remarkably fast to other pets, children, and new situations.",
    image: [
      cat_images[3],
      cat_images[4],
      cat_images[5]
    ]
  },
  {
    breed: "American Shorthair",
    description: "American Shorthairs are known for their longevity, robust health, good looks, sweet personality, and amiability.",
    image: [
      cat_images[6],
      cat_images[7],
      cat_images[8]
    ]
  },
  {
    breed: "Australian Mist",
    description: "The Australian Mist thrives on human companionship and makes for an entertaining companion for people of all ages.",
    image: [
      cat_images[9],
      cat_images[10],
      cat_images[11]
    ]
  },
  {
    breed: "Balinese",
    description: "Balinese are curious, outgoing, intelligent cats and they are known for their chatty personalities.",
    image: [
      cat_images[12],
      cat_images[13],
      cat_images[14]
    ]
  },
  {
    breed: "Cornish Rex",
    description: "The Cornish Rex is a confident cat who loves people, and will stay in kitten mode well into their senior years.",
    image: [
      cat_images[15],
      cat_images[16],
      cat_images[17]
    ]
  },
  {
    breed: "Himalayan",
    description: "Calm and devoted, Himalayans make excellent companions, though they prefer a quieter home. ",
    image: [
      cat_images[18],
      cat_images[19],
      cat_images[20]
    ]
  },
  {
    breed: "Manx",
    description: "The Manx is a placid, sweet cat that is gentle, playful and adores being with people.",
    image: [
      cat_images[21],
      cat_images[22],
      cat_images[23]
    ]
  },
  {
    breed: "Norwegian Forest Cat",
    description: "The Norwegian Forest Cat is a sweet, loving cat who patrols several times each day to make certain that all is fine.",
    image: [
      cat_images[24],
      cat_images[25],
      cat_images[26]
    ]
  },
  {
    breed: "Oriental",
    description: "Orientals are passionate about the people in their lives, but will entertain themselves with new adventures when you are not available.",
    image: [
      cat_images[27],
      cat_images[28],
      cat_images[29]
    ]
  },
  {
    breed: "Ragamuffin",
    description: "The Ragamuffin is calm, even tempered and gets along well with all family members. ",
    image: [
      cat_images[30],
      cat_images[31],
      cat_images[32]
    ]
  },
  {
    breed: "Russian Blue",
    description: "Russian Blues are very loving, reserved and they bond very closely with their owner.",
    image: [
      cat_images[33],
      cat_images[34],
      cat_images[35]
    ]
  },
  {
    breed: "Scottish Fold",
    description: "The Scottish Fold is a sweet, charming, affectionate breed that is easy to live with and care for.",
    image: [
      cat_images[36],
      cat_images[37],
      cat_images[38]
    ]
  },
  {
    breed: "Siamese",
    description: "Siamese are social cats that do not like being left alone for long periods of time, and are extremely fond of their people.",
    image: [
      cat_images[38],
      cat_images[39],
      cat_images[40]
    ]
  },
  {
    breed: "Sphynx",
    description: "The Sphynx is an intelligent, inquisitive, and people-oriented breed that commonly greets their owners at the front door with obvious excitement and happiness.",
    image: [
      cat_images[41],
      cat_images[42],
      cat_images[43],
    ]
  }
]

const ALL_SCREENS = document.querySelectorAll('.step');
const PLAY_BUTTON = document.querySelector('.start-game-btn');
const NEXT_BUTTON = document.querySelectorAll('.next');
var CURRENT_SCREEN = 0;

const OPTIONS = document.querySelectorAll('.option');
const LABELS = document.querySelectorAll('.label');


function showCat() {
  var randomCat = CATS[Math.floor(Math.random()*CATS.length)];
  var catImage = document.querySelector('.cat-image');
  var catName = document.querySelector('.cat-breed');
  var catBehavior = document.querySelector('.cat-description');
  var html = '<img src="' + randomCat.image[Math.floor(Math.random()*randomCat.image.length)] + '">';

  catImage.innerHTML = html;
  catName.innerHTML = randomCat.breed;
  catBehavior.innerHTML = randomCat.description;

}


showCat()

function playGame() {
  CURRENT_SCREEN = 0;
  ALL_SCREENS[CURRENT_SCREEN].style.display = 'block';
  
  LABELS.forEach(label => {
    label.addEventListener('click', () => {
      LABELS.forEach(label => {
        label.classList.remove('clicked')
      })
      label.classList.add('clicked')
    })
  })

  PLAY_BUTTON.addEventListener('click', () => {
    CURRENT_SCREEN = 1;
    ALL_SCREENS[CURRENT_SCREEN].style.display = "block";
    ALL_SCREENS[0].style.display = "none"; 
    NEXT_BUTTON.forEach(next_btn => {
      
      next_btn.addEventListener('click', () => {
        CURRENT_SCREEN = CURRENT_SCREEN + 1;
        ALL_SCREENS[CURRENT_SCREEN - 1].style.display = 'none';
        ALL_SCREENS[CURRENT_SCREEN].style.display = 'block';
        console.log(CURRENT_SCREEN)
      })
    })
  })
}

playGame()


