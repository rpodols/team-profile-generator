function generateHtml(data) {
    console.log(data);
    console.log(data.length);

    let newTeamArray = data.map(function(data){
        //differentField = "Office Number";
        differentLine = `<p class="card-text">Office Number: ${data.officeNumber}</p>`;
        if (data.role === 'Engineer'){
            //differentField = "GitHub";
            //data.officeNumber = data.github;
            differentLine = `<p class="card-text">GitHub: <a href='https://github.com/${data.github}' target="_blank">${data.github}</a></p>`;
        };
        if (data.role === 'Intern'){
            //differentField = "School";
            //data.officeNumber = data.school;
            differentLine = `<p class="card-text">School: ${data.school}</p>`;
        }
    return `<div class="card" style="width: 18rem;">
            
    <div class="card-body">
        <div class="p-3 mb-2 bg-primary text-white text-center">
            <h5 class="card-title"><i class="${data.image}"></i>   ${data.name}</h5>
            <p class="card-text">Role: ${data.role}</p>
        </div>
        <p class="card-text">ID: ${data.id}</p>
        <p class="card-text">Email: <a href=mailto:${data.email}>${data.email}</a></p>
        ${differentLine}
    </div>
</div>`


})
var joinedArray = newTeamArray.join(" ");
console.log(joinedArray);
    var html =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c6a7527302.js" crossorigin="anonymous"></script>
    </head>

    <body>
        <div class="p-3 mb-2 bg-danger text-white text-center">My Team</div>
        <div class="container">
        <div class="row justify-content-around">
            ${joinedArray}
        
        </div>
        </div>
        
    </body>
    </html>`

        
    return html;
};

module.exports = generateHtml;