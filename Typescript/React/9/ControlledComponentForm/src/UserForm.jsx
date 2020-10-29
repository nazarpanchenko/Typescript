import React from 'react';

class UserForm extends React.Component {
   state = {
       user : {
           name : '',
           occupation : '',
           student : '',
           about : ''
       }
   };

   handleChange = event => {
       const { user } = { ...this.state };
       const currentState = user;
       const { name, value, checked, type } = event.target;
       const val = (type === 'checkbox') ? checked : value;

       currentState[name] = val;

       this.setState({ user : currentState });
   }

    render() {
        return (
            <form className="login-form" onSubmit={() => this.props.createUser(this.state.user)}>
                <h1 className="form-title">Profile</h1>
                <div className="form-control">
                    <label 
                        className="form-label" 
                        htmlFor="name">
                        Name
                    </label>
                    <input 
                        className="form-input"
                        value={this.state.user.name}
                        type="text" 
                        id="name" 
                        name="name" 
                        onChange={this.handleChange}
                    />
                </div>
                    <div className="form-control">
                    <label 
                        className="form-label" 
                        htmlFor="student">
                        Student
                    </label>
                    <input 
                        className="form-input" 
                        value={this.state.user.student} 
                        type="checkbox" 
                        id="student" 
                        name="student" 
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label 
                        className="form-label" 
                        id="occupation" 
                        htmlFor="occupation">
                        Occupation
                    </label>
                    <select 
                        value={this.state.user.occupation} 
                        name="occupation" 
                        className="form-input"
                        onChange={this.handleChange}
                    >
                        <option value="london">London</option>
                        <option value="new-york">New York</option>
                        <option value="coconut">Sidney</option>
                        <option value="berlin">Berlin</option>
                    </select>
                </div>
                <div className="form-control">
                    <label 
                        className="form-label" 
                        id="about" 
                        htmlFor="about">
                        About
                    </label>
                    <textarea 
                        name="about" 
                        value={this.state.user.about} 
                        className="form-input"
                        onChange={this.handleChange}
                    />
                </div>
                <button className="submit-button" type="submit">Submit</button>
          </form>
        );
    }
}

export default UserForm;