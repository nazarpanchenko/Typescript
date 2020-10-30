import React from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends React.Component {
    state = { 
        filterText : '',
        foundUsersCount : null
    };

    handleFilterChange = e => {
        // const matchFound = 
        //     (e.target.value.toLowerCase().includes(this.state.foundUsersCount.toLowerCase()))
        //         ? Number(this.state.foundUsersCount) + 1
        //         : null;

        this.setState({
            filterText : e.target.value
        });

        console.log(this.state.filterText);
    }

    render() {
        return (
            <div>
                <div className="filter">
                    <Filter
                        filterText={this.state.filterText}
                        count={this.state.foundUsersCount} 
                        onChange={this.handleFilterChange} 
                    />
                </div>
                <ul className="users">
                    {this.props.users.map(user => <User key={user.id} {...user} />)}
                </ul>
            </div>
        );
    }
}

export default UsersList;