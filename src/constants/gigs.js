const _venueRenderer = (gig) => {
  if(gig.venue === "Hell Saloon"){
    return {
      time: "9:00 PM",
      address1: "4095 Patterson Lake Rd.",
      address2: "Pinckney, MI 48169",
      url: "http://www.hellsaloon.com/",
    }
  }

  if(gig.venue === "Zukey Lake Tavern"){
    return {
      time: "8:00 PM",
      address1: "5011 Girard Dr",
      address2: "Pinckney, MI 48169",
      url: "http://www.zukeylaketavern.com/"
    }
  }

  if(gig.venue === "LIVE"){
    return {
      time: "6:00 PM",
      address1: "102 S 1st St, Ann Arbor, MI 48104",
      address2: "Ann Arbor, MI 48103",
      url: "http://livea2.com/"
    }
  }

  return {};
}

//Filter out old gigs
const dateFilterer = (gig) => {
  const sanitizedDateString = gig.date.replace(/\./g, "/");
  // Treat the gig as if it's tomorrow so it's visible day-of.

  const sanitizedDate = new Date(sanitizedDateString);
  sanitizedDate.setDate(sanitizedDate.getDate() + 1);
  return sanitizedDate > new Date();
}

export const Gigs = [
  {
    venue: "Georgetown Concerts",
    date: "08.17.19",
    address1: "1355 King George Blvd",
    address2: "Ann Arbor, MI 48108",
    time: "8:00 PM",
  },
  {
    venue: "Hell Saloon",
    date: "08.23.19",
  },
  {
    venue: "Hell Saloon",
    date: "09.28.19",
  },
  {
    venue: "Hell Saloon",
    date: "10.26.19",
  },
].filter(dateFilterer).map(gig => Object.assign(_venueRenderer(gig), gig));


