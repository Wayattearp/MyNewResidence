import React from 'react';
import { Link} from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Добро пожаловать</h1>
            </Link>
        </header>
    </div>
);

export default App;
