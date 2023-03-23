import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Button onClick={showNoti}> Show toast</Button>

      <Switch>

        <Route path='/' component={CounterFeature} exact />
        <Route path='/todos' component={TodoFeature} />
        <Route path='/albums' component={AlbumFeature} />
        {/*<Route component={NotFound} />*/}
      </Switch>


      Footer

    </div>
  );
}

export default App;
