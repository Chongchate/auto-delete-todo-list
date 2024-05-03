import "./App.css";
import Container from "./components/Container";
import Column from "./components/Column";
import ButtonList from "./components/ButtonList";
import { useEffect, useRef, useState } from "react";
import { ButtonTypeEnum, IButton } from "./types";
import { mockButtonList } from "./constant";

function App() {
  const [buttonList, setButtonList] = useState<IButton[]>(mockButtonList);
  const [fruitList, setFruitList] = useState<IButton[]>([]);
  const [vegetableList, setVegetableList] = useState<IButton[]>([]);
  const [timeoutIDMap, setTimeoutIDMap] = useState(new Map());

  const fruitListRef = useRef(fruitList);
  const vegetableListRef = useRef(vegetableList);

  const handleCategorizeButton = (
    name: string,
    type: string,
    index: number
  ) => {
    let newButtonList = [...buttonList];

    // Remove the button from the list
    const [removedButton] = newButtonList.splice(index, 1);

    // Set new button list
    setButtonList(newButtonList);

    let timeoutID;

    // Classified the removed button according to its type
    if (removedButton.type === ButtonTypeEnum.fruit) {
      setFruitList((prev) => [...prev, removedButton]);

      // Set timeout and callback function
      timeoutID = setTimeout(() => {
        handleUncategorizeButton(name, type);
      }, 5000);
    } else if (removedButton.type === ButtonTypeEnum.vegetable) {
      setVegetableList((prev) => [...prev, removedButton]);

      // Set timeout and callback function
      timeoutID = setTimeout(() => {
        handleUncategorizeButton(name, type);
      }, 5000);
    }

    // Store timeout ID
    setTimeoutIDMap(timeoutIDMap.set(name, timeoutID));
  };

  const handleUncategorizeButton = (name: string, type: string) => {
    if (type === ButtonTypeEnum.fruit) {
      let newFruitList = [...fruitListRef.current];

      // Find the removed button from the fruit list
      const removedButton = newFruitList.find((fruit) => fruit.name === name);

      // Set new fruit list
      setFruitList(newFruitList.filter((fruit) => fruit.name !== name));

      // Update the button list
      if (removedButton) {
        setButtonList((prev) => [...prev, removedButton]);
      }
    } else if (type === ButtonTypeEnum.vegetable) {
      let newVegetableList = [...vegetableListRef.current];

      // Find removed button from the vegetable list
      const removedButton = newVegetableList.find(
        (vegetable) => vegetable.name === name
      );

      // Set new vegetable list
      setVegetableList(
        newVegetableList.filter((vegetable) => vegetable.name !== name)
      );

      // Update the button list
      if (removedButton) {
        setButtonList((prev) => [...prev, removedButton]);
      }
    }

    // Clear timeout
    clearTimeout(timeoutIDMap.get(name));
  };

  // Update ref values
  useEffect(() => {
    fruitListRef.current = fruitList;
    vegetableListRef.current = vegetableList;
  }, [fruitList, vegetableList]);

  return (
    <Container>
      <ButtonList
        buttons={buttonList}
        onButtonClicked={handleCategorizeButton}
      />
      <Column
        title="Fruit"
        buttons={fruitList}
        onButtonClicked={handleUncategorizeButton}
      />
      <Column
        title="Vegetable"
        buttons={vegetableList}
        onButtonClicked={handleUncategorizeButton}
      />
    </Container>
  );
}

export default App;
