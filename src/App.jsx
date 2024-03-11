import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Card } from './components/card/CardComponent'
import { ToggleComponent } from './components/toggle/ToggleComponent'
import { AppTheme } from './theme'


function App() {

  const baseUrl = "https://rickandmortyapi.com/api";
  
  const [items, setItems] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [newPage, setNewPage] = useState(1);
  const handleScroll = (event) => {
    const {target} = event;
    
    
    
    if(Math.round(target.scrollHeight - target.scrollTop) === target.clientHeight){
      /* alert('final bro') */
      setActualPage(newPage)
    }

  }

  useEffect(() => {
    axios.get(`${baseUrl}/character/?page=${actualPage}`)
    .then(resp => {
      if(resp.data.info.next){
        setNewPage(actualPage + 1);
      }
      const newItems = items.concat(resp.data.results);
      console.log(newItems);      
      setItems(newItems);
      
    });
  }, [actualPage])

  
  
  return (
    <AppTheme>
      <div className='app' onScroll={handleScroll}>
        <div className='header'>
          <h2 className='title'>Ricky And Morty</h2>
          <ToggleComponent />
        </div>

        <div className='container-card'>
          {
            items.map(item => (
              <Card key={item.id} element={item}/>
            ))
          }
        </div>
      </div>
    </AppTheme>
  )
}

export default App
