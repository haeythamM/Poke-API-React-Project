import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Pokemon from './components/Pokemon';
import PokemonDetails from './components/PokemonDetails';

function App() {
  const url = '/';
  return (
    <Router> 
      <div className='.love-ya'>
        <Header />
        <div>
          <main>
            <div className="container">
              <Routes>
                <Route path={`${url}Pokemon/:PokemonId`} element={<PokemonDetails />} />
                <Route path={url} element={<Pokemon />} />
              </Routes>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </Router> 
  );
}
export default App;




// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Pokemon from './components/Pokemon';
// import PokemonDetails from './components/PokemonDetails';


// function App() {
//   const url = '/';
//   return (
//       <div>
//         <Header />
//         <div>
//           <main>
//             <h1>You are in Poke App</h1>
//             <h2>Check out our Top 151 Pokemon!</h2>
//             <div className="container">
//                 <Routes>
//                 <Route path={`${url}Pokemon/:PokemonId`} element={<PokemonDetails />} />
//                 <Route path={url} element={<Pokemon />} />
//                 </Routes>
//             </div>
//           </main>
//         </div>
//         <Footer />
//       </div>
  
//   );
// }
// export default App;

// // import './App.css';
// // import Footer from './components/Footer';
// // import Header from './components/Header';
// // import Pokemon from './components/Pokemon';
// // // import Pokemon from './components/PokemonDetails';

// // function App () {
// //   return (
// //     <div>
// //       <Header />
// //         <div>
// //           <main>
// //             <h1>You are in Poke App</h1>
// //             <h2>Check out our Top 151 Pokemon!</h2>
// //             <div className="container">
// //             <Pokemon/>
// //             </div>
// //           </main>
// //         </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;
