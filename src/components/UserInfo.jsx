/* eslint-disable react/prop-types */
function UserInfo({ user }) {
    return (
        <div className="user-info bg-dark text-light p-6">
            <h2 className="mb-4 text-2xl text-white">User Name: {user?.userName}</h2>
            <div>
                {user?.userID && <p>user id: <span>{user?.userID}</span></p>}
                {user?.userAge && <p>user age: <span>{user?.userAge}</span></p>}
                {user?.userWeight && <p>user weight: <span>{user?.userWeight}</span></p>}
                {user?.userHeight && <p>user height: <span>{user?.userHeight}</span></p>}
                {user?.totalUserTime && <p>totalUserTime: <span>{user?.totalUserTime}</span></p>}
                {user?.totalActiveScore && <p>totalActiveScore: <span>{user?.totalActiveScore}</span></p>}
                {user?.lastSessionID && <p>lastSessionID: <span>{user?.lastSessionID}</span></p>}
                {user?.groupID && <p>groupID: <span>{user?.groupID}</span></p>}
            </div>
        </div>
    )
}

export default UserInfo
