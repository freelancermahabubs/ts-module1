{
  // ternary operator  || optional chainig || nulish coalescing operator

  const age: number = 15;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";

  console.log({isAdult});

  //   nullish coalecing operator

  // null / undefined  ---> decision makeing

  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  console.log({result1});

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Persian",
    address: {
      city: "Mymenshingh",
      road: "12, awesome road",
      presentAddress: "My Town",
    },
  };

  const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({permanentAddress})
  //
}
