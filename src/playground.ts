import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test@gmail.com",
    firstName: "onkar",
    lastName: "more",
  },
});
console.log("Done");
