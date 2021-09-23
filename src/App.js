import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

const App = () => {
	const url = "https://reqres.in/api/users?page=1";
	const [users, setUsers] = useState([]);

	const loadUsers = async () => {
    	const response = await fetch(url);
    	const jsonResponse = await response.json();
    	setUsers(jsonResponse.data);
  };

  return (
    <div className="App">
		<nav class="navbar fixed-top navbar-dark bg-dark">
			<a class="navbar-brand" href="#">Zippy</a>
      		<button onClick={loadUsers}>Get Data</button>
		</nav>

		<div className = "usersCard">
			{users.map(({first_name, last_name, avatar, email})=>{
			return(
				<React.Fragment>
					<div class = "Card">
						<div>
							<br />
							<img src = {avatar} alt = "Profile Pic"></img>
							<br />
							<h3>{first_name} {last_name}</h3>
							<p>{email}</p>
						</div>
					</div>
					<br />
				</React.Fragment>
			)
			}
			)}
		</div>
    </div>
  );
};

export default App;
