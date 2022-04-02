import { render, screen, fireEvent } from '@testing-library/react';
import Investigadores from '../investigadores'

describe('investigacion page', () =>{

    beforeEach(()=>{
        render(<Investigadores />);

    });

    test('render is ok', () =>{    
        const contador = screen.getByText('contador en',{exact:false});
        expect(contador).toBeInTheDocument();
    });

    test('button +', () =>{
        const buttonPlus = screen.getByText('+');
        const contador = screen.getByText('contador en',{exact:false});
        fireEvent.click(buttonPlus);
        expect(contador).toHaveTextContent('1');
    })

    test('button -', () =>{
        const buttonMenos = screen.getByText('-');
        const contador = screen.getByText('contador en',{exact:false});
        fireEvent.click(buttonMenos);
        expect(contador).toHaveTextContent('-1');
    })
});

describe('cambio en mi historial', () =>{

    beforeEach(()=>{
        render(<Investigadores />);

    });

    test('cambio en el input',() =>{
        
    });

});