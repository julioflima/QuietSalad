export interface IBodyEnabledPart<T> {
  id: T;
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

export interface IBodyParts {
  enabled: IBodyEnabledPart<string>[];
  disabled: string[];
}
