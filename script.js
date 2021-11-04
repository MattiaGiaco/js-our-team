// creo un arrey di oggetti con ogni membro

const members = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder CEO',
    foto: 'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief editor',
    foto: 'img/angela-caroll-chief-editor.jpg'
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social media manager',
    foto: 'img/angela-lopez-social-media-manager.jpg'
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic designer',
    foto: 'img/barbara-ramos-graphic-designer.jpg'
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office manager',
    foto: 'img/walter-gordon-office-manager.jpg'
  }
]

let html = '';

// creo un ciclo per leggere gli oggetti
for(let index in members){
  const member = members[index];

  const nome = member.nome;
  const ruolo = member.ruolo;
  const foto = member.foto;

  // creo html
  html +=`
     <div class="team-card">
       <div class="card-image">
         <img src="${foto}"/>
       </div>
       <div class="card-text">
         <h3>${nome}</h3>
         <p>${ruolo}</p>
       </div>
     </div>    
    `;
}

// stampo html
document.querySelector('.team-container').innerHTML = html
   


// function memberStamp(){
//   teamContiner.innerHTML = '';

//   for(let member of members){
//     for(let key in member){
//      // console.log(`${key}: ${member[key]}`);
//      teamContiner.innerHTML += 
//      `
//       <div class="team-card">
//         <div class="card-image">
//           <img src="${member[key].foto}" />
//         </div>
//         <div class="card-text">
//           <h3>${member[key].nome}</h3>
//           <p>${member[key].rulo}</p>
//         </div>
//       </div>    
//      `
//     }
//   }
// }