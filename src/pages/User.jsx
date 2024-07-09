
function User() {
  return (
    <section className="h-home">
      <div className="container py-6">
        <div className="user-info bg-dark text-light p-6">
          <h2 className="mb-4 text-2xl text-white">userName:name</h2>
          <div>
            <p>user id</p>
            <p>user age</p>
            <p>user weight</p>
            <p>user height</p>
            <p>totalUserTime</p>
            <p>totalActiveScore</p>
            <p>lastSessionID</p>
            <p>groupID</p>
          </div>
        </div>
        <div className="sessions bg-dark text-light p-6 my-6">
          <h2 className="mb-4 text-2xl text-white">Sessions</h2>
          <div className="session">
            <p>sessionID</p>
            <p>movedJointsCount</p>
            <p>sessionLength</p>
            <p>isOver</p>
            <p>sessionActiveScore</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;

