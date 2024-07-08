
function User() {
  return (
    <section className="h-home">
      <div className="container">
        <div className="user-info">
          <h2>userName:name</h2>
          <p>user id</p>
          <p>user age</p>
          <p>user weight</p>
          <p>user height</p>
          <p>totalUserTime</p>
          <p>totalActiveScore</p>
          <p>lastSessionID</p>
          <p>groupID</p>
        </div>
        <div className="sessions">
          <h2>Sessions</h2>
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

