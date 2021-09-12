import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerForm from './CustomerForm';
import CustomerScreen from './CustomerScreen';

function Customer() {
  return (
    <Switch>
      <Route path={'/customers'} exact component={CustomerScreen} />
      <Route path={'/customers/create'} exact component={CustomerForm} />
    </Switch>
  );
}

export default Customer;
