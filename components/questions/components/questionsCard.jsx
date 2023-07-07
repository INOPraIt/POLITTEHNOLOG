import React from 'react'

const questionsCard = (
	{
		question,
		answer,
		one,
		setOne
	}
) => {
	return (
		<div>
			<div className='questionText'>
				<p className='textQuestions'>
					{question}
				</p>
				<button
					className='btnPlus'
					onClick={() => setOne(prev => !prev)}
				>
					+
				</button>
			</div>
			{one &&
				<p className='textAreu'>
					{answer}
				</p>
			}
			<hr className='lineBottom' />
		</div>
	)
}

export default questionsCard;