"use client";
import { useEffect, useState } from "react";

export function MobileSticky() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), { threshold: .08 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  return <a className={`mobile-sticky ${show ? "is-visible" : ""}`} href="#contato"><span>solicitar diagnóstico</span><b>›</b></a>;
}
