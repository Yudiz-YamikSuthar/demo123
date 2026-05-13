/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MultisiteProvider } from './context/MultisiteContext';
import { AdminView } from './components/AdminView';

export default function App() {
  return (
    <MultisiteProvider>
      <AdminView />
    </MultisiteProvider>
  );
}

