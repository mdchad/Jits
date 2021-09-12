import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JobForm from './JobForm';
import JobScreen from './JobScreen';

function Job() {
  return (
    <Switch>
      <Route path={'/jobs'} exact component={JobScreen} />
      <Route path={'/jobs/create'} exact component={JobForm} />
    </Switch>
  );
}

export default Job;
