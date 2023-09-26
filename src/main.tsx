import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './assets/style/index.css';
import { GameContextReducerProvider } from './context/GameContextReducerProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GameContextReducerProvider>
			<div className="bg-brutal-bg flex flex-col items-center min-w-screen min-h-screen lg:max-h-screen">
				<App />
			</div>
		</GameContextReducerProvider>
	</React.StrictMode>
);
