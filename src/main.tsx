import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './assets/style/index.css';
import { GameContextReducerProvider } from './context/GameContextReducerProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GameContextReducerProvider>
			<div className="game-container">
				<App />
			</div>
		</GameContextReducerProvider>
	</React.StrictMode>
);
