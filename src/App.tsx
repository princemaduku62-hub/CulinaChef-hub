/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Navigation';
import { Home } from './pages/Home';
import { Recipes } from './pages/Recipes';
import { RecipeDetail } from './pages/RecipeDetail';
import { Chefs } from './pages/Chefs';
import { Chat } from './pages/Chat';
import { Subscription } from './pages/Subscription';
import { ChefDetail } from './pages/ChefDetail';
import { Profile } from './pages/Profile';
import { PrivateChat } from './pages/PrivateChat';
import { AdminDashboard } from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-[#5A5A40] selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/chefs" element={<Chefs />} />
            <Route path="/chefs/:id" element={<ChefDetail />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/private/:chefId" element={<PrivateChat />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>


        </main>
        <Footer />
      </div>
    </Router>
  );
}

