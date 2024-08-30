import { render } from '@testing-library/react';
import Home from '../index'; 

// Mock components to simulate their behavior
jest.mock('../../../components/Banner', () => () => <div data-testid="banner">Mocked Banner</div>);
jest.mock('../../../components/CategoryLinks', () => () => <div data-testid="category-links">Mocked Category Links</div>);
jest.mock('../../../components/ProductsRow', () => () => <div data-testid="products-row">Mocked Products Row</div>);

describe('Home Component', () => {
  it('renders banner, category links, and products row', () => {
    const { getByTestId } = render(<Home />);
    
    const bannerElement = getByTestId('banner');
    expect(bannerElement).toBeInTheDocument();
    
    const categoryLinksElement = getByTestId('category-links');
    expect(categoryLinksElement).toBeInTheDocument();
    
    const productsRowElement = getByTestId('products-row');
    expect(productsRowElement).toBeInTheDocument();
  });

  
});
