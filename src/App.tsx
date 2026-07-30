import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { Title, Hero, Header, Home, FixtureCard } from "./components";
import por1 from "../src/assets/images/portada/por1.png";
import por2 from "../src/assets/images/portada/por2.png";
import por3 from "../src/assets/images/portada/por3.png";
import { HeaderCategory } from "./components";
import logo from "../src/assets/images/icons/logo1.png";
import { categories } from "./constants/categories";
import type { CategoryType } from "../src/types/types";
import { useNavigate } from "react-router-dom";
import { juvenil } from "../src/constants/fixture/juvenil";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const images = [por1, por2, por3];
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    (categoryParam as CategoryType) || "Juvenil",
  );
  const handleCategoryChange = (cat: CategoryType) => {
    setSelectedCategory(cat);
    navigate(`/table?category=${encodeURIComponent(cat)}`, {
      replace: true,
    });
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <Header />
          <HeaderCategory
            img={logo}
            color="#22b7be"
            category={categories}
            onCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <Title title="Campeonato D-7" />
          <Home />
          {juvenil.length > 0 && (
          juvenil.map((match) => (
            <FixtureCard
              key={match.id}
              id={match.id}
              team1={match.team1}
              team2={match.team2}
              scorerTeam1={match.scorerTeam1}
              scorerTeam2={match.scorerTeam2}
              date={match.date}
              time={match.time}
              location={match.location}
              status={match.status}
              group={match.group}
              observation={match.observation}
              category={selectedCategory}
              serie={match.serie}
              events={match.events}
            />
          ))
        )}
          <Hero images={images} />
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
