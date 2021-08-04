import React from 'react';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <h1>Welcome to React seed....</h1>
        <p>
          You can use this template to create a boiler plate for react Projects.
        </p>
        <a
          className={classes.appLink}
          href="https://betterprogramming.pub/forget-boilerplate-use-repository-templates-74efebbee8eb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click this link to know how to use the template in GitHub
        </a>
      </header>
      <section data-testid="my-section">
        <p>My section includes everything...</p>
      </section>
    </div>
  );
};

export default App;
