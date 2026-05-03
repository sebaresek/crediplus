import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/informacion-legal', label: 'Información Legal' },
  { path: '/terminos-y-condiciones', label: 'Términos y condiciones' },
  { path: '/politicas-de-privacidad', label: 'Políticas de privacidad' },
  { path: '/defensa-del-consumidor', label: 'Defensa del consumidor' },
  // { path: '/boton-de-arrepentimiento', label: 'Botón de arrepentimiento' },
  { path: '/costos-y-tasas', label: 'Costos y tasas' },
];

export default function LegalLayout() {
  const location = useLocation();

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sticky top-28">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`
                        px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                        ${isActive 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                      `}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
              <div className="prose prose-blue max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-p:text-gray-600 prose-li:text-gray-600">
                <Outlet />
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
