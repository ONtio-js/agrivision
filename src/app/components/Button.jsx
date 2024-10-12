import React from 'react'

const Button = ({type, title, onclick}) => {
  return (
		<button
			onclick={onclick ?? onclick}
			type={type}
			className='bg-green-700 px-8 py-2 rounded-full text-lg font-semibold capitalize hover:bg-transparent border-2 border-green-700 text-white'
		>
			{title}
		</button>
  );
}

export default Button