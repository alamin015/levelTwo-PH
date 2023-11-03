{
  const self = {
    name: "habib",
    age: 76,
    time: {
      gaming: ["pubg", "cricket", "football"],
      study: {
        upper: "krishnanagar hossenia high school",
        lower: "NMHS",
      },
    },
  };

  const {
    time: { study: { lower: mySchool } = {} },
  } = self;
  console.log(mySchool);

  const allFriends: string[] = ["halim", "rubel", "habbibur", "aksh", "sky"];
  const [, bestFrind, ...rest] = allFriends;

  /**
   *
   *
   *
   *
   * spacing
   */
}
