/* eslint-disable react/prop-types */
function UserInfo({ user }) {
    return (
        <div className="user-info bg-dark text-light p-6">
            <h2 className="mb-4 text-2xl text-white">User Name: {user?.userName}</h2>
            <div>
                {user?.userID && <p>User id: <span>{user?.userID}</span></p>}
                {user?.userAge && <p>User age: <span>{user?.userAge} years</span></p>}
                {user?.userWeight && <p>User weight: <span>{user?.userWeight} kg</span></p>}
                {user?.userHeight && <p>User height: <span>{user?.userHeight} cm</span></p>}
                {user?.totalUserTime && <p>Total User Time: <span>{user?.totalUserTime}</span></p>}
                {user?.totalActiveScore && <p>Total Active Score: <span>{user?.totalActiveScore}</span></p>}
                {user?.lastSessionID && <p>Last Session ID: <span>{user?.lastSessionID}</span></p>}
                {user?.groupID && <p>groupID: <span>{user?.groupID}</span></p>}
            </div>
        </div>
    )
}

export default UserInfo
