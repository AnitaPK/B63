let getAllPeople;
function fetchData(){
    fetch('https://dummyjson.com/users')
    .then(response=>response.json())
    .then(data=>{
        getData(data.users)
        getAllPeople = data.users
    })
    .catch((err)=>console.log(err))
}

totalPeopleElmt = document.querySelector('#totalPeople')
peopleRenderElmt = document.querySelector('#peopleRender')
keywordSearchElmt = document.querySelector('#keywordSearch')

function getData(users){
        renderData(users)
}

function searchPeople(){
    term = keywordSearchElmt.value
    console.log(getAllPeople)
    const searchedPeople = getAllPeople.filter((p,i)=>Object.values(p).some(s=>JSON.stringify(s).includes(term)))
    
    
    
    renderData(searchedPeople)
}




function renderData(users){
    console.log(users)

    totalPeopleElmt.textContent = users.length

    peopleRenderElmt.innerHTML = users.map((u,i)=>`
            <div class= col-md-6 col-lg-3>
                <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${u.image} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${u.firstName} ${u.lastName}</h5>
        <p class="card-text">Email: ${u.email}</p>
        <p class="card-text">Phone: ${u.phone}</p>
        <p class="card-text text-primary fw-bold"> ${u.company.name} <br />
        <span class="badge bg-success">${u.company.title}</span>
        <span class="text-muted">${u.company.department}</span>

        </p>

        <p class="card-text">City: ${u.address.city} <span class="badge bg-secondary">${u.address.state}</span></p>

        </div>
    </div>
  </div>
</div>
            </div>
    `).join('')


}
// emailAddress
// Phone number
// Image
// cityName  state
// comapany name title
fetchData()
// getData()