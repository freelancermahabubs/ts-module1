{
  // Unioun types

  //   type ForntEndDeveloper = "fakibazDeveloper" | "JuniorDeveloper";
  //   type FullStackDeveloper = "frontendDeveloper" | "ExpertDeveloper";

  //   type  Developer = ForntEndDeveloper | FullStackDeveloper

  //   const newDeveloper: ForntEndDeveloper = "JuniorDeveloper";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "AB+";
  //   };

  //   const user1: User = {
  //     name: "Mahabub",
  //     email: "mahabub@gmail.com",
  //     gender: "male",
  //     bloodGroup: "O+",
  //   };

  type ForntEndDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "BackEnd Developer";
  };

  type FullStackDeveloper = ForntEndDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "BackEnd Developer",
  };

  //
}
