import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import '../css/menu-drop.css';
// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const Menu = () => (
  <Dropdown text='Entrar'>
    <Dropdown.Menu>
      <Dropdown.Item text='Minha Conta' />
      <Dropdown.Item text='Meus Pedidos'  />
      <Dropdown.Item text='Lista Desejos'  />
    </Dropdown.Menu>
  </Dropdown>
)

export default Menu;