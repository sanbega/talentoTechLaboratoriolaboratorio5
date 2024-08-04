// "use client";

// import { useContext } from "react";
// import Link from "next/link";
// import CharacterContext from "../context/CharacterContext";

// const App = () => {
//   const { characters } = useContext(CharacterContext);

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold my-6">Personajes de Rick and Morty</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {characters && characters.length > 0 ? (
//           characters.map((character) => (
//             <div key={character.id} className="border p-4 rounded shadow">
//               <h2 className="text-xl font-bold">{character.name}</h2>
//               <img
//                 src={character.image}
//                 alt={character.name}
//                 className="w-full"
//               />
//               <a href={`/character/${character.id}`}>
//                 <a className="text-blue-500 hover:underline mt-2 block">
//                   Ver detalles
//                 </a>
//               </a>
//             </div>
//           ))
//         ) : (
//           <p>No se encontraron personajes.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
"use client";

import { useContext } from "react";
import Link from "next/link";
import { Card, Container, Row, Col } from "react-bootstrap";
import CharacterContext from "../context/CharacterContext";

const App = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Personajes de Rick and Morty</h1>
      <Row>
        {characters.length > 0 ? (
          characters.map((character) => (
            <Col
              key={character.id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="mb-4"
            >
              <Card>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <a href={`/character/${character.id}`}>
                    <a className="btn btn-primary mt-2">Ver detalles</a>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No se encontraron personajes.</p>
        )}
      </Row>
    </Container>
  );
};

export default App;
