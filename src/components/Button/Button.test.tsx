import { render, screen } from '@testing-library/react';
import Button from "@/components/Button/Button";


test('рендерит кнопку с текстом', () => {
    render(<Button>Нажми меня</Button>);
    expect(screen.getByText('Нажми меня')).toBeInTheDocument();
});