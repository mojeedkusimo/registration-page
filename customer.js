
// Customer variables
let customerSubmitButton = document.querySelector('#customer-submit');
let customerFirstName = document.querySelector('#firstname');
let customerLastName = document.querySelector('#lastname');
let customerAddress = document.querySelector('#address');
let customerEmailId = document.querySelector('#email');
let customerPassword = document.querySelector('#password');
let customerTitle = document.querySelector('#title');
let customerUsername = document.querySelector('#username');
let customerPhone = document.querySelector('#phoneNumber');
let customerCity = document.querySelector('#city');
let customerDateOfBirth = document.querySelector('#dob');
let customerCountryOfBirth = document.querySelector('#country-of-birth');
let customerMiddleName = document.querySelector('#middlename');
let customerReference = document.querySelector('#reference');
let customerTier = document.querySelector('#tier');
let customerUid = document.querySelector('#uid');
let customerResponse = document.querySelector('#response');
let referralCode = document.querySelector('#referral-code');
let accountNumber = document.querySelector('#account-number');
let customerErrorMsg = document.querySelector('#error');
let response = document.querySelector('#response');
let errorMsg = document.querySelector('#error');

customerSubmitButton.addEventListener(
    'click', async (e) => {
        e.preventDefault();
        
        errorMsg.innerHTML = "";
        response.innerHTML = "";

        
        if (customerFirstName.value  == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( customerLastName.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( customerAddress.value.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( customerEmailId.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( customerPassword.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( customerPhone.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( customerDateOfBirth.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( accountNumber.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( customerUsername.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else {
            
            response.innerHTML = "processing request...";
            let requestBody = {
                firstName: customerFirstName.value,
                lastName: customerLastName.value,
                address: customerAddress.value,
                emailId: customerEmailId.value,
                password: customerPassword.value,
                reference: reference.value,
                uid: uid.value,
                title: customerTitle.value,
                middleName: customerMiddleName.value,
                userName: customerUsername.value,
                phone: customerPhone.value,
                postalCode: "900110",
                city: customerCity.value,
                tier: customerTier.value,
                dateOfBirth: customerDateOfBirth.value,
                countryOfBirth: customerCountryOfBirth.value,
                accountNumber: accountNumber.value,
                referralCode: referralCode.value
            }

            console.log(requestBody);
    
            let info = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            }
    
            let request = await fetch('https://enaira.istemlabsafrica.site/api/register/consumer', info);
            let result = await request.json();
    
            console.log(result);
            response.innerHTML = result.message;
        }

    }
)
