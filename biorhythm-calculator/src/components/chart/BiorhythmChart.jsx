import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis } from "recharts";
import { BiorhythmCalculator } from "../../utils/BiorhythmCalculator";

const BiorhythmChart = (props) => {
  const { endDate, birthDate } = props;
  const data = BiorhythmCalculator.calculateSeries(birthDate, endDate);
  console.log(data, birthDate, endDate);
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <Line dataKey="physical" stroke="green"/>
        <Line dataKey="emotional" stroke="red" />
        <Line dataKey="intellecture" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export { BiorhythmChart };