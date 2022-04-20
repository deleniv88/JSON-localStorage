let getID = id => document.getElementById(id);
let getS = selector => document.querySelector(selector);
//for currect information entering
let fnameRegExp = /^[a-zA-z]{3,20}$/;
let lnameRegExp = /^[a-zA-z]{3,20}$/;
let emailRegExp = /^([\w+\.+\-]+@+[\w]+\.+[\w])/;
let passRegExp = /^[a-zA-Z0-9]{8,15}$/;
//for adding new users
let users = new Array();
//First name row
getID('fname').oninput = function () {
    let testFname = fnameRegExp.test(getID('fname').value);
    if (testFname) {
        getS('.textFname').classList.add('check');
        getS('.textFname').classList.remove('error');
        getS('.alertFN').classList.remove('modal-alert');
        getS('.alertFN').innerHTML = '';
        getS('.check').style.backgroundSize = '25px';
        this.style.border = '2px solid green';
        this.style.boxShadow = '0 0 10px green';
    }
    else {
        getS('.textFname').classList.add('error');
        getS('.alertFN').classList.add('modal-alert');
        getS('.alertFN').innerHTML = 'Please provide a valid First name';
        getS('.error').style.backgroundSize = '25px';
        this.style.border = '1px solid red';
        this.style.boxShadow = '0 0 10px red';
    }
}
//cancel focus of First name
getID('fname').onblur = function () {
    let testFname = fnameRegExp.test(getID('fname').value);
    if (testFname) {
        getS('.textFname').classList.add('check');
        getS('.textFname').classList.remove('error');
        getS('.check').style.backgroundSize = '25px';
        this.style.border = '2px solid green';
        this.style.boxShadow = '0 0 10px green';
    } else {
        getS('.textFname').classList.remove('check');
        getS('.textFname').classList.remove('error');
        getS('.alertFN').classList.remove('modal-alert');
        getS('.alertFN').innerHTML = '';
        this.style.border = '';
        this.style.boxShadow = '';
    }
}
//Last name row
getID('lname').oninput = function () {
    let testLname = lnameRegExp.test(getID('lname').value);
    if (testLname) {
        getS('.textLname').classList.add('check');
        getS('.textLname').classList.remove('error');
        getS('.alertLN').classList.remove('modal-alert');
        getS('.alertLN').innerHTML = '';
        getS('.check').style.backgroundSize = '25px';
        this.style.border = '2px solid green';
        this.style.boxShadow = '0 0 10px green';
    }
    else {
        getS('.textLname').classList.add('error');
        getS('.alertLN').classList.add('modal-alert');
        getS('.alertLN').innerHTML = 'Please provide a valid Last name';
        getS('.error').style.backgroundSize = '25px';
        this.style.border = '1px solid red';
        this.style.boxShadow = '0 0 10px red';
    }
}
//cancel focus of Last name
getID('lname').onblur = function () {
    let testLname = lnameRegExp.test(getID('lname').value);
    if (testLname) {
        getS('.textLname').classList.add('check');
        getS('.textLname').classList.remove('error');
        getS('.check').style.backgroundSize = '25px';
        this.style.border = '2px solid green';
        this.style.boxShadow = '0 0 10px green';
    } else {
        getS('.textLname').classList.remove('check');
        getS('.textLname').classList.remove('error');
        getS('.alertLN').classList.remove('modal-alert');
        getS('.alertLN').innerHTML = '';
        this.style.border = '';
        this.style.boxShadow = '';
    }
}
//Email address row
getID('email').oninput = function () {
    let testEmail = emailRegExp.test(getID('email').value);
    if (testEmail) {
        getID('email').classList.add('check');
        getID('email').classList.remove('error');
        getS('.alertEA').classList.remove('modal-alert');
        getS('.alertEA').innerHTML = '';
        getS('.check').style.backgroundSize = '25px';
        this.style.border = '2px solid green';
        this.style.boxShadow = '0 0 10px green';
    }
    else {
        getID('email').classList.add('error');
        getS('.alertEA').classList.add('modal-alert');
        getS('.alertEA').innerHTML = 'Please provide a valid Email address';
        getS('.error').style.backgroundSize = '25px';
        this.style.border = '1px solid red';
        this.style.boxShadow = '0 0 10px red';
    }
}
//cancel focus of Email
getID('email').onblur = function () {
    let testEmail = emailRegExp.test(getID('email').value);
    if (testEmail) {
        getID('email').classList.add('check');
        getID('email').classList.remove('error');
        getS('.check').style.backgroundSize = '25px';
        this.style.border = '2px solid green';
        this.style.boxShadow = '0 0 10px green';
    } else {
        getID('email').classList.remove('check');
        getID('email').classList.remove('error');
        getS('.alertEA').classList.remove('modal-alert');
        getS('.alertEA').innerHTML = '';
        this.style.border = '';
        this.style.boxShadow = '';
    }
}
//Password row
getID('password').oninput = function () {
    let testPass = passRegExp.test(getID('password').value);
    if (testPass) {
        getID('password').classList.add('check');
        getID('password').classList.remove('error');
        getS('.alertPW').classList.remove('modal-alert');
        getS('.alertPW').innerHTML = '';
        getS('.check').style.backgroundSize = '25px';
        this.style.border = '2px solid green';
        this.style.boxShadow = '0 0 10px green';
    }
    else {
        getID('password').classList.add('error');
        getS('.alertPW').classList.add('modal-alert');
        getS('.alertPW').innerHTML = 'Please provide a valid Password';
        getS('.error').style.backgroundSize = '25px';
        this.style.border = '1px solid red';
        this.style.boxShadow = '0 0 10px red';
    }
}
//cancel focus of Password
getID('password').onblur = function () {
    let testPass = passRegExp.test(getID('password').value);
    if (testPass) {
        getID('password').classList.add('check');
        getID('password').classList.remove('error');
        getS('.check').style.backgroundSize = '25px';
        this.style.border = '2px solid green';
        this.style.boxShadow = '0 0 10px green';
    } else {
        getID('password').classList.remove('check');
        getID('password').classList.remove('error');
        getS('.alertPW').classList.remove('modal-alert');
        getS('.alertPW').innerHTML = '';
        this.style.border = '';
        this.style.boxShadow = '';
    }
}
//Sign Up button
getID('button').onclick = function () {
    let testFname = fnameRegExp.test(getID('fname').value);
    let testLname = lnameRegExp.test(getID('lname').value);
    let testEmail = emailRegExp.test(getID('email').value);
    let testPass = passRegExp.test(getID('password').value);

    if (testFname && testLname && testEmail && testPass) {
        if (getID('email').value !== '') {
            if (localStorage.length > 0 && localStorage.getItem('users')) {
                users = JSON.parse(localStorage.getItem('users'));
            }
            if (users.some((userEmail) => { return userEmail.email == getID('email').value })) {
                getID('email').classList.add('error');
                getS('.alertEA').classList.add('modal-alert');
                getS('.alertEA').innerHTML = 'Email address already exists';
                getS('.error').style.backgroundSize = '25px';
                getID('email').style.border = '1px solid red';
                getID('email').style.boxShadow = '0 0 10px red';
                getID('email').value = '';
            } else {
                users.push({
                    fname: getID('fname').value,
                    lname: getID('lname').value,
                    email: getID('email').value,
                    pass: getID('password').value
                })
                localStorage.setItem('users', JSON.stringify(users));

                getID('fname').value = '';
                getID('lname').value = '';
                getID('email').value = '';
                getID('password').value = '';

                getS('.textFname').classList.remove('check');
                getID('fname').style.border = '';
                getID('fname').style.boxShadow = '';

                getS('.textLname').classList.remove('check');
                getID('lname').style.border = '';
                getID('lname').style.boxShadow = '';

                getS('.textEmail').classList.remove('check');
                getID('email').style.border = '';
                getID('email').style.boxShadow = '';
                getID('email').classList.remove('error');
                getS('.alertEA').classList.remove('modal-alert');
                getS('.alertEA').innerHTML = '';

                getS('.textPass').classList.remove('check');
                getID('password').style.border = '';
                getID('password').style.boxShadow = '';
            }
        }
    }
}
//Sign In Now button for stepback on Please sign Up screen
getS('.signNow').onclick = function () {
    getID('signUp').style.display = 'flex';
    getS('.header').style.display = 'none';
    getS('.row').style.display = 'none';
}
//Sign Up button for stepback on Please sign in screen
getS('.signUpNow').onclick = function () {
    getID('signUp').style.display = 'none';
    getS('.header').style.display = 'flex';
    getS('.row').style.display = 'flex';

    getID('emailSignIn').value = '';
    getID('passwordSignIn').value = '';
    getS('.alertPWSign').classList.remove('modal-alert-local');
    getS('.alertPWSign').innerHTML = '';
}
//Sign In button on Please sign in screen
getID('signIn').onclick = function () {
    let testEmail = emailRegExp.test(getID('emailSignIn').value);
    let testPass = passRegExp.test(getID('passwordSignIn').value);
    if (testEmail && testPass) {
        if (localStorage.length == '') {
            getS('.alertPWSign').classList.add('modal-alert-local');
            getS('.alertPWSign').innerHTML = 'localStorage is empty';
        }
        else if (localStorage.length > 0 && localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));

            const resultEmail = users.find(({ email }) => email === getID('emailSignIn').value);
            const resultPass = users.find(({ pass }) => pass === getID('passwordSignIn').value);

            if (resultEmail && resultPass) {
                getID('signUp').style.display = 'none';
                getID('success').style.display = 'flex';
                getS('.signInEmail').innerHTML = getID('emailSignIn').value;
                getS('.signInFName').innerHTML = resultEmail.fname;
                getS('.signInLName').innerHTML = resultEmail.lname;
                getID('emailSignIn').value = '';
                getID('passwordSignIn').value = '';
            } else {
                getS('.alertPWSign').classList.add('modal-alert-local');
                getS('.alertPWSign').innerHTML = 'Wrong email or password';
            }
        }
    }
    getS('.alertPWSign').classList.add('modal-alert-local');
    getS('.alertPWSign').innerHTML = 'Wrong email or password';
}
//Sign out button on profile block
getID('signOut').onclick = function () {
    if (event.target)

    getID('fname').value = '';
    getID('lname').value = '';
    getID('email').value = '';
    getID('password').value = '';

    getS('.textFname').classList.remove('check');
    getID('fname').style.border = '';
    getID('fname').style.boxShadow = '';

    getS('.textLname').classList.remove('check');
    getID('lname').style.border = '';
    getID('lname').style.boxShadow = '';

    getS('.textEmail').classList.remove('check');
    getID('email').style.border = '';
    getID('email').style.boxShadow = '';
    getID('email').classList.remove('error');
    getS('.alertEA').classList.remove('modal-alert');
    getS('.alertEA').innerHTML = '';

    getS('.textPass').classList.remove('check');
    getID('password').style.border = '';
    getID('password').style.boxShadow = '';

    getID('success').style.display = 'none';
    getID('signUp').style.display = 'flex';
    getS('.alertPWSign').classList.remove('modal-alert-local');
    getS('.alertPWSign').innerHTML = '';
    getID('button').style.backgroundColor = 'rgb(245, 139, 0)';
    getID('button').style.border = 'rgb(245, 139, 0)';
    getID('button').style.cursor = 'pointer';
}

