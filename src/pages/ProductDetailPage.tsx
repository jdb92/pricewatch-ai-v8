import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { stores } from '../data/stores';
import PriceChart from '../components/product/PriceChart';
import AiBadge from '../components/product/AiBadge';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Product niet gevonden</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>Het product met ID "{id}" bestaat niet.</p>
          <Link to="/" className="mt-4 inline-block underline" style={{ color: 'var(--color-primary)' }}>Terug naar home</Link>
        </div>
      </div>
    );
  }

  const lowestPrice = Math.min(...product.prices.map(p => p.price));
  const lowestPriceEntry = product.prices.find(p => p.price === lowestPrice);
  const lowestStore = lowestPriceEntry ? stores.find(s => s.id === lowestPriceEntry.storeId) : null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      {/* Product Hero */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/3">
              <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow" />
            </div>
            <div className="lg:w-2/3">
              <p className="text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>{product.category}</p>
              <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>{product.name}</h1>
              <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>{product.description}</p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold" style={{ color: 'var(--color-primary)' }}>€{lowestPrice.toFixed(2)}</span>
                {lowestStore && (
                  <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    bij {lowestStore.logo} {lowestStore.name}
                  </span>
                )}
              </div>

              <AiBadge score={product.aiAdvice.score} verdict={product.aiAdvice.verdict} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* AI Advice Detail */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>🤖 AI Advies</h2>
          <p className="mb-4 font-medium" style={{ color: 'var(--color-primary)' }}>{product.aiAdvice.verdict}</p>
          <ul className="space-y-2">
            {product.aiAdvice.factors.map((factor: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2" style={{ color: 'var(--color-text)' }}>
                <span>•</span>
                <span>{factor}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price History */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>📈 Prijshistorie (90 dagen)</h2>
          <PriceChart product={product} />
        </div>

        {/* Price Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>💰 Prijzen per winkel</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Winkel</th>
                  <th className="text-left py-3 px-4 font-medium">Prijs</th>
                  <th className="text-left py-3 px-4 font-medium">Voorraad</th>
                  <th className="text-left py-3 px-4 font-medium">Verzending</th>
                  <th className="text-left py-3 px-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {product.prices.map((entry, idx) => {
                  const entryStore = stores.find(s => s.id === entry.storeId);
                  return (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">
                        {entryStore ? `${entryStore.logo} ${entryStore.name}` : entry.storeId}
                      </td>
                      <td className="py-3 px-4 font-bold" style={entry.price === lowestPrice ? { color: 'var(--color-success)' } : {}}>
                        €{entry.price.toFixed(2)}
                        {entry.price === lowestPrice && <span className="ml-2 text-xs">Laagste</span>}
                      </td>
                      <td className="py-3 px-4">{entry.inStock ? '✅ Op voorraad' : '❌ Niet op voorraad'}</td>
                      <td className="py-3 px-4">{entry.shipping > 0 ? `€${entry.shipping.toFixed(2)}` : 'Gratis'}</td>
                      <td className="py-3 px-4">
                        <a href={entry.url} target="_blank" rel="noopener noreferrer"
                          className="px-4 py-2 rounded text-white text-sm" style={{ backgroundColor: 'var(--color-primary)' }}>
                          Naar winkel →
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Specs */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>📋 Specificaties</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between p-3 rounded" style={{ backgroundColor: 'var(--color-surface)' }}>
                <dt className="font-medium">{key}</dt>
                <dd style={{ color: 'var(--color-text-secondary)' }}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
