import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', registrations: 32000, disbursements: 18000 },
  { name: 'Feb', registrations: 41000, disbursements: 22000 },
  { name: 'Mar', registrations: 38000, disbursements: 20000 },
  { name: 'Apr', registrations: 52000, disbursements: 28000 },
  { name: 'May', registrations: 48000, disbursements: 26000 },
  { name: 'Jun', registrations: 61000, disbursements: 34000 },
  { name: 'Jul', registrations: 55000, disbursements: 30000 },
  { name: 'Aug', registrations: 68000, disbursements: 38000 },
  { name: 'Sep', registrations: 62000, disbursements: 35000 },
  { name: 'Oct', registrations: 74000, disbursements: 42000 },
  { name: 'Nov', registrations: 70000, disbursements: 40000 },
  { name: 'Dec', registrations: 82000, disbursements: 48000 },
];

const OutreachChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#27AE60" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#27AE60" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorDis" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1F618D" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#1F618D" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94A3B8', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94A3B8', fontSize: 12 }}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#FFF', 
              border: 'none', 
              borderRadius: '12px', 
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
            }}
          />
          <Area 
            type="monotone" 
            dataKey="registrations" 
            stroke="#27AE60" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorReg)" 
          />
          <Area 
            type="monotone" 
            dataKey="disbursements" 
            stroke="#1F618D" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorDis)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OutreachChart;