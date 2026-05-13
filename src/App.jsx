import Dashboard from "./components/Dashboard";

const App = () => {
  const metricsData = [
    { id: 1, label: "Asistencia", value: 80, unit: "%", trend: "up" },
    { id: 2, label: "Rendimiento", value: 90, unit: "%", trend: "down" },
    { id: 3, label: "Productividad", value: 75, unit: "%", trend: "up" },
    { id: 4, label: "Satisfacción", value: 85, unit: "%", trend: "up" },
  ];

  return (
    <main>
      <h1>Panel de Métricas</h1>

      <Dashboard metricsData={metricsData} />
    </main>
  );
};

export default App;