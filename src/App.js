import './App.css';
import Card from './Card';
import { useFetch } from './useFetch';

function App() {
  const {loading, data} = useFetch()
  return (
    <main>
        <div className="section-title">
          <h1>{loading?"Loading...": "Pagination"}</h1>
          <div className="underline"></div>
          </div>

          <section className="users">
            <div className="container">
              {
                data.map(user =>{
                  return<Card key={user.id}{...user}/>
                })
              }
              </div>
              </section>
    </main>
  );
}

export default App;
