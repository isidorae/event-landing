import { useEffect } from 'react';

export default function HubspotForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/45510902.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Limpieza opcional si cambias de página
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region="na1"
      data-form-id="de3fb33f-d345-4f05-b3b2-c415820ff8b4"
      data-portal-id="45510902"
    ></div>
  );
}