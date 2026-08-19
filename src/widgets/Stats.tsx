"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const statsData = [
  { tech: "Next.js / React", projects: 3 },
  { tech: "TypeScript", projects: 3 },
  { tech: "Prisma / Postgres", projects: 2 },
  { tech: "Framer Motion", projects: 1 },
];

export default function Stats() {
  return (
    <section
      id="stats"
      aria-describedby="stats-title"
      className="py-10 scroll-mt-28"
    >
      <h2
        id="stats-title"
        className="text-2xl font-black tracking-tight pb-10 uppercase text-white font-sans"
      >
        Statistics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={statsData}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid stroke="#1e293b" horizontal={false} />
          <YAxis
            dataKey="tech"
            type="category"
            textAnchor="end"
            tick={{ fontSize: 11, fontFamily: "monospace", dx: -20 }}
            width={150}
          />
          <XAxis
            dataKey="projects"
            type="number"
            ticks={[0, 1, 2, 3]}
            tick={{ fontSize: 11, fontFamily: "monospace" }}
            domain={[0, 3]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              borderColor: "#1e293b",
            }}
          />
          <Bar dataKey="projects" fill="#10b981" barSize={12} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
