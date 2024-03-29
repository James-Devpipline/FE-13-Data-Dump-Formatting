/*
Assignments 3/2/2023

Data Dump Formatting -
  You have been given a raw data dump that is structured as an array of objects. The object's keys are companies, and the values are arrays of emails followed by a 3 digit department number. I need you to write a program that will go through the data, print the emails for each company and what department number that email belongs to. The format could look something like:
  Company One
  email: email@email.com, dept: 123
  email: email@email.com, dept: 123

  Company Two
  email: email@email.com, dept: 123
  email: email@email.com, dept: 123
*/

const data = [
  {
    Google: [
      "test@test.com 123",
      "test@test.com 321",
      "test@test.com 451",
      "test@test.com 123",
    ],
  },
  {
    Yahoo: [
      "test@test.com 123",
      "test@test.com 321",
      "test@test.com 451",
      "test@test.com 451",
    ],
  },
  {
    IBM: [
      "test@test.com 888",
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
    ],
  },
  {
    GREGS: [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    "AUTO SHOP": [
      "test@test.com 888",
      "test@test.com 555",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
  {
    "PAWN SHOP": [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Nike: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
  {
    Franks: [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
  {
    Tims: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
    ],
  },
  {
    Apple: [
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Sony: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Disney: [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Popies: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Sally: [
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 888",
      "test@test.com 123",
    ],
  },
  {
    Henry: [
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 555",
      "test@test.com 555",
    ],
  },
  {
    "Dave's": [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
];

// how john did it. Litterally just looping through that set of data, need to study this futher later on
const organizeData = (array) => {
  for (company of array) {
    const companyName = Object.keys(company)[0];
    console.log(companyName);
    for (i of company[companyName]) {
      i = i.split(" ");
      console.log(`${i[0]} -- Dep ${i[1]}`);
    }
  }
};

organizeData(data);
