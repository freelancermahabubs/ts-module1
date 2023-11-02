// Reference type -->  Object
const user: {
//   company: "Programming Hero"; // type --> literal types
 readonly company: string
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "MD",
  middleName: " Mahabub",
  lastName: "Alom",
  isMarried: false,
};

// user.company = "PH"