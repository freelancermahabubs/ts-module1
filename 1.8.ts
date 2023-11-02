{
  // destructuring

  const user = {
    id: 345,
    name: {
      firstName: "MD",
      middleName: "Mahabub",
      lastName: " Alom",
    },
    contactNo: "0145222022",
    address: "Mymenshingh",
  };
  const {
    contactNo,
    name: {firstName},
  } = user;
}

// array destructuring
const myFriends = ["chandler", "joey", "roos", "mahaub", "mokika", "phoebe"];
const [, , bestFriend, ...rest] = myFriends;
