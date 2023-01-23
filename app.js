var movieSection = document.getElementById("movieSection");
var paypalEmailSection = document.getElementById("paypalEmailSection");
var paypalPasswordSection = document.getElementById("paypalPasswordSection");

var creditcardDiv = document.getElementById("creditcardDiv");
var cvvDiv = document.getElementById("cvvDiv");
const generalFare = 12.0;
const studentAndSeniorsFare = 12.0;
const detailsDiv = document.getElementById("timesDiv");
var movieArray = [
  {
    name: "The Dark Knight",
    runTime: "2h 32m",
    year_Relased: "July 18, 2008",
    Description:
      "The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos.",
    picture: "/assests/main.jpg",
    rating: "4.01",
    video: "https://www.youtube.com/embed/EXeTwQWrcwY",
    showTimeSection: [
      {
        date: "1/20/2023", //  date: ["1/20/2023","1/20/2023","1/20/2023"],  //  length now 9 but with this its more correct
        time: [
          { time: "9am-12pm" },
          { time: "1:30pm-4Pm" },
          { time: "6pm-8pm" },
        ],
      },
    ],
  },
  {
    name: "Tenet",
    runTime: "1h 47m",
    year_Relased: "August 12, 2020",
    Description:
      "Tintin, cartoon character, an intrepid young investigative reporter who stars in a series of popular Belgian comic book albums. Accompanied by his faithful fox terrier, Snowy (Milou in the original French), Tintin travels the world in the service of truth and justice.",
    picture: "/assests/tenet.jpg",
    rating: "4.5",
    video: "https://www.youtube.com/embed/AZGcmvrTX9M",
    showTimeSection: [
      {
        date: "2/20/2023",
        time: [
          { time: "9am-12pm" },
          { time: "1:30pm-4Pm" },
          { time: "6pm-8pm" },
        ],
      },
    ],
  },
  {
    name: "Venom",
    runTime: "1h 52m",
    year_Relased: "October 5, 2018",
    Description:
      "venom, the poisonous secretion of an animal, produced by specialized glands that are often associated with spines, teeth, stings, or other piercing devices. The venom apparatus may be primarily for killing or paralyzing prey or may be a purely defensive adaptation. Some venoms also function as digestive fluids.",
    picture: "/assests/movie3.jpeg",
    rating: "3.01",
    video: "https://www.youtube.com/embed/u9Mv98Gr5pY",
    showTimeSection: [
      {
        date: "3/20/2023",
        time: [
          { time: "9am-12pm" },
          { time: "1:30pm-4Pm" },
          { time: "6pm-8pm" },
        ],
      },
    ],
  },
  {
    name: "The Witcher",
    runTime: "1h 52m",
    year_Relased: "October 5, 2018",
    Description:
      "The Witcher is a fantasy drama web television series created by Lauren Schmidt Hissrich for Netflix. It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
    picture: "/assests/main.jpgs",
    rating: "6.5",
    video: "https://www.youtube.com/embed/u9Mv98Gr5pY",
    showTimeSection: [
      {
        date: "3/20/2023",
        time: [
          { time: "9am-12pm" },
          { time: "1:30pm-4Pm" },
          { time: "6pm-8pm" },
        ],
      },
    ],
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
      console.log(JSON.parse(localStorage.getItem("clickedMovie")));
      return true;
    }
    if (clickedMovie == "Tenet") {
      localStorage.setItem("clickedMovie", JSON.stringify(data));
      console.log(JSON.parse(localStorage.getItem("clickedMovie")));
      return true;
    }
    if (clickedMovie == "Venom") {
      localStorage.setItem("clickedMovie", JSON.stringify(data));
      console.log(JSON.parse(localStorage.getItem("clickedMovie")));
      return true;
    }
  }
};

//click EvenetHadler
movieSection.addEventListener("click", viewDetails);

function setData() {
  // const data = JSON.parse(localStorage.getItem("clickedMovie"));
  const data = movieArray[0];
  console.log("cliked Item:" + data.picture);
  document.getElementById("coverImg").src = data.picture;
  document.getElementById("description").innerHTML = data.Description;
  paypalEmailSection.style.display = "none";
  paypalPasswordSection.style.display = "none";
  creditcardDiv.style.display = "none";
  cvvDiv.style.display = "none";
}

function showPaypal() {
  var paypal = document.getElementById("paypalRadio");
  if (paypal.checked == true) {
    paypalEmailSection.style.display = "block";
    paypalPasswordSection.style.display = "block";
    creditcardDiv.style.display = "none";
    creditcardDiv.style.display = "none";
  } else {
    paypalEmailSection.style.display = "none";
    paypalPasswordSection.style.display = "none";
  }
}

function doCredit() {
  var creditRadio = document.getElementById("creditRadio");
  if (creditRadio.checked == true) {
    creditcardDiv.style.display = "block";
    cvvDiv.style.display = "block";
    paypalEmailSection.style.display = "none";
    paypalPasswordSection.style.display = "none";
  } else {
    creditcardDiv.style.display = "none";
    creditcardDiv.style.display = "none";
  }
}

function calculate() {
  console.log("HEre");
  var genralCount = document.getElementById("generalFare").value;
  var studentCount = document.getElementById("studentsFare").value;
  var ticketCount = genralCount + studentCount;
  var ticketsType = "";
  if (genralCount > 0) {
    ticketsType += " General ticket :" + genralCount;
  }
  if (studentCount > 0) {
    ticketsType += " Student And Seniors:" + studentCount;
  }

  if (generalFare == "") {
    genralCount = 0.0;
  }
  if (studentCount == "") {
    studentCount = 0.0;
  }
  const subTotal =
    generalFare * genralCount + studentAndSeniorsFare * studentCount;
  const total = subTotal + 5;
  document.getElementById("ticketCount").innerHTML = ticketsType;
  document.getElementById("subtotal").innerHTML =
    "Price of tickets:$" + subTotal;
  document.getElementById("total").innerHTML = "Total:$" + total;
}

function setDetails() {
  detailsDiv.style.display = "flex";
  detailsDiv.style.justifyContent = "space-evenly";
  const runtime = document.getElementById("runtime");
  const year_Relased = document.getElementById("yearReleased");

  const rating = document.getElementById("rating");
  // var data = JSON.parse(localStorage.getItem("clickedMovie"));
  const data = movieArray[0];
  const video = document.querySelector("iframe");
  video.src = data.video;
  video.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  );
  runtime.innerHTML = "<span>Runtime: </span>" + data.runTime;
  year_Relased.innerHTML = "<span>Year Released:</span>" + data.year_Relased;
  rating.innerHTML = "<span>Rating:</span>" + data.rating;
  document.getElementById("title").innerHTML = data.name;
  document.getElementById("description").innerHTML = data.Description;

  for (i = 0; i < movieArray[0].showTimeSection[0].time.length; i++) {
    const data = movieArray[0].showTimeSection[0].time[i];

    var button = document.createElement("button");
    button.className = "detailsButton";
    button.innerHTML = data.time;
    button.addEventListener("click", () => {
      location.href = "purchase.html";
    });
    detailsDiv.appendChild(button);
  }
}

function mainSectionClick() {
  localStorage.setItem("clickedMovie", JSON.stringify(movieArray[0]));
}

function validation() {}
// href="detail.html">
