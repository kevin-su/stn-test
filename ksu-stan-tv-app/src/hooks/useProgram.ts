import { ProgramProps } from "data";
import { usePrograms } from "hooks";

export function useProgram(id: number) {
  const programsData = usePrograms();
  return (
    id &&
    programsData.length &&
    programsData.find((item: ProgramProps) => item.id === id)
  );
}
