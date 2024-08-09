import { BsHeadsetVr } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import { GiDuration } from "react-icons/gi"
import { TbCircuitMotor } from "react-icons/tb"
import { useStats } from "../hooks/useStats"
import SessionStats from "./SessionStats"
import ScenesStats from "./ScenesStats"

function Stats() {
    const { stats, isLoading } = useStats()

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="pt-16 text-light">
            <div className="stats flex justify-around mb-14">
                <div className="stat bg-dark flex items-center w-[20%] gap-2 px-4 py-2 rounded-md">
                    <FaUser className="text-4xl" />
                    <div className="text-sm ">
                        <p className="mb-0">Users</p>
                        <h5 className="text-lg text-hover">{stats?.users.length}</h5>
                    </div>
                </div>
                <div className="stat bg-dark flex items-center w-[20%] gap-2 px-4 py-2 rounded-md">
                    <BsHeadsetVr className="text-4xl" />
                    <div className="text-sm ">
                        <p className="mb-0">Scenes</p>
                        <h5 className="text-lg text-hover">{stats?.scenes.length}</h5>
                    </div>
                </div>
                <div className="stat bg-dark flex items-center w-[20%] gap-2 px-4 py-2 rounded-md">
                    <TbCircuitMotor className="text-4xl" />
                    <div className="text-sm ">
                        <p className="mb-0">Joints</p>
                        <h5 className="text-lg text-hover">{stats?.joints.length}</h5>
                    </div>
                </div>
                <div className="stat bg-dark flex items-center w-[20%] gap-2 px-4 py-2 rounded-md">
                    <GiDuration className="text-4xl" />
                    <div className="text-sm ">
                        <p className="mb-0">Sessions</p>
                        <h5 className="text-lg text-hover">{stats?.sessions.length}</h5>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between">
                <SessionStats />
                <ScenesStats />
            </div>
        </div>
    )
}

export default Stats
