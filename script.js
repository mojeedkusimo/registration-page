
let submitButton = document.querySelector('button');
let dirFirstName = document.querySelector('#firstname');
let dirLastName = document.querySelector('#lastname');
let address = document.querySelector('#address');
let emailId = document.querySelector('#email');
let password = document.querySelector('#password');
let response = document.querySelector('#response');
let errorMsg = document.querySelector('#error');

submitButton.addEventListener(
    'click', async (e) => {
        e.preventDefault();
        
        errorMsg.innerHTML = "";
        response.innerHTML = "";

        
        if (dirFirstName.value  == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( dirLastName.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( address.value.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( emailId.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( password.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else {
            
            response.innerHTML = "loading...";
            let requestBody = {
                dirFirstName: dirFirstName.value,
                dirLastName: dirLastName.value,
                address: address.value,
                emailId: emailId.value,
                password: "",
                reference: "",
                uid: "",
                businessName: "",
                title: "",
                dirBvn: "",
                dirMiddleName: "",
                userName: "",
                phone: "",
                city: "",
                customerRiskRating: "",
                tier: "",
                dirDateOfBirth: "",
                countryOfBirth: ""
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

    }
)