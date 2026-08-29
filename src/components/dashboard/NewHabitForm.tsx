import { useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import { HABIT_HEADER_COLOR } from "./habitMonth";

type NewHabitFormProps = {
  onAddHabit: (name: string) => void;
};

const NewHabitForm = ({ onAddHabit }: NewHabitFormProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState("");

  const submit = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    onAddHabit(trimmed);
    setName("");
    setIsAdding(false);
  };

  const cancel = () => {
    setIsAdding(false);
    setName("");
  };

  return (
    <Flex mt="3" align="center" minH="8">
      {isAdding ? (
        <Flex gap="2" align="center">
          <Input
            size="sm"
            w="240px"
            autoFocus
            value={name}
            placeholder="Habit name"
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
              if (e.key === "Escape") cancel();
            }}
          />
          <Button size="sm" bg="black" color="white" onClick={submit}>
            Add
          </Button>
          <Button size="sm" variant="outline" onClick={cancel}>
            Cancel
          </Button>
        </Flex>
      ) : (
        <Button
          variant="ghost"
          color={HABIT_HEADER_COLOR}
          fontWeight="medium"
          px="1"
          onClick={() => setIsAdding(true)}
        >
          + New Habit
        </Button>
      )}
    </Flex>
  );
};

export default NewHabitForm;
