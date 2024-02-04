import { Plugin } from 'obsidian';
import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import { PergamentCanvas } from './PergamentCanvas';
import { StorageAdapter } from './StorageAdapter';

export default class Pergament extends Plugin implements StorageAdapter {
	async onload() {this.registerMarkdownCodeBlockProcessor("pergament", (source, el, ctx) => {
			const canvasRoot = createRoot(el);
			canvasRoot.render(
				<StrictMode>
					<PergamentCanvas
						parent={el}
					/>
				</StrictMode>
			)
		});
	}
}
