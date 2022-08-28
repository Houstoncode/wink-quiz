import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '@/app/layots';

const DashboardPage = loadable(() => import('./dashboard'));
const StocksPage = loadable(() => import('./stocks'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/stocks" element={<StocksPage />} />{' '}
      </Route>
    </Routes>
  );
};
