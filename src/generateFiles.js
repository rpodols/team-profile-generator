function generateHtml(data) {
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
            <div class="card" style="width: 18rem;">
                
                <div class="card-body">
                    <div class="p-3 mb-2 bg-primary text-white text-center">
                        <h5 class="card-title"><i class="${data[0].image}"></i>   ${data[0].name}</h5>
                        <p class="card-text">Role: ${data[0].role}</p>
                    </div>
                    <p class="card-text">ID: ${data[0].id}</p>
                    <p class="card-text">Email: ${data[0].email}</p>
                    <p class="card-text">Office Number: ${data[0].officeNumber}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </div>
        
    </body>
    </html>`

    return html;
};

module.exports = generateHtml;