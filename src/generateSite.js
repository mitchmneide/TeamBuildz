
function generateSite(team) {
  const managerCard = manager => {
    return `
    <div class="card" style="width: 18rem;">
  <div class="bg-danger">
    <h4 class="text-center">${manager.getName()}</h5>
    <div class = "d-inline-flex">
    <i class="bi bi-flag-fill ml-3"></i>
    <h5 class="ml-3">Manager</h3>
    </div>
    </div>
    <div class ="card-body">
    <p class="card-text">ID: ${manager.getId()}</p>
    <p class="card-text"> Email: <a href= "mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></p>
    <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
  </div>
</div>
    
    `
  }
  const engineerCard = engineer => {
    return `
    <div class="card" style="width: 18rem;">
  <div class="bg-success">
    <h4 class="text-center">${engineer.getName()}</h5>
    <div class = "d-inline-flex">
    <i class="bi bi-eyeglasses ml-3"></i>
    <h5 class="ml-3">Engineer</h3>
    </div>
    </div>
    <div class ="card-body">
    <p class="card-text">ID: ${engineer.getId()}</p>
    <p class="card-text"> Email: <a href= "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
    <p class="card-text">Github: <a href = "https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a></p>
  </div>
</div>
    
    `
  }

  const internCard = intern => {
    return `
    <div class="card" style="width: 18rem;">
  <div class="bg-warning">
    <h4 class="text-center">${intern.getName()}</h5>
    <div class = "d-inline-flex">
    <i class="bi bi-mortarboard ml-3"></i>
    <h5 class="ml-3">Intern</h3>
    </div>
    </div>
    <div class ="card-body">
    <p class="card-text">ID: ${intern.getId()}</p>
    <p class="card-text"> Email: <a href= "mailto:${intern.getEmail()}"${intern.getEmail()}></a></p>
    <p class="card-text">School: ${intern.getSchool()}</p>
  </div>
</div>
    
    `
  }

  pageArray = []

  pageArray.push(
    team.filter(employee => employee.getRole() === "Manager")
      .map(manager => managerCard(manager))
  )

  pageArray.push(
    team.filter(employee => employee.getRole() === "Engineer")
      .map(engineer => engineerCard(engineer)).join("")
  )
  pageArray.push(
    team.filter(employee => employee.getRole() === "Intern")
      .map(intern => internCard(intern)).join("")
  )
  return pageArray.join("")
}

module.exports = team => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team </title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
    <header> 
    <h1> My Team</h1>
    </header>
        <section class ="team">
        ${generateSite(team)}
        </section>
    </body>
    </html>
    `;
}
