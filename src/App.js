import React from "react";
import { Router, Route } from 'react-router';
import { HKBitMen } from "./pages/*";

const pages = [
    {
        name: 'bit men',
        component: HKBitMen
    }
];

export default function App() {
  return (
    <Router>
        <nav>
          <ul>
            {
                pages.maps(page => <Route  path={page.name} component={page.component} />)
            }
          </ul>
        </nav>
    </Router>
  );
}