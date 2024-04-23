import { Frame } from "./frame/frame"
import { createRoot } from 'react-dom/client';
import { getClientState } from "./state/state";
import '../../static/fonts/DM_Sans/DM_Sans.css'

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<Frame cs={getClientState()} />);