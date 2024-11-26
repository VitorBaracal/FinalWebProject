// Login() function activated when the user clicks the login button
function Login() {
    // Stores the value of the respective input in their respective variables
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Shows variable values ​​in the console
    console.log(name);
    console.log(email);
    console.log(password);

    // Checks the email if it is in the proper format
    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um e-mail válido. Um e-mail precisa ter '@' e um domínio como '.com'.");
        return;
    }
    
    // Checks the password if it's in the appropriate format (8 digits and a special character)
    if (password.length < 8 || !password.includes("!") && !password.includes("@") && !password.includes("#") && !password.includes("$") && !password.includes("%") && !password.includes("&") && !password.includes("*")) {
        alert("A senha deve ter no mínimo 8 caracteres e incluir pelo menos um caractere especial (!, @, #, $, %, &, *).");
        return;
    }

    // Shows an alert to start user registration
    alert("Ops! Parece que você não possuí cadastro conosco! Clique em OK para prosseguir")

    
    // Store the new HTML of the page in a variable
    const formadd = `
    <h2> Sign Up on Website </h2>
    <form action="" method="post">  

        <div class="form-group">
            <label class="label" for="name"> Name </label>
            <input type="text" id="name" name="name" required>
        </div>  
        <div class="form-group">
            <label class="label" for="email"> Email </label>
            <input type="email" id="email" name="email" required>
        </div>      
        <div class="form-group">
            <label class="label" for="address">Address</label>
            <input type="text" id="address" name="address" required>
        </div>
        <div class="form-group">
            <label class="label" for="phone">Phone</label>
            <input type="text" id="phone" name="phone" required>
        </div>
        <div class="form-group">
            <label class="label" for="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" required>
        </div> 
        <div class="form-group">
            <label class="label" for="password"> Password </label>
            <input type="password" id="password" name="password" required pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$">
            <p class="caption"> minimum 8 characters, including a special character </p>
        </div>   
        <button type="submit" class="button" onclick="Cadastro()">Login</button>
            
    </form> `;

    
    // Adds the new html to the chosen id
    document.getElementById('main').innerHTML = formadd;

    // Keeps the user's fields already filled in
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;    
}

// Registration() function activated when the user clicks the login button after passing the first step
function Cadastro(){
    // Displays an alert saying that the registration has been completed
    alert ("Cadastro realizado com sucesso");
    
    // Returns to the website home page
    window.location.href = "index.html";
}

function GuideCm() {
    document.getElementById('foot-lenght-1').innerHTML = "25.4";
    document.getElementById('foot-lenght-2').innerHTML = "25.8";
    document.getElementById('foot-lenght-3').innerHTML = "26.2";
    document.getElementById('foot-lenght-4').innerHTML = "26.7";
    document.getElementById('foot-lenght-5').innerHTML = "27.1";
    document.getElementById('foot-lenght-6').innerHTML = "27.5";
    document.getElementById('foot-lenght-7').innerHTML = "27.9";  

    document.getElementById('foot-lenght').innerHTML = "Foot Length (cm)";  
    
}

function GuideIn() {
    document.getElementById('foot-lenght-1').innerHTML = "10";
    document.getElementById('foot-lenght-2').innerHTML = "10 3/16";
    document.getElementById('foot-lenght-3').innerHTML = "10 5/16";
    document.getElementById('foot-lenght-4').innerHTML = "10 1/2";
    document.getElementById('foot-lenght-5').innerHTML = "10 11/16";
    document.getElementById('foot-lenght-6').innerHTML = "10 13/16";
    document.getElementById('foot-lenght-7').innerHTML = "10";    
    
    document.getElementById('foot-lenght').innerHTML = "Foot Length (in)";  
}


