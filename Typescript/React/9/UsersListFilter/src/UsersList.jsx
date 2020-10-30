import React from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends React.Component {
    state = { 
        filterText : '',
        foundUsersCount : null
    };

    handleFilterChange = e => {
        this.setState({
            filterText : e.target.value
        });
        console.log(this.state.filterText);
    }

    findMatch = userName => 
        (userName.toLowerCase().includes(this.state.filterText.toLowerCase()));

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
                    {
                        !this.state.filterText
                            ? (
                                this.props.users.map(user => <User key={user.id} {...user} />)
                            )
                            : (
                                this.props.users.filter(user => this.findMatch(user.name))
                                    .map(user => <User key={user.id} {...user} />)
                            )
                    }
                </ul>
            </div>
        );
    }
}

export default UsersList;