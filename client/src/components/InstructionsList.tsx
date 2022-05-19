import Instruction from "../types/InstructionType";

interface InstructionsType {
  instructions?: [{ instruction: string; prio: number }];
}
interface InstructionType {
  instruction: string;
  prio: number;
}
const InstructionsList = ({ instructions }: InstructionsType) => {
  if (instructions) {
    let sortedInstructions = instructions.sort(sortByOrderAscending);

    return (
      <ol>
        {sortedInstructions.map((instruction: InstructionType) => (
          <Instruction
            key={instruction.prio}
            instruction={instruction.instruction}
          />
        ))}
      </ol>
    );
  }
  function sortByOrderAscending(a: any, b: any) {
    if (a.prio < b.prio) {
      return -1;
    }
    if (a.prio > b.prio) {
      return 1;
    }
    return 0;
  }
};

export default InstructionsList;