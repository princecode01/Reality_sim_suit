/* eslint-disable react/prop-types */

function SessionList({ sessions }) {
  return (
    <div className=" bg-dark text-light p-6 my-6">
      <h2 className="mb-5 text-2xl text-white">Sessions</h2>
      <div className="sessions">
        {sessions?.map((session) =>
          <div key={session.sessionID} className="session py-4 mb-4 border-b-2 border-dashed">
            {session?.sessionID && <p>Session ID: <span>{session?.sessionID}</span></p>}
            {session?.movedJointsCount && <p>Moved Joints Count: <span>{session?.movedJointsCount}</span></p>}
            {session?.sessionLength && <p>Session Length: <span>{session?.sessionLength} min</span></p>}
            <p>Is Session Over: <span>{session?.isOver? "Yes" : "No"}</span></p>

            {session?.sessionActiveScore && <p>Session Active Score: <span>{session?.sessionActiveScore}</span></p>}
          </div>
        )}
      </div>
    </div>
  )
}

export default SessionList
