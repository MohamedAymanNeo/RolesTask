export interface Role {
  id?: string;
  name: string ;
  program: string;
  subProgram: string;
  pages: string;
  permissions: string[];
  selected?: boolean;
}
