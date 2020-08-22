import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, ReferenceLine, CartesianGrid } from "recharts";
import { BiorhythmCalculator } from "../../utils/BiorhythmCalculator";
import css from "./BiorhythmChart.module.css";

const BiorhythmChart = (props) => {
  const { endDate, birthDate } = props;
  const data = BiorhythmCalculator.calculateSeries(birthDate, endDate, 31);
  
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="date" ticks={[data[3].date, data[15].date, data[27].date]} />
        <ReferenceLine x={data[15].date} />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Line className={css.emotional} type="natural" dot={false} dataKey="emotional" />
        <Line className={css.intellectual} type="natural" dot={false} dataKey="intellectual" />
        <Line className={css.physical} type="natural" dot={false} dataKey="physical" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export { BiorhythmChart };