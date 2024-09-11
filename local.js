

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

const skills = [
  { img: "images/Profile pics/Icons/html.png", alt: "HTML" },
  { img: "images/Profile pics/Icons/css.png", alt: "CSS5" },
  { img: "images/Profile pics/Icons/Bootstrap.png", alt: "Bootstrap 5" },
  { img: "images/Profile pics/Icons/javascript.png", alt: "JavaScript" },
  { img: "images/Profile pics/Icons/Jquery.png", alt: "jQuery" },
  { img: "images/Profile pics/Icons/react.png", alt: "React.js" },
  { img: "images/Profile pics/Icons/Node.png", alt: "Node.js" },
  { img: "images/Profile pics/Icons/express.png", alt: "Express.js" },
  { img: "images/Profile pics/Icons/git.png", alt: "Git" },
  { img: "images/Profile pics/Icons/java.png", alt: "java" },
  { img: "images/Profile pics/Icons/postgre.png", alt: "sql" },
  { img: "images/Profile pics/Icons/canva.png", alt: "Canva" }
];

function SkillCard(skill) {
  return `
    <div class="col-lg-3 col-md-4 col-sm-6 text-center m-2 d-flex justify-content-center align-items-center Tech_icon">
   
      <img class="icon-ig2" src="${skill.img}" alt="${skill.alt}" style="max-width: 100px; height: auto;">
     
      
    </div>
  `;
}

function displaySkills() {
  const boxer = document.getElementById("skill");
  boxer.innerHTML = skills.map(SkillCard).join('');
}

// Call the function to display the skills
displaySkills();








const certificates = [
  {
    img: "images/Certificates/AI.png",
    Certificate_id: "Certificate ID: c9c1444db3700ebfc0d2f8c07f1d72381ffb97b5233d126688c592bc64b0b55d"
  },
  {
    img: "images/Certificates/Goldmen Sacs.png",
    Certificate_id: "Certificate ID: fWgabQnn4YGNfehpS"
  },
  {
    img: "images/Certificates/MS900.png",
    Certificate_id: "Certificate ID: BCC3D8-3DE0B5"
  },
  {
    img: "images/Certificates/phising.png",
    Certificate_id: "Certificate ID: BCC3D8-3DE0B5"
  },
  {
    img: "images/Certificates/Server.png",
    Certificate_id: "Certificate ID: BCC3D8-3DE0B5"
  }
];


function createCarousel(certificate, index) {
  return `
    <div class="carousel-item ${index === 0 ? 'active' : ''} text-center">
      <img class="Cert-img" src="${certificate.img}" class="d-block " alt="Certificate Image">
      <div class="carousel-caption d-none d-md-block">
        <h5>Certificate Number</h5>
        <p>${certificate.Certificate_id}</p>
      </div>
    </div>
  `;
}

// Function to insert all carousel items into the container
function displayCertificates(certificates) {
  const container = document.querySelector('.carousel-inner');
  container.innerHTML = certificates.map(createCarousel).join('');
}

// Call the function to display the certificates
displayCertificates(certificates);








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
      <div class="card bg-dark border border-warning" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${project.img}" class="img-fluid rounded-start" alt="${project.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-warning">${project.title}</h5>
              <p class="card-text text-warning">${project.desc}</p>
              <a href="${project.link}" class="btn btn-outline-warning" target="_blank" rel="noopener noreferrer">Visit</a>
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




