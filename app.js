var movieSection = document.getElementById("movieSection");
var movieArray = [
  {
    name: "The Dark Knight",
    runTime: "2h 32m",
    year_Relased: "July 18, 2008",
    Description:
      "The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos.",
    picture: "/assests/the_dark_knight.jpg",
    showTimeSection: {
      date: "1/20/2023",
      time: { time1: "9am-12pm", time2: "1:30pm-4Pm", tim3: "6pm-8pm" },
    },
  },
  {
    name: "Tenet",
    runTime: "1h 47m",
    year_Relased: "August 12, 2020",
    Description:
      "Tintin, cartoon character, an intrepid young investigative reporter who stars in a series of popular Belgian comic book albums. Accompanied by his faithful fox terrier, Snowy (Milou in the original French), Tintin travels the world in the service of truth and justice.",
    picture: "/assests/tenet.jpg",
    showTimeSection: {
      date: "2/20/2023",
      time: { time1: "9am-12pm", time2: "1:30pm-4Pm", tim3: "6pm-8pm" },
    },
  },
  {
    name: "Venom",
    runTime: "1h 52m",
    year_Relased: "October 5, 2018",
    Description:
      "venom, the poisonous secretion of an animal, produced by specialized glands that are often associated with spines, teeth, stings, or other piercing devices. The venom apparatus may be primarily for killing or paralyzing prey or may be a purely defensive adaptation. Some venoms also function as digestive fluids.",
    picture: "/assests/movie3.jpeg",
    showTimeSection: {
      date: "3/20/2023",
      time: { time1: "9am-12pm", time2: "1:30pm-4Pm", tim3: "6pm-8pm" },
    },
  },
];
//funcation
const viewDetails = (evnt) => {
  console.log(evnt);
  console.log(evnt.target);
  const clickedMovie = evnt.target.getAttribute("data-movieName");
  for (var i = 0; i < movieArray.length; i++) {
    var data = movieArray[i];
    if (clickedMovie == "The_Dark_Knight") {
      localStorage.setItem("clickedMovie", JSON.stringify(data));
      console.log(
        "We are here" + JSON.parse(localStorage.getItem("clickedMovie"))
      );
    }
    if (clickedMovie == "Tenet") {
    }
    if (clickedMovie == "Venom") {
    }
  }
};

//click EvenetHadler
movieSection.addEventListener("click", viewDetails);

function setData() {
  const data = JSON.parse(localStorage.getItem("clickedMovie"));
  console.log("cliked Item:" + data.picture);
  document.getElementById("coverImg").scr = data.picture;
  document.getElementById("description").innerHTML = data.Description;
}