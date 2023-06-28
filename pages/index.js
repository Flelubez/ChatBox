import React from "react";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

  // Redirige l'utilisateur vers la page "test"
  React.useEffect(() => {
    router.push("/chatBox");
  }, []);

  // Affiche une page vide
  return null;

}