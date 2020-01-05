$(function(){
    $.ajax({
        type : 'GET',
        url : "http://localhost:3000/contact/",
        success : function(data){
            console.log(data)
        }
    })
    .done(contacts=>{
        contacts.forEach(contact => {
            $("#content-body").append(
                `<div class="col-md-4">
                    <div id="card" class="card m-3" style="width: 16rem;">
                        <div class="card-body">
                            <h5 class="card-title">${contact.name}</h5>
                            <p>${contact.phone}</p>
                            <button id="btnDelete" class="btn-dark btn">Delete</button>
                            <button id="btnEdit" class="btn-dark btn">Edit</button>
                        </div>
                    </div>  
                </div>`
            )
        });
    })

    $("#card").toggle(1000)
})
