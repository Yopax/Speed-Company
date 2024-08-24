export default interface CardProyectProps {
    title: string;
    description: string;
    url: string;
    estado: string;
    color: "outline" | "default" | "destructive" | "secondary" | null;
  }
