let pass_length = document.getElementById('cantidad');
let btn = document.getElementById('generar');

const char_password = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generatePassword()
{
    let number = parseInt(pass_length.value);

    if(number < 8)
    {
        alert("Lenght min: 8");  
    }  
}







