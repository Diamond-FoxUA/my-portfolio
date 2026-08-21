import { getTechStats } from "../api/getTechStats";
import StatsWidget from "./StatsWidget";

export default async function Stats() {
  const rawStats = await getTechStats();

  const chartData = rawStats.map((item) => ({
    id: item.id,
    tech: item.name,
    projects: item._count.projects,
  }));

  return <StatsWidget data={chartData} />;
}
