import React from 'react'
import Section from './common/Section'
import avatar from '../assets/avatar.png'
const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      image: avatar,
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic temporibus assumenda amet, dignissimos sit veritatis expedita molestias maiores!",
    },
    {
      id: 2,
      image: avatar,
      name: "Rahul",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic temporibus assumenda amet, dignissimos sit veritatis expedita molestias maiores!",
    },
    {
      id: 3,
      image: avatar,
      name: "Robert",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic temporibus assumenda amet, dignissimos sit veritatis expedita molestias maiores!",
    },
  ]

  return (
    <Section
      title="Testimonials 💭"
      subtitle="This is what my other clients have to say about me. I accept clients from all around the world."
    >
      <div className="max-w-xl flex flex-col gap-2">
        {testimonials.map(({ id, image, name, comment }) => (
          <div key={id} className="flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300">
            <div className="w-1/3">
              <img
                className="w-20 h-20 object-cover object-top pt-2"
                src={image}
                alt="avatar" />
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-sm font-extralight">{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Testimonials