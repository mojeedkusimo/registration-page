
let submitButton = document.querySelector('button');
let dirFirstName = document.querySelector('#firstname');
let dirLastName = document.querySelector('#lastname');
let address = document.querySelector('#address');
let emailId = document.querySelector('#email');
let password = document.querySelector('#password');
let response = document.querySelector('#response');

submitButton.addEventListener(
    'click', async (e) => {
        e.preventDefault();

        response.innerHTML = "";
        let requestBody = {
            dirFirstName: dirFirstName.value,
            dirLastName: dirLastName.value,
            address: address.value,
            emailId: emailId.value,
            password: password.value,
            reference: "reference",
            uid: "uid",
            businessName: "businessName",
            title: "title",
            dirBvn: "dirBvn",
            dirMiddleName: "dirMiddleName",
            userName: "userName",
            phone: "phone",
            city: "city",
            customerRiskRating: "customerRiskRating",
            tier: "tier",
            dirDateOfBirth: "dirDateOfBirth",
            countryOfBirth: "countryOfBirth"
        }

        let info = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }

        let request = await fetch('https://enaira.istemlabsafrica.site/api/register/merchant', info);
        let result = await request.json();

        response.innerHTML = result.message;

    }
)