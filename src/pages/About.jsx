import React from 'react'
import { useState,useEffect } from 'react';
const About = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);
  return (
    <div className='p-10 justify-stretch'>
      <h2>about us</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)} className='bg-deep-orange-400 rounded-lg w-10'>+</button>
      <p>Calculation: {calculation}</p>

      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ducimus quia iure dignissimos id. Qui laborum officiis vero et ex rerum dolorem! Totam dolorum saepe consequatur eius amet temporibus delectus!
      Optio inventore vitae magni nobis tempora ex recusandae saepe qui esse nulla cum sit soluta, porro quis doloremque dignissimos molestias dolore expedita. Repellendus deserunt dolorum officiis? Quod assumenda quibusdam consectetur!
      Ex nesciunt quibusdam, officiis id corporis placeat quo aperiam ipsum commodi libero quidem obcaecati labore, nihil est, culpa maxime unde. Assumenda repudiandae qui expedita numquam inventore sint aliquid amet! Corporis.
      Eum officiis, voluptatum magni illo blanditiis aspernatur, culpa adipisci at, corporis beatae debitis veniam commodi nobis iusto quibusdam. Voluptas amet sunt optio alias harum qui cum cupiditate deleniti dignissimos error.
      Facilis pariatur beatae saepe, molestiae commodi nihil eos, maiores assumenda delectus quam magnam sapiente sint tempora. Eaque, eum. Dolorum delectus nostrum quis ipsam eum veritatis, optio sint quaerat eius alias.
      Illo eveniet architecto iure nemo omnis adipisci repudiandae quaerat neque sequi! Facere eligendi temporibus perspiciatis, illo quia necessitatibus ea sit sint tenetur provident molestias labore doloremque vel? Ad, incidunt distinctio.
      </p>
    </div>
  )
}

export default About
