import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import Contact from './Contact';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SearchBlog from './Search';
import Announcer from './Announcer';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { LOG_LVL } from './Environment';
import { logger } from './Logger';



/*const posts = [
  { id: '1', name: 'Este es un ejemplo de cadena usando React' },
  { id: '2', name: 'Se escribe React y no Preact' },
  { id: '3', name: 'Tercer ejemplo de cadena' },
  { id: '4', name: 'Cuarta y última cadena' },
]; */

const filterBlogs = (blogs, query) => {
  if (!query) {
      return blogs;
  }

  return blogs.filter((blog) => {
      const blogName = blog.title.toLowerCase();
      return blogName.includes(query);
  });
};

function App() {

  const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchBlog = async () => {
           const response = await fetch(
              'http://localhost:8000/blogs/'
           );
           const blog = await response.json();
           console.log(blog);
           setBlogs(blog);
        };
        fetchBlog().catch(err => {console.log(err.message)});
     }, []);

  //const logger = new ConsoleLogger({ level: LOG_LVL }); 
  /*
  console.log('RT - log example');
  console.info('RT - info example');
  console.warn('RT - warning example');
  console.error('RT - error example');

  logger.log('RT - log example');
  logger.warn('RT - warn example');
  logger.error('RT - error example');
  */
  //LOG_LVL= 'prod';
  
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredBlogs = filterBlogs(blogs, searchQuery);


  return (

      <Router>
        <div className="App">
          <NavBar />
                 
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="/search">
                <div className="search">
                <Announcer
                        message={`${filteredBlogs.length} filtrados / ${blogs.length} totales`}
                  />
                    <SearchBlog
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                    />
                    <ul>
                                             
                        {filteredBlogs.map((blog) => (
                          <Link to={`/blogs/${blog.id}`}>
                            <h2>{ blog.title }</h2>
                          </Link>
                        ))}
                    </ul>
                </div>
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

  );
}

export default App;
