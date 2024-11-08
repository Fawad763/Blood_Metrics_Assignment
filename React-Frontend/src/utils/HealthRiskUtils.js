export const determineRiskLevel = (metric, value) => {
  const numValue = typeof value === 'string' ? parseInt(value.split('/')[0]) : value;

  if (metric === 'a1c') return numValue >= 6.5 ? 'high-risk' : 'normal';
  if (metric === 'ldl') return numValue >= 160 ? 'high-risk' : 'normal';
  if (metric === 'glucose') return numValue >= 126 ? 'high-risk' : 'normal';

  return 'normal';
};

export const getColor = (riskLevel) => {
  return riskLevel === 'high-risk' ? 'bg-red-300' : '';
};
