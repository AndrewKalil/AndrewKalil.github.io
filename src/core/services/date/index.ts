import { Timestamp } from "firebase/firestore";

export const getMonthYearFormat = (date: Timestamp) => {
  if (!date) {
    return "Present";
  }
  return date
    .toDate()
    .toLocaleDateString("default", { month: "long", year: "numeric" });
};

type LocalExperience = {
  start: Timestamp;
  end: Timestamp;
};

export const sortCollectionByDate = <T extends LocalExperience>(
  collection: T[] | undefined
) => {
  if (!collection) {
    return [];
  }
  return collection.sort(
    (a, b) => b.start.toDate().getTime() - a.start.toDate().getTime()
  );
};
