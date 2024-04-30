import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql

  type LicensePlate {
    _id: String
    onSale: Boolean
    picture: String
    title: String
    price: Int
    year: Int
    state: String
    description: String
  }

  
  type ExchangeRates {
     USD: Float
     EUR: Float
     GBP: Float
  }
  
  type UsState {
    name: String
    abbreviation: String  
  }

  type Query {
    plates: [LicensePlate],
    exchangeRates: ExchangeRates,
    usStates: [UsState],
    cart: [LicensePlate],
  }
  
  type Mutation {
    addToCart(plateId: String): [LicensePlate],
    removeFromCart(plateId: String): [LicensePlate]
  }
 
`;

const plates = [
    {
        "_id": "5a0c8ab22d8dc1f7fa170c9d",
        "onSale": false,
        "picture": "http://angulartraining.com/plates/GA.jpg",
        "title": "2008 Georgia license plate",
        "price": 8,
        "year": 2008,
        "state": "GA",
        "description": "Ad occaecat ex nisi reprehenderit dolore esse. Excepteur laborum fugiat sint tempor et in magna labore quis exercitation consequat nulla tempor occaecat. Sit cillum deserunt eiusmod proident labore mollit. Cupidatat do ullamco ipsum id nisi mollit pariatur nulla dolor sunt et nostrud qui.\r\n"
    },
    {
        "_id": "5a0c8ab2fea86aa6a3180710",
        "onSale": true,
        "picture": "http://angulartraining.com/plates/NJ.jpg",
        "title": "2015 New Jersey license plate",
        "price": 11,
        "year": 2015,
        "state": "NJ",
        "description": "A beautiful license plate from the Garden State. Year is 2015. \r\n"
    },
    {
        "_id": "5a0c8ab27aecc7e77f4d73f0",
        "onSale": false,
        "picture": "http://angulartraining.com/plates/CA.png",
        "title": "2013 California My Tahoe license plate",
        "price": 9,
        "year": 2013,
        "state": "CA",
        "description": "Sunt irure nisi excepteur in ea consequat ad aliqua. Lorem duis in duis nisi sit. Cillum eiusmod ipsum mollit veniam consectetur ex eiusmod nisi laborum amet anim mollit non nulla. Lorem ea est exercitation nostrud consectetur officia laborum fugiat sint. Nostrud consequat magna officia minim et aute nostrud.\r\n"
    },
    {
        "_id": "5a0c8ab2e0ecc5ad7160530e",
        "onSale": true,
        "picture": "http://angulartraining.com/plates/CO.jpg",
        "title": "2010 Colorado license plate",
        "price": 5,
        "year": 2010,
        "state": "CO",
        "description": "Labore ea eu labore voluptate velit elit aute est velit consequat fugiat labore esse adipisicing. Laboris eiusmod eiusmod veniam cillum velit consectetur dolore cillum eiusmod qui ipsum. Consequat ullamco voluptate commodo aliquip elit dolor incididunt proident nostrud pariatur cillum excepteur Lorem adipisicing.\r\n"
    },
    {
        "_id": "5a0c8ab244b4ae424ec5ecae",
        "onSale": false,
        "picture": "http://angulartraining.com/plates/FL.png",
        "title": "2017 Florida license plate",
        "price": 10,
        "year": 2017,
        "state": "FL",
        "description": "In aliquip consectetur pariatur sunt nulla. Labore consequat proident magna est incididunt ex Lorem. Esse fugiat laborum quis ullamco. Duis duis nulla adipisicing aliqua exercitation nulla mollit commodo quis nulla enim.\r\n"
    },
    {
        "_id": "5a0c8ab26a89ddc39aeb44bf",
        "onSale": false,
        "picture": "http://angulartraining.com/plates/UT.jpg",
        "title": "2014 Utah license plate",
        "price": 10,
        "year": 2014,
        "state": "UT",
        "description": "Nisi ad commodo sint Lorem. Nulla laboris ad aute dolore do incididunt laborum nulla adipisicing anim pariatur et. Officia veniam laboris pariatur et irure sunt amet eiusmod nulla excepteur. Id nostrud tempor quis ipsum labore sunt mollit occaecat eiusmod. Laboris velit anim veniam proident minim magna Lorem nisi qui est. Ut ea id laborum cupidatat aliqua ut Lorem.\r\n"
    },
    {
        "_id": "5a0c8ab230637b3ea41203e9",
        "onSale": true,
        "picture": "http://angulartraining.com/plates/NY.jpg",
        "title": "2016 New York license plate",
        "price": 9,
        "year": 2016,
        "state": "NY",
        "description": "Et dolore ut id non cupidatat reprehenderit exercitation laboris occaecat aliquip ut ipsum minim reprehenderit. Dolor pariatur quis non veniam id pariatur irure ad reprehenderit reprehenderit eiusmod. Reprehenderit esse non nulla sunt enim incididunt fugiat minim.\r\n"
    },
    {
        "_id": "5a0c8ab21b3a613ec15a0073",
        "onSale": false,
        "picture": "http://angulartraining.com/plates/PA.jpg",
        "title": "2007 Pennsylvania license plate",
        "price": 11,
        "year": 2007,
        "state": "PA",
        "description": "Velit minim aute minim irure magna cupidatat est reprehenderit. Aliqua Lorem nostrud aliquip non voluptate qui fugiat. Amet pariatur proident cupidatat minim in laborum sit esse. Tempor eu eu elit cupidatat eu elit in aliqua eu culpa ut consequat culpa minim. Ut labore sit anim ea magna occaecat sunt laboris quis reprehenderit. Amet pariatur excepteur et ex et ex ad laboris aute nulla dolor ut nostrud.\r\n"
    }
];


const rates = {USD: 1, EUR: 1.2, GBP: 1.3};

const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];

const cartContents = [];


const resolvers = {
    Query: {
        plates: () => plates,
        exchangeRates: () => rates,
        usStates: () => states,
        cart: () => cartContents
    },
    Mutation: {
        addToCart:  (_, {plateId}) => {
            let plate = plates.find(p => p._id === plateId);
            if (plate)
                cartContents.push(plate);
            return cartContents;
        },
        removeFromCart:  (_, {plateId}) => {
            let index = cartContents.findIndex(p => p._id == plateId);
            if (index >= -1)
                cartContents.splice(index, 1);
             return cartContents;
        }
    }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
