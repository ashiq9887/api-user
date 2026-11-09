async function getUsers() {

    let count = document.getElementById("userCount").value;

    let userRow = document.getElementById("userRow");

    if (count == "" || count < 1 || count > 50) {
        alert("Please enter a number between 1 and 50");
        return;
    }

    userRow.innerHTML = "<h5 class='text-center'>Loading...</h5>";

    try {

        let response = await fetch(`https://randomuser.me/api/?results=${count}`);

        let data = await response.json();

        userRow.innerHTML = "";

        data.results.forEach(user => {

            userRow.innerHTML += `
            
                <div class="col-md-4">

                    <div class="user-card">

                        <img src="${user.picture.large}" alt="User Picture">

                        <h5>${user.name.first} ${user.name.last}</h5>

                        <p><b>Email:</b> ${user.email}</p>

                        <p><b>Location:</b> ${user.location.city}, ${user.location.country}</p>

                        <p><b>Phone:</b> ${user.phone}</p>

                    </div>

                </div>

            `;

        });

    }
    catch (error) {

        userRow.innerHTML = "<h5 class='text-center text-danger'>Something went wrong. Please try again.</h5>";

        console.log(error);

    }

}