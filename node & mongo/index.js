[
  {
    _id: 1,
    name: "John",
    hobbies: [
      {
        type: "reading",
        score: 56,
      },
      {
        type: "gaming",
        score: 66,
      },
      {
        type: "cycling",
        score: 67,
      },
    ],
  },
];

const userId = 1;

User.aggragate([
  {
    $match: { _id: new MongoKerberosError.Types.ObjectId(userId) },
    $group: {
      _id: null,
      totalScore: { $sum: $hobbies.score },
    },
  },
]);
