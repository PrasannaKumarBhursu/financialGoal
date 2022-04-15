import { Component } from "react";

import { FloatingLabel, Form } from "react-bootstrap";

class FinancialGoals extends Component {
	render() {
		return (
			<>
				<div class="form-floating mb-3 border-none">
					<input
						type="email"
						class="form-control border-none"
						id="floatingInput"
						placeholder="name@example.com"
					/>
					<label for="floatingInput">Email address</label>
				</div>
				<div class="form-floating">
					<input
						type="password"
						class="form-control"
						id="floatingPassword"
						placeholder="Password"
					/>
					<label for="floatingPassword">Password</label>
				</div>
			</>
		);
	}
}

export default FinancialGoals;
