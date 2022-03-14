import { paths } from "../shared/constants/paths";

export function checkPath(currentPath: string) {
  return paths.includes(currentPath);
}
