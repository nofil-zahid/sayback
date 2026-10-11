export type OutputColor = "red" | "green" | "blue" | "yellow" | "cyan";

export interface CliArguments {
  message: string;
  delay: number;
  color?: OutputColor | undefined;
  repeat: number;
  uppercase: boolean;
}
