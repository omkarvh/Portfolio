

//graphs
var xValues = ["Html", "Css", "Bootstrap 5", "Vanilla Js", "Jquery",""];
var yValues = [65, 48, 75, 55, 45,0];
var barColors = ["orange", "skyblue","blue","orange","blue"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Front End technologies "
    }
  }
});

var x2Values = ["Node js", "Express", "Git", "Postgre SQL", "My SQL",""];
var y2Values = [55, 65, 75, 68, 45,0];
var barColors = ["Green", "white","orange","blue","brown"];

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: x2Values,
    datasets: [{
      backgroundColor: barColors,
      data: y2Values
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Back End technologies and Data base"
    }
  }
});

//graphs end



document.getElementById('year').textContent = new Date().getFullYear();


//typing effect
var wordsToType = document.querySelector("span[words]").getAttribute("words").split(','), 
            typer =  document.querySelector("span[words]"), 
            typingSpeed = (parseInt(typer.getAttribute('typing-speed')) || 70), 
            typingDelay = (parseInt(typer.getAttribute('typing-delay')) || 700);
    
var currentWordIndex = 0, currentCharacterIndex = 0; 

function type(){

    var wordToType = wordsToType[currentWordIndex%wordsToType.length];

    if(currentCharacterIndex < wordToType.length){
        typer.innerHTML += wordToType[currentCharacterIndex++];
        setTimeout(type, typingSpeed);
    }else{

        setTimeout(erase, typingDelay);
    }

}
function erase(){
    var wordToType = wordsToType[currentWordIndex%wordsToType.length]; 
    if(currentCharacterIndex >0){
        typer.innerHTML = wordToType.substr(0, --currentCharacterIndex -1);
        setTimeout(erase, typingSpeed);
    }else{

        currentWordIndex++; 
        setTimeout(type, typingDelay);
    }

}

window.onload = function(){
    type(); 
}

/* number counter
document.querySelectorAll('.count').forEach(function (element) {
  let start = 0;
  let end = parseInt(element.textContent, 10);
  let duration = 4000; // Duration in milliseconds
  let startTime = null;

  function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let value = Math.min(start + (end - start) * (progress / duration), end);
      element.textContent = Math.ceil(value);

      if (progress < duration) {
          requestAnimationFrame(animate);
      }
  }

  requestAnimationFrame(animate);
});

*/
// Define your project object
// Define an array of project objects
const projects = [
  {
    img: "images/Projects/Simon.jpg",
    title: "Simon-Game",
    desc: "A memory challenge where you repeat growing sequences of colors and sounds. Test and improve your memory skills ",
    link: "https://omkarvh.github.io/Simon-Game/"
  },
  {
    img: "images/Projects/Drumkit.jpg",
    title: "Drum Kit",
    desc: "Create beats by clicking on drum pads to play different sounds. An interactive way to compose music and enjoy rhythm",
    link: "https://omkarvh.github.io/Drum-kit/"
  },
  {
    img: "images/Projects/Hostel.jpg",
    title: "Hostel-website",
    desc: "A Bootstrap project, basic landing page for local business where animation cards and contact form involved currently used by a client ",
    link: "https://omkarvh.github.io/Hostel-Website/"
  },
  {
    img: "images/Projects/Todo.jpg",
    title: "To-do list (Vanilla JS)",
    desc: "A javascript project using B-5 as frontend, build for a college project,used basic functions like clear(),create() CRUD operations",
    link: "https://github.com/omkarvh/To-do-list-Basic-"
  }
  ,
  {
    img: "images/Projects/HostelM.jpg",
    title: "Hostel Management system",
    desc: "Hostel management is a full-stck website, where dashboard present for operations,graphs,attendence,billing included",
    link: "https://example.com/yet-another-project"
  }
  ,
  {
    img: "images/Projects/Blog.jpg",
    title: "Movie Api",
    desc: "This is movie API project, which suggest random movies which are hit and above 6 imdb rating, We can also search movies from database of OMDb API",
    link: "https://omkarvh.github.io/Movie-api/"
  }
  // Add more project objects as needed
];

// Function to create a card element
function createCard(project) {
  return `
    <div class="col-md-6 col-lg-4 mb-3">
      <div class="card bg-warning" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${project.img}" class="img-fluid rounded-start" alt="${project.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-dark">${project.title}</h5>
              <p class="card-text text-dark">${project.desc}</p>
              <a href="${project.link}" class="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Visit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to insert all cards into the container
function displayProjects(projects) {
  const container = document.getElementById('project-cards');
  container.innerHTML = projects.map(createCard).join('');
}

// Call the function to display projects
displayProjects(projects);




