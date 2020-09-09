import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './LandingPage.css'
import siteIcon from '../../assets/novoIcone.svg';

function LandingPage(props) {
  const isRestaurant = props.location.pathname === '/restaurant';
  const history = useHistory();
  const [ code, setCode ] = useState('');

  function handleChangeInput(event) {
    event.stopPropagation();
    setCode(event.target.value);
  }

  function getRestaurant(event) {
    event.preventDefault();
    localStorage.setItem('restaurantCode', code);

    if (isRestaurant) {
      history.push('/pedidos');
    } else {
      history.push('/menu');
    }
  }
  
  if(
    !isRestaurant
    && props.location.pathname !== '/'
  ) {
    return (
      <div><h1>Not Found</h1></div>
    )
  }
  return (
    <section id="landingPage">
      <div>
        <img src={siteIcon} alt="Cardaphia"/>
        <h3>
          Digite o código {isRestaurant
            ? 'do seu restaurante'
            : 'da mesa, e boa refeição'}
          </h3>
      </div>
      <form
        action="submit"
        onSubmit={getRestaurant}
      >
        <input
          type="text"
          name="code"
          placeholder={`#Código ${isRestaurant
            ? 'do seu restaurante'
            : 'da mesa'}`}
          onChange={handleChangeInput}
        />
        <button type="submit">Entrar</button>
      </form>
    </section>
  );

}
 
export default LandingPage;