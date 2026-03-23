import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
export default function Chart({data}){
    return(
        <div className='ml-5'>
      <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
     layout="vertical"
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
       <XAxis type="number" />
     <YAxis dataKey="name" type="category" width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#FF8811" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
     
    </BarChart>
        </div>
    )
}