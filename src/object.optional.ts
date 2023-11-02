{
  const user: {
    companyName: "programming hero"; // literal Type
    firstName: string;
    middleName?: string; // optional type
    readonly lastName: string;
  } = {
    companyName: "programming hero",
    firstName: "abdul",
    lastName: "halim",
  };

  //   user.lastName = "jashgdahdag" there is an error bcz readonly property cann't be changed
}
