export interface IBodyParts<T> {
  id: keyof T;
  paths: {
    d: string;
  }[];
  text: {
    name: string;
    x: string;
    y: string;
  };
  line: {
    paths: {
      d: string;
    }[];
  };
}
