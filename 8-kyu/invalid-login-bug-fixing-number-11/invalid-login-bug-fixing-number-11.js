 
function validate(username, password){
  if (/[0=|]/.test(password))
    return "Wrong username or password!";
  var database = new Database();
  return database.login(username, password);
}