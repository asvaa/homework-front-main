import React from 'react'; 
import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';


type UserList2PropsType = {
    users: UsersObjectType
    filterUsers: () => void
};

export const UserList2: React.FC<UserList2PropsType> = (props: UserList2PropsType) => {
    return (
        <div id={'hw02-users'}>
            <h2>User List2:</h2>

            {/* Correctly call filterUsers function on button click */}
            <button id={'hw02-filter-button'} onClick={props.filterUsers}>SHOW ME FRIENDS FROM LA</button>

            <ul>
                {props.users.myFriends.map((user, index) => (
                    // Call the CurrentUser component and pass the user as a prop, also include a unique key
                    <CurrentUser key={index} user={user} />
                ))}
            </ul>
        </div>
    );
};
