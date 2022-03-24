import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import { useFetch } from "./useFetch";

function App() {
  const { loading, data } = useFetch();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (loading) {
      return;
    }
    setUsers(data[page]);
    // eslint-disable-next-line
  }, [loading,page]);

  const pervPage =()=>{
    if(page===0){
      setPage(data.length-1)
    }else{
      setPage(page-1)
    }
  }
  const nextPage = () => {
    if (page === data.length-1 ) {
      setPage(0);
    }else{
      setPage(page + 1);
    }
  };

  return (
    <main>
      <div className="secion-title">
        <h1>{loading ? "Loading..." : "Pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="users">
        <div className="container">
          {users.map((user) => {
            return <Card key={user.id} {...user} />;
          })}
        </div>
        <div className="btn-container">
          <button onClick={pervPage} className="nextPrev">
            prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                className={`page-btn ${index===page?"active":""}`}
                key={index}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button onClick={nextPage} className="nextPrev">
            next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
