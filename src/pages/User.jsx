import { useSessions } from "../hooks/useSessions"
import { useUser } from "../hooks/useUser";

import UserInfo from "../components/UserInfo";
import SessionList from "../components/SessionList";

function User() {
  const { sessions, isLoading: loadingSessions } = useSessions()
  const { user, isLoading: loadingUser } = useUser()

  if (loadingSessions || loadingUser) return <div className="absolute inset-0 z-50 flex justify-center items-center h-screen text-3xl">
    <p>Loading...</p>
  </div>

  return (
    <section className="h-home">
      <div className="container py-6">
        <UserInfo user={user} />
        <SessionList sessions={sessions} />
      </div>
    </section>
  );
}

export default User;

