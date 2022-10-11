
let submitButton = document.querySelector('button');
let dirFirstName = document.querySelector('#firstname');
let dirLastName = document.querySelector('#lastname');
let address = document.querySelector('#address');
let emailId = document.querySelector('#email');
let password = document.querySelector('#password');
let title = document.querySelector('#title');
let username = document.querySelector('#username');
let phone = document.querySelector('#phoneNumber');
let dirBvn = document.querySelector('#bvn');
let city = document.querySelector('#city');
let businessName = document.querySelector('#businessName');
let dirDateOfBirth = document.querySelector('#dob');
let countryOfBirth = document.querySelector('#country-of-birth');
let dirMiddleName = document.querySelector('#middlename');
let reference = document.querySelector('#reference');
let customerRiskRating = document.querySelector('#customer-risk-rating');
let tier = document.querySelector('#tier');
let uid = document.querySelector('#uid');
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
        } else if ( phone.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( dirBvn.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( dirDateOfBirth.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( businessName.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else {
            
            response.innerHTML = "processing request...";
            let requestBody = {
                dirFirstName: dirFirstName.value,
                dirLastName: dirLastName.value,
                address: address.value,
                emailId: emailId.value,
                password: password.value,
                reference: reference.value,
                uid: uid.value,
                businessName: businessName.value,
                title: title.value,
                dirBvn: dirBvn.value,
                dirMiddleName: dirMiddleName.value,
                userName: username.value,
                phone: phone.value,
                city: city.value,
                customerRiskRating: customerRiskRating.value,
                tier: tier.value,
                dirDateOfBirth: dirDateOfBirth.value,
                countryOfBirth: countryOfBirth.value
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