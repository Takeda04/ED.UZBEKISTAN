import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { AllSeriesType } from "@mui/x-charts/models";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { Container } from "../static/tags";

const series = [
  {
    type: "bar",
    stack: "",
    yAxisKey: "eco",
    data: [2, 5, 3, 4, 1],
  },
  {
    type: "bar",
    stack: "",
    yAxisKey: "eco",
    data: [5, 6, 2, 8, 9],
  },
  {
    type: "line",
    yAxisKey: "pib",
    color: "red",
    data: [1000, 1500, 3000, 5000, 10000],
  },
] as AllSeriesType[];

export default function Statistic() {
  return (
    <Container>
      <ChartContainer
        series={series}
        width={1200}
        height={600}
        xAxis={[
          {
            id: "subject",
            data: ["September", "October", "November", "December", "January"],
            scaleType: "band",
            valueFormatter: (value: any) => value.toString(),
          },
        ]}
        yAxis={[
          {
            id: "eco",
            scaleType: "linear",
          },
          {
            id: "pib",
            scaleType: "log",
          },
        ]}
      >
        <BarPlot />
        <LinePlot />
        <ChartsXAxis label="Subjects" position="bottom" axisId="subject" />
        <ChartsYAxis label="Results" position="left" axisId="eco" />
        <ChartsYAxis label="PIB" position="right" axisId="pib" />
      </ChartContainer>
    </Container>
  );
}
