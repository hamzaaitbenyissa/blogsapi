function fetchData() {
        fetch('http://localhost:3000/users',{
                method :"Get",
                headers : {
                  token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTYyMzg2NDQ5Nn0.D_aZw9eKsLFZEYTEY3zp8SiYvU0AGJfLhXmQft53Qyo"
            }})
        .then(resp => resp.json())
        .then(data => showusers(data))
      }


function showusers(data) {
          for (const q of data) {

          const container = document.querySelector('#data');
    
          const Newrow = document.createElement('tr');
          const userid = document.createElement('td');
          const username = document.createElement('td');
          const usermail = document.createElement('td');

          userid.innerHTML = q.id;
          username.innerHTML = q.username;
          usermail.innerHTML = q.email;

          Newrow.append(userid, username, usermail);
          container.appendChild(Newrow);
          }

       }

      

fetchData();
