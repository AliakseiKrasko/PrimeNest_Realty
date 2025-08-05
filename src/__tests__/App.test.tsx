import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home page', () => {
    it('renders headline', () => {
        render(<Home />);
        expect(screen.getByText(/Каталог недвижимости|Real Estate Catalog/i)).toBeInTheDocument();
    });
});