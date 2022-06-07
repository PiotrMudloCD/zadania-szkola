import React from "react";
import { colors } from "./components/zadania-modul3/colors";

import "./App.css";
import { Button, Input, Textarea } from "./components/zadania-modul3";
import { Card } from "./components/zadania-modul3";
import { Menu } from "./components/zadania-modul3";
import { Employees } from "./components/zadania-modul3";
import { Bill } from  "./components/zadania-modul4";

function App() {
  return (
    <div className="App">
      <Menu />
      <Input borderColor={colors.wisteria}/>
      <Textarea borderSize="4px" />
      <Button icon="icon" label="Click me" />
      <Card
        title="Shrimp and Chorizo Paella"
        intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
        showMore
      />
      <Employees/>
      <Bill />
    </div>
  );
}

export default App;
