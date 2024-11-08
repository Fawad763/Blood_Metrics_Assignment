import React from 'react';
import MetricsTable from './components/metrics_table/MetricsTable';
import HealthRiskSummary from './components/health_risk_summary/HealthRiskSummary';
import OpenAIInsights from './components/openai_Insights/OpenAIInsights';
import "./index.css";

const App = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Health Metrics Dashboard</h1>
      <HealthRiskSummary />
      <MetricsTable />
      <OpenAIInsights />
    </div>
  );
};

export default App;
