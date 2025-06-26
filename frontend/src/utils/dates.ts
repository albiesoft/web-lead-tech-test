// Here I do a simple function to transform a Date to a string with date-fn

import { format, isToday, isYesterday } from "date-fns";

// probably this can be done with localisation with `Intl.RelativeTimeFormat`
export const daysAgo = (timestamp: string) => {
  if (isToday(timestamp)) {
    return "Today";
  }

  if (isYesterday(timestamp)) {
    return "Yesterday";
  }

  return format(timestamp, "MMMM d, yyyy");
};
