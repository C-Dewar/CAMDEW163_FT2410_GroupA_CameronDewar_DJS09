// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number

import { showReviewTotal, populateUser } from './utils';
import { Permissions, LoyaltyUser } from './enums';
const propertyContainer = document.querySelector('.properties') as HTMLElement;
const footer = document.querySelector('.footer');

let isOpen: boolean;

const reviewTotalDisplay = document.querySelector('#reviews');

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: '27-03-2021',
  },
];
const you = {
  firstName: 'Cam',
  lastName: 'Dewar',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 33,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};

const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: string;
  isAvailable: boolean;
}[] = [
  {
    image: '/images/colombia-property.jpg',
    title: 'Colombian Shack',
    price: 45,
    location: {
      firstLine: 'shack 37',
      city: 'Bogota',
      code: 45632,
      country: 'Colombia',
    },
    contact: 'marywinkle@gmail.com',
    isAvailable: true,
  },
  {
    image: '/images/poland-property.jpg',
    title: 'Polish Cottage',
    price: 34,
    location: {
      firstLine: 'no 23',
      city: 'Gdansk',
      code: 343903,
      country: 'Poland',
    },
    contact: 'garydavis@hotmail.com',
    isAvailable: false,
  },
  {
    image: '/images/london-property.jpg',
    title: 'London Flat',
    price: 23,
    location: {
      firstLine: 'flat 15',
      city: 'London',
      code: 35433,
      country: 'United Kingdom',
    },
    contact: 'andyluger@aol.com',
    isAvailable: true,
  },
];

//Functions

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

//Adding the properties
let authorityStatus: any;

let isLoggedIn = true;

function showDetails(
  authorityStatus: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (authorityStatus) {
    const priceDisplay = document.createElement('div');
    priceDisplay.innerHTML = price.toString() + '/night';
    element.appendChild(priceDisplay);
  }
}

for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = properties[i].title;
  const image = document.createElement('img');
  image.setAttribute('src', properties[i].image);
  card.appendChild(image);
  propertyContainer.appendChild(card);
  showDetails(you.permissions, card, properties[i].price);
}

let currentLocation: [string, string, number] = ['London', '11.03', 17];
footer.innerHTML =
  currentLocation[0] +
  ' ' +
  currentLocation[1] +
  ' ' +
  currentLocation[2] +
  '°';
