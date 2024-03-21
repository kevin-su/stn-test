export type ProgramProps = {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  rating: string;
  genre: string;
  year: number;
  language: string;
};

export async function getPrograms() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/StreamCo/stan-tv-coding-challenge/master/reactjs/data.json"
    );
    return (await response.json()) as Array<ProgramProps>;
  } catch (e) {
    return { error: e };
  }
}
