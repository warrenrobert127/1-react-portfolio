import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";






function App() {
  const [categories] = useState([
    {
      name: "portfolio",
      description: "Some of my best web development work",
    },
    { name: "resume", description: "My work and education experience" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About currentCategory={currentCategory}></About>
            <Portfolio></Portfolio>
            
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
