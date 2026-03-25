import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import type { Product } from '../../types/index';
import { stores } from '../../data/stores';

interface PriceChartProps {
  product: Product;
}

const PriceChart: React.FC<PriceChartProps> = ({ product }) => {
  // Map store IDs to colors using CSS variables
  const storeColors: Record<string, string> = {};
  stores.forEach(store => {
    // Use a consistent color mapping based on store ID hash
    const colorIndex = store.id.length % 5;
    const colors = [
      'var(--color-primary)',
      'var(--color-secondary)',
      'var(--color-success)',
      'var(--color-warning)',
      'var(--color-error)'
    ];
    storeColors[store.id] = colors[colorIndex];
  });

  // Transform price history into chart data
  const chartData = product.priceHistory.map(entry => {
    const data: Record<string, any> = { date: entry.date };
    Object.keys(entry.prices).forEach(storeId => {
      data[storeId] = entry.prices[storeId];
    });
    return data;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12 }} 
          angle={-45} 
          textAnchor="end" 
          height={60}
          interval="preserveEnd"
        />
        <YAxis 
          tickFormatter={(value: number) => `€${value}`}
          tick={{ fontSize: 12 }}
        />
        <Tooltip 
          formatter={((value: number) => [`€${value}`, 'Prijs']) as any} 
          labelFormatter={(label) => `Datum: ${label}`}
          contentStyle={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-primary)',
            borderRadius: '8px',
          }}
          labelStyle={{ fontWeight: 'bold', color: 'var(--color-primary)' }}
          cursor={{ stroke: 'var(--color-primary)', strokeWidth: 1, strokeDasharray: '3 3' }}
        />
        <Legend />
        
        {stores.map(store => (
          <Line
            key={store.id}
            type="monotone"
            dataKey={store.id}
            stroke={storeColors[store.id]}
            strokeWidth={2}
            dot={false}
            name={store.name}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
