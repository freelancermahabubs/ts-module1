{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };
  const student1: Student = {
    name: " Mahabub",
    age: 21,
    gender: "Male",
    contactNo: "01405330209",
    address: "Mymenshigh",
  };

  const stundent2: Student = {
    name: " Alom",
    age: 21,
    gender: "Male",
    address: "Mymenshigh",
  };

  type UserName = string;

  type IsAdmin = boolean;
  const userName: UserName = "Mahabub";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
