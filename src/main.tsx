import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { GameContextReducerProvider } from './context/GameContextReducerProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GameContextReducerProvider>
			<App />
		</GameContextReducerProvider>
	</React.StrictMode>
);
