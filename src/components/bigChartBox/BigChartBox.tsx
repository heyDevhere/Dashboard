import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    violent: 4000,
    religious: 2400,
    Abuse: 2400,
  },
  {
    name: "Mon",
    violent: 3000,
    religious: 1398,
    Abuse: 2210,
  },
  {
    name: "Tue",
    violent: 2000,
    religious: 9800,
    Abuse: 2290,
  },
  {
    name: "Wed",
    violent: 2780,
    religious: 3908,
    Abuse: 2000,
  },
  {
    name: "Thu",
    violent: 1890,
    religious: 4800,
    Abuse: 2181,
  },
  {
    name: "Fri",
    violent: 2390,
    religious: 3800,
    Abuse: 2500,
  },
  {
    name: "Sat",
    violent: 3490,
    religious: 4300,
    Abuse: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Post Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Abuse"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="religious"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="violent"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
