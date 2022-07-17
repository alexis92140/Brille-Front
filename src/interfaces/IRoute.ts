export interface RouteObject {
  path: string;
  element: React.ReactNode;
  children?: RouteObject[];
}
