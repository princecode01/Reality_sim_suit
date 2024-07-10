/* eslint-disable react/prop-types */

function SessionList({ sessions }) {
  return (
    <div className="sessions bg-dark text-light p-6 my-6">
      <h2 className="mb-4 text-2xl text-white">Sessions</h2>
      {sessions?.map((session) =>
        <div key={session.sessionID} className="session">
          {session?.sessionID && <p>Session ID: <span>{session?.sessionID}</span></p>}
          {session?.movedJointsCount && <p>Moved Joints Count: <span>{session?.movedJointsCount}</span></p>}
          {session?.sessionLength && <p>Session Length: <span>{session?.sessionLength}</span></p>}
          {session?.isOver && <p>Is Over: <span>{session?.isOver}</span></p>}
          {session?.sessionActiveScore && <p>Session Active Score: <span>{session?.sessionActiveScore}</span></p>}
        </div>
      )}
    </div>
  )
}

export default SessionList
