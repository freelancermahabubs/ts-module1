{
  // spread operator
  // rest opartor
  // destructuring

  //   learn spread operator
  const bros1: string[] = ["Mir", "mahabub", "nahid"];
  const bros2: string[] = ["tanmoy", "Rahat", "Firoz"];

  bros1.push(...bros2);

  const mentors = {
    typeScript: "Mahabub",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    nextjs: "Tanmoyt",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors,

    ...mentors2,
  };

  // learn rest operator

  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi, ${firend1} ${firend2} ${firend3}`);
    friends.forEach((friend: string )=> console.log(friend))
  };

  greetFriends("Abul", "Khabul", "Babul", "ubul", "labubl");
}
