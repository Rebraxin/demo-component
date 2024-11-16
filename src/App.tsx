import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, CardAction, CardContent, CardMedia } from "./components/card";

function App() {
  const artists = [
    {
      id: 1,
      name: "John Doe",
      description: "A talented artist known for abstract art.",
      image: "https://via.placeholder.com/250",
      link: "/artists/john-doe",
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "Specializes in landscape painting.",
      image: "https://via.placeholder.com/250",
      link: "/artists/jane-smith",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {artists.map((artist) => (
            <Card key={artist.id}>
              {/* Used with default props */}
              {/* <CardMedia src={artist.image} alt={artist.name} />
              <CardContent
                title={artist.name}
                description={artist.description}
              />
              <CardAction href={artist.link} /> */}

              {/* Used with custom chidlren */}
              <CardMedia>
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </CardMedia>
              <CardContent>
                <div className="card-content p-4">
                  <h3 className="text-lg font-semibold">{artist.name}</h3>
                  <p className="text-xs text-white-800">CUSTOM PROPS</p>
                  <p className="text-sm text-gray-600">{artist.description}</p>
                </div>
                <CardAction href={artist.link} />
              </CardContent>
            </Card>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
