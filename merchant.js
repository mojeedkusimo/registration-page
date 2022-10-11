
// Merchant variables
let merchantSubmitButton = document.querySelector('#merchant-submit');
let dirFirstName = document.querySelector('#firstname');
let dirLastName = document.querySelector('#lastname');
let merchantAddress = document.querySelector('#address');
let merchantEmailId = document.querySelector('#email');
let merchantPassword = document.querySelector('#password');
let merchantTitle = document.querySelector('#title');
let merchantUsername = document.querySelector('#username');
let merchantPhone = document.querySelector('#phoneNumber');
let dirBvn = document.querySelector('#bvn');
let merchantCity = document.querySelector('#city');
let businessName = document.querySelector('#businessName');
let dirDateOfBirth = document.querySelector('#dob');
let merchantCountryOfBirth = document.querySelector('#country-of-birth');
let dirMiddleName = document.querySelector('#middlename');
let merchantReference = document.querySelector('#reference');
let customerRiskRating = document.querySelector('#customer-risk-rating');
let merchantTier = document.querySelector('#tier');
let merchantUid = document.querySelector('#uid');
let accountNumber = document.querySelector('#account-number');
let response = document.querySelector('#response');
let errorMsg = document.querySelector('#error');

merchantSubmitButton.addEventListener(
    'click', async (e) => {
        e.preventDefault();
        
        errorMsg.innerHTML = "";
        response.innerHTML = "";
        
        
        if (dirFirstName.value  == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( dirLastName.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( merchantAddress.value.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( merchantEmailId.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( merchantPassword.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( merchantPhone.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else if ( dirDateOfBirth.value == "") {
            errorMsg.innerHTML = "Please fill all fields";
        } else {
            
            response.innerHTML = "processing request...";
            let requestBody = {
                dirFirstName: dirFirstName.value,
                dirLastName: dirLastName.value,
                address: merchantAddress.value,
                emailId: merchantEmailId.value,
                password: merchantPassword.value,
                reference: reference.value,
                uid: uid.value,
                businessName: businessName.value,
                title: merchantTitle.value,
                dirBvn: dirBvn.value,
                dirMiddleName: dirMiddleName.value,
                userName: merchantUsername.value,
                phone: merchantPhone.value,
                city: merchantCity.value,
                customerRiskRating: customerRiskRating.value,
                tier: merchantTier.value,
                dirDateOfBirth: dirDateOfBirth.value,
                countryOfBirth: merchantCountryOfBirth.value,
                accountNumber: accountNumber.value

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
);
