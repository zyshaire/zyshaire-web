import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { AIAuditPage } from './pages/AIAuditPage';
import { AboutPage } from './pages/AboutPage';
// Temporarily hidden: keep the page file for future re-enable.
// import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { InsightsPage } from './pages/InsightsPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServicesPage } from './pages/ServicesPage';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ai-audit" element={<AIAuditPage />} />
        {/* Temporarily hidden: case studies route disabled. */}
        {/* <Route path="/case-studies" element={<CaseStudiesPage />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal" element={<Navigate to="/legal/privacy" replace />} />
        <Route path="/legal/:docType" element={<LegalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
