// Add your code here

/*const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(contactInfo),
};*/

function submitData(name, email) {
  const contactInfo = {
    name: name,
    email: email,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(contactInfo),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (contactInfo) {
      document.body.textContent = contactInfo.id;
    })
    .catch(function (error) {
      document.body.textContent = error.message;
    });

  console.log(contactInfo);

}

submitData("Sam", "Sammy1@aol.org")
