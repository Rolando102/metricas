import MetricCard from './MetricCard';

const Dashboard = ({ metricsData }) => {
  return (
    <section className="dashboard">
      <div className="grid">
        {metricsData.map((metric) => (
          <MetricCard key={metric.id} {...metric} />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;