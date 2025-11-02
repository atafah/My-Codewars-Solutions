 
function getDrinkByProfession(param){
 // those drinks are for the weak. strong people drink water
  const drinkByProfession = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  };
  
  return drinkByProfession[param.toLowerCase()] || "Beer";
}