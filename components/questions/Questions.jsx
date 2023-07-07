import React from 'react';
import './Style.scss';
import QuestionsContainer from './components/questionsContainer';

const Questions = () => {
	const [secretQuestionsOne, setSecretQuestionsOne] = React.useState(false);
	const [secretQuestionsTwo, setSecretQuestionsTwo] = React.useState(false);
	const [secretQuestionsThree, setSecretQuestionsThree] = React.useState(false);
	const [secretQuestionsFour, setSecretQuestionsFour] = React.useState(false);
	const [secretQuestionsFive, setSecretQuestionsFive] = React.useState(false);
	const [secretQuestionsSix, setSecretQuestionsSix] = React.useState(false);

	return (
		<div className='containerQuestions'>
			<div className='blockQuestionsOne'>
				<hr className='lineTop' />
					<QuestionsContainer 
						secretQuestionsOne={secretQuestionsOne}
						setSecretQuestionsOne={setSecretQuestionsOne}
						secretQuestionsTwo={secretQuestionsTwo}
						setSecretQuestionsTwo={setSecretQuestionsTwo}
						secretQuestionsThree={secretQuestionsThree}
						setSecretQuestionsThree={setSecretQuestionsThree}
						secretQuestionsFour={secretQuestionsFour}
						setSecretQuestionsFour={setSecretQuestionsFour}
						secretQuestionsFive={secretQuestionsFive}
						setSecretQuestionsFive={setSecretQuestionsFive}
						secretQuestionsSix={secretQuestionsSix}
						setSecretQuestionsSix={setSecretQuestionsSix}
					/>
			</div>
		</div>
	)
}

export default Questions;