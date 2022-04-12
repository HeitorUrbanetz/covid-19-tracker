import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { Cards, Chart, CountryPicker } from './components';

it('renders with no errors', () => {
    render(<App />, <Cards/>, <Chart/>, <CountryPicker/>);
});

// testei apenas se os componentes estão sendo renderizados corretamente.

