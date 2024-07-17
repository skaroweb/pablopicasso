import { useEffect } from "react";

export function useButtonColorRemover() {
  useEffect(() => {
    let submitButton = document.querySelector(".submit-btn");
    let hireButton = document.querySelector(".hire-btn");

    submitButton.classList.remove("btn-primary");
    hireButton.classList.remove("btn-primary");
  });
}
