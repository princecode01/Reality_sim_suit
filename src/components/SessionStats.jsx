import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useStats } from "../hooks/useStats"

function SessionStats() {
    const { stats: { sessions } } = useStats()
    console.log(sessions)
    const startData = [
        { name: '0-30 mins', value: 0, color: "#0088FE" },
        { name: '30-60 mins', value: 0, color: "#00C49F" },
        { name: '60-90 mins', value: 0, color: "#FF80BB" },
        { name: '90-120 mins', value: 0, color: "#FF8042" },
    ];

    function prepareData(startData, sessions) {
        // A bit ugly code, but sometimes this is what it takes when working with real data 😅

        function incArrayValue(arr, field) {
            return arr.map((obj) =>
                obj.name === field ? { ...obj, value: obj.value + 1 } : obj
            );
        }

        function convertTimeToMinutes(timeStr) {
            const [hours, minutes, seconds] = timeStr.split(':').map(Number);
            return hours * 60 + minutes + seconds / 60;
        }

        const data = sessions
            .reduce((arr, cur) => {
                const duration = convertTimeToMinutes(cur.sessionLength);
                if (duration <= 30) {
                    return incArrayValue(arr, '0-30 mins');
                } else if (duration <= 60) {
                    return incArrayValue(arr, '30-60 mins');
                } else if (duration <= 90) {
                    return incArrayValue(arr, '60-90 mins');
                } else if (duration <= 120) {
                    return incArrayValue(arr, '90-120 mins');
                }
                return
            }, startData)
            .filter((obj) => obj.value > 0);

        return data;
    }

    const data = prepareData(startData, sessions);

    return (
        <div className='bg-dark text-light px-5 py-3 rounded-md w-[50%] shadow-sm shadow-customBlue'>
            <h2 className="text-2xl mb-4">Session Length</h2>
            <ResponsiveContainer height={240}>
                <PieChart>
                    <Pie
                        data={data}
                        nameKey="name"
                        dataKey="value"
                        innerRadius={85}
                        outerRadius={110}
                        cx="40%"
                        cy="50%"
                        paddingAngle={3}
                    >
                        {data.map(entry => (
                            <Cell fill={entry.color}
                                stroke={entry.color}
                                key={entry.name} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                        verticalAlign="middle"
                        align="right"
                        width="30%"
                        layout="vertical"
                        iconSize={15}
                        iconType="circle"
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SessionStats
