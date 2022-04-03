import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'
import { DataProvider } from './context/DataContext';
import { rest } from 'msw';
import { server } from './mocks/server';

describe('investigacion page', () =>{

    beforeEach(()=>{
        render(<App />, {wrapper:DataProvider});
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

describe('input render component', () =>{

  beforeEach(()=>{
    render(<App />, {wrapper:DataProvider});
  });

  test('input', () =>{
    const titleName = screen.getByText('carlos');
    expect(titleName).toBeInTheDocument();

    const inputName = screen.getByRole('textbox',{name:''});
    fireEvent.change(inputName,{target:{value:'Ariza'}});
    expect(titleName).toHaveTextContent(/ariza/i);
  });
});

test('handle error for scoops and toppings routes', async () =>{
  server.resetHandlers(
      rest.get('http://localhost:3030/patentes',(req,res,ctx) => 
          res(ctx.status(500))
      )
  );
  render(<App />, {wrapper:DataProvider});
  const title = await screen.findByText(/a method is provided/i,{exact:false});
});


