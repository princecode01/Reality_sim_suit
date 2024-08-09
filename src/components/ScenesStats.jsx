import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useStats } from "../hooks/useStats";

function ScenesStats() {
    const { stats: { scenes, users }, isLoading } = useStats()
    console.log(scenes, users)

    if (isLoading) return <p>Loading...</p>

    function convertTimeToMinutes(timeStr) {
        const [hours, minutes, seconds] = timeStr.split(':').map(Number);
        return hours * 60 + minutes + seconds / 60;
    }

    const data = scenes.map(scene => { return { name: scene.sceneName, value: convertTimeToMinutes(scene.allTotalPlayTime) } })

    return (
        <div className='bg-dark text-light px-5 py-3 rounded-md w-[49%] shadow-sm shadow-customBlue'>
            <h2 className="text-2xl mb-4">Scene Consumption</h2>
            <ResponsiveContainer height={240}>
                <BarChart data={data}>
                    <Bar dataKey="value" fill="#8884d8" />
                    <XAxis dataKey="name" tick={{ fill: '#FED8B1' }} />
                    <YAxis tick={{ fill: '#FED8B1' }} />
                    <Tooltip contentStyle={{color:"black"}} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ScenesStats
