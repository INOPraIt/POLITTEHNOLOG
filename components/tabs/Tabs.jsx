import React, { useState } from "react";
import "../../App.scss";
import one from '../img/icons/9.png';
import two from '../img/icons/10.png';
import Select from 'react-select';

const Tabs = () => {
	const [toggleState, setToggleState] = useState(1);

	const [select, setSelect] = useState(false);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	const arrayTabsOne = [
		{
			id: 1,
			title: 'Понятие сюзерен/вассал.',
		},
		{
			id: 2,
			title: 'Политические команды (элиты) субъектов/муниципалитетов, как неотъемлемая компонента политической жизни внутри регионов/муниципалитетов.',
		},
		{
			id: 3,
			title: 'Избирательные округа, принцип выбора избирательного округа, специфика избирательных округов в субъектах РФ.',
		},
		{
			id: 4,
			title: 'Структура штаба на примере конкретного муниципалитета.',
		},
		{
			id: 5,
			title: 'Планирование кампании - с чего начинаются выборы.',
		},
		{
			id: 6,
			title: 'План-график - хребет любой избирательной кампании. Принцип создания план-графика: максимальный эффект и максимальная производительность. Создаём план-график.',
		}
	]

	const arrayTabsResultOne = [
		{
			id: 1,
			title: 'Вы поймете как устроена политическая жизнь внутри регионов и муниципалитетов.',
		},
		{
			id: 2,
			title: 'Познакомитесь с понятиями сюзерн/вассал, а значит поймете правило политической жизни, о которых не принято говорить.',
		},
		{
			id: 3,
			title: 'Научитесь выбирать избирательный округ.',
		},
		{
			id: 4,
			title: 'Научитесь создавать структуру штаба на примере конкретного муниципалитета.',
		},
		{
			id: 5,
			title: 'Научитесь планировать избирательную  кампанию.',
		},
		{
			id: 6,
			title: 'Научитесь разрабатывать план-график избирательной кампании с учетом специфики округа.',
		}
	]

	const arrayTabsTwo = [
		{
			id: 1,
			title: 'Узнаваемость, как первый компонент полноценной избирательной кампании.',
		},
		{
			id: 2,
			title: 'Быстрый и дешевый механизм наращивания узнаваемости.',
		},
		{
			id: 3,
			title: 'Почему негатив может быть обманчив.',
		},
		{
			id: 4,
			title: 'Cоздаём идеальный агитматериал. Принципы.',
		},
		{
			id: 5,
			title: 'Виды распространения агитматериала без лишних трат.',
		},
		{
			id: 6,
			title: 'Эффективные механизмы распространения агитматериала.',
		},
		{
			id: 7,
			title: 'Контроль команды.',
		},
		{
			id: 8,
			title: '100% прогноз и почему не может быть по-другому.',
		},
		{
			id: 9,
			title: 'Отвечаем на самый главный вопрос целевой аудитории. Механизм, метод, контроль.',
		},
	]

	const arrayTabsResultTwo = [
		{
			id: 1,
			title: 'Повысите узнаваемость.',
		},
		{
			id: 2,
			title: 'Научитесь создавать идеальный агитационный материал.',
		},
		{
			id: 3,
			title: 'Научитесь эффективно распространять агитационный материал.',
		},
		{
			id: 4,
			title: 'Научитесь эффективно контролировать команду.',
		},
		{
			id: 5,
			title: 'Научитесь своевременно выходить к этапу наращивания рейтинга кандидата.',
		}
	]

	const arrayTabsThree = [
		{
			id: 1,
			title: 'Агитационный материал по план-графику в течение календарного года. Разбор и его разработка. Основные принципы. ',
		},
		{
			id: 2,
			title: 'Виды cредств массовой инфомации. Полезные и не полезные СМИ. Приоритеты, работа со СМИ.',
		},
		{
			id: 3,
			title: 'Создаём СМИ без журналистского образования.',
		},
		{
			id: 4,
			title: 'Спонсоры на выборы. Методы их поиска, красные линии.',
		},
	]

	const arrayTabsResultThree = [
		{
			id: 1,
			title: 'Научитесь составлять агитационный материал, поймете основные принципы.',
		},
		{
			id: 2,
			title: 'Узнаете виды средств массовой информации и научитесь с ними взаимодействовать.',
		},
		{
			id: 3,
			title: 'Научитесь создавать собственное СМИ, не имея журналисткого образования.',
		},
		{
			id: 4,
			title: 'Научитесь применять эффективные методы поиска спонсоров на выборы.',
		},
	]

	const arrayTabsFour = [
		{
			id: 1,
			title: 'День выборов. Технология наблюдения на выборах. Понятия наблюдателя и члена комиссии с правом решающего или совещательного голоса.',
		},
		{
			id: 2,
			title: 'Уязвимые места членов комисии на избирательном участке для неграмотных наблюдателей. Разбор механизмов фальсификаций на избирательном участке и их предотвращение.',
		},
		{
			id: 3,
			title: 'Итоговый протокол. Защита результата. Разбираем механизмы, где возможны фальсификации на этапе итогого протокола голосования.',
		},
		{
			id: 4,
			title: 'Информационное сопровождение всего процесса. Методика.',
		},
		{
			id: 5,
			title: 'Как зарегистрироваться кандидатом в депутаты.',
		},
	]

	const arrayTabsResultFour = [
		{
			id: 1,
			title: 'Поймете, как устроено наблюдение на выборах.',
		},
		{
			id: 2,
			title: 'Узнаете уязвимые места на избирательном участке, научитесь распознавать и предотвращать все механизмы фальсификаций.',
		},
		{
			id: 3,
			title: 'Научитесь защищать результат юридически и информационно на этапе дня голосования и подведения итогов.',
		},
	]

	const arrayTabsFive = [
		{
			id: 1,
			title: 'Простым языком разбираем, как заставить управляющую кампанию и органы исполнительной власти соблюдать нормы и требования жилищного законодательства в многоквартирных домах, порядок выполнения услуг по содержанию и ремонту общего имущества. Всё действие происходит под брендом кандидата. ',
		},
		{
			id: 2,
			title: 'Разбираем простой метод подачи заявлений (специально политических, но и верных с нормативной стороны).',
		},
		{
			id: 3,
			title: 'Пример бланка заявления. Разбор.',
		},
		{
			id: 4,
			title: 'Текстовый модуль кандидата и помощника при работе с жителями. Технология ”От двери к двери в ЖКХ.',
		},
		{
			id: 5,
			title: 'Разбираем простой метод подачи заявлений (специально политических, но и верных с нормативной стороны).',
		},
		{
			id: 6,
			title: 'Самый оптимальный график “От двери к двери” в ЖКХ с технологической точки зрения.',
		},
		{
			id: 7,
			title: 'Анализ статистики.',
		},
		{
			id: 8,
			title: 'Телефонный обзвон. Текстовый модуль. Разбор.',
		},
		{
			id: 9,
			title: 'Объявления для жителей на каждом этапе.',
		},
		{
			id: 10,
			title: 'Что делать при отписке контрольных органов простыми словами.',
		},
		{
			id: 11,
			title: 'Экономика. Статистика.',
		},
	]

	const arrayTabsResultFive = [
		{
			id: 1,
			title: 'Научитесь заставлять управляющие кампании соблюдать нормы и требования жилищного законадательства.',
		},
		{
			id: 2,
			title: 'Научитесь правильно подавать заявления с политической и юридической точки зрения.',
		},
		{
			id: 3,
			title: 'Научитесь работать со статистикой и анализировать рейтинг кандидата в рамках правозащитной деятельности в ЖКХ.',
		},
	]

	const arrayTabsSix = [
		{
			id: 1,
			title: 'Учимся говорить на широкую аудиторию. Тренинг.'
		}
	]

	const arrayTabsResultSix = [
		{
			id: 1,
			title: 'Улучшите свой голос, станете вызывать больше доверия и уверенности при выступление на широкую аудиторию. Вас будут лучше слушать и слышать '
		}
	]

	return (
		<div className="container">
			<div className="blockDivTest">
				<button
					onClick={() => setSelect(prev => !prev)}
					className="selectProg"
				>
					Выберете модуль.
				</button>

				{select && 
					<div className="blockSecretSelect">
						<div className="absoluteBtn">
							<button
								className={toggleState === 1 ? "tabsS active-tabsS" : "tabsS"}
								onClick={() => toggleTab(1)}
							>
								Модуль 1
							</button>
							<button
								className={toggleState === 2 ? "tabsS active-tabsS" : "tabsS"}
								onClick={() => toggleTab(2)}
							>
								Модуль 2
							</button>
							<button
								className={toggleState === 3 ? "tabsS active-tabsS" : "tabsS"}
								onClick={() => toggleTab(3)}
							>
								Модуль 3
							</button>
							<button
								className={toggleState === 4 ? "tabsS active-tabsS" : "tabsS"}
								onClick={() => toggleTab(4)}
							>
								Модуль 4
							</button>
							<button
								className={toggleState === 5 ? "tabsSF active-tabsSF" : "tabsSF"}
								onClick={() => toggleTab(5)}
							>
								Модуль 5
							</button>
							<button
								className={toggleState === 6 ? "tabsS active-tabsS" : "tabsS"}
								onClick={() => toggleTab(6)}
							>
								Модуль 6
							</button>
						</div>
					</div>
				}
			</div>
			<div className="secretBlockTabs">
				<div className="selectMenuBar">
					{/* <div className="btnSelectMenuBar">
					<button
						onClick={() => setSelect(prev => !prev)}
						className="selectProg"
					>
						<div className="selectModuleBtn">
							<p>
								Выберете модуль
							</p>
						</div>
					</button>
					</div>
					{select &&
						
					} */}

				</div>
			</div>
			<div className="bloc-tabs">
				<button
					className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(1)}
				>
					Модуль 1
				</button>
				<button
					className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(2)}
				>
					Модуль 2
				</button>
				<button
					className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(3)}
				>
					Модуль 3
				</button>
				<button
					className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(4)}
				>
					Модуль 4
				</button>
				<button
					className={toggleState === 5 ? "tabsFI active-tabsFI" : "tabsFI"}
					onClick={() => toggleTab(5)}
				>
					<p className={toggleState === 5 ? "moduleTextFive active-moduleTextFive" : "moduleTextFive"}>
					Модуль 5
					</p>
				</button>
				<button
					className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(6)}
				>
					Модуль 6
				</button>
			</div>

			<div className="content-tabs">
				{/* Item 1 */}
				<div
					className={toggleState === 1 ? "content  active-content" : "content"}
				>
					<div className="contentTypeTabsContainer">
						huhuih
						<div className="contentTypeTabsOne">
							<div className="contOne">
								<div>
									<p className="blockOneHeader">Введение</p>
									<div>
										{arrayTabsOne.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={one}
													className="imgOne"
												/>
												<p className="textTitleOne">{k.title}</p>
											</div>
										)}
									</div>
									<div>
									</div>
								</div>
							</div>
							<div className="contTwo">
								<div>
									<p className="blockOneHeaderTwo">Результат</p>
									<div>
										{arrayTabsResultOne.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={two}
													className="imgTwo"
												/>
												<p className="textTitleThree">{k.title}</p>
											</div>
										)}
									</div>
									<div>
									</div>
								</div>
							</div>
						</div> 
					</div>
				</div>

				{/* Item 2 */}

				<div
					className={toggleState === 2 ? "content  active-content" : "content"}
				>
					<div className="contentTypeTabsContainer">
						<div className="contentTypeTabsOne">
							<div className="contOne">
								<div>
									<p className="blockOneHeader">Как прокачать узнаваемость без лишних затрат</p>
									<div>
										{arrayTabsTwo.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={one}
													className="imgOne"
												/>
												<p className="textTitleOne">{k.title}</p>
											</div>
										)}
									</div>
									<div>
									</div>
								</div>
							</div>
							<div className="contTwo">
								<div>
									<p className="blockOneHeaderTwo">Результат</p>
									<div>
										{arrayTabsResultTwo.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={two}
													className="imgTwo"
												/>
												<p className="textTitleThree">{k.title}</p>
											</div>
										)}
									</div>
									<div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Item 3 */}

				<div
					className={toggleState === 3 ? "content  active-content" : "content"}
				>
					<div className="contentTypeTabsContainer">
						<div className="contentTypeTabsOne">
							<div className="contOne">
								<div>
									<p className="blockOneHeader">
										Агитация, средства массовой информации, спонсоры
									</p>
									<div>
										{arrayTabsThree.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={one}
													className="imgOne"
												/>
												<p className="textTitleOne">{k.title}</p>
											</div>
										)}
									</div>
									<div>
									</div>
								</div>
							</div>
							<div className="contTwo">
								<div>
									<p className="blockOneHeaderTwo">Результат</p>
									<div>
										{arrayTabsResultThree.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={two}
													className="imgTwo"
												/>
												<p className="textTitleThree">{k.title}</p>
											</div>
										)}
									</div>
									<div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Item 4 */}

				<div
					className={toggleState === 4 ? "content  active-content" : "content"}
				>
					<div className="contentTypeTabsContainer">
						<div className="contentTypeTabsOne">
							<div className="contOne">
								<div>
									<p className="blockOneHeader">
										День выборов с юристом, работающим в центральной избирательной комиссии (цик) РОСCИИ
									</p>
									<div>
										{arrayTabsFour.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={one}
													className="imgOne"
												/>
												<p className="textTitleOne">{k.title}</p>
											</div>
										)}
									</div>
									<div>
									</div>
								</div>
							</div>
							<div className="contTwo">
								<div>
									<p className="blockOneHeaderTwo">Результат</p>
									<div>
										{arrayTabsResultFour.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={two}
													className="imgTwo"
												/>
												<p className="textTitleThree">{k.title}</p>
											</div>
										)}
									</div>
									<div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Item 5 */}

				<div
					className={toggleState === 5 ? "content  active-content" : "content"}
				>
					<div className="contentTypeTabsContainer">
						<div className="contentTypeTabsOne">
							<div className="contOne">
								<div>
									<p className="blockOneHeader">
										ЗОЛОТОЙ МОДУЛЬ “От <br />
										правозащитника ЖКХ - в депутаты” или выигрышная избирательная<br /> 
										кампания за 70 тысяч рублей.
									</p>
									<div>
										{arrayTabsFive.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={one}
													className="imgOne"
												/>
												<p className="textTitleOne">{k.title}</p>
											</div>
										)}
									</div>
									<div>
									</div>
								</div>
							</div>
							<div className="contTwo">
								<div>
									<p className="blockOneHeaderTwo">Результат</p>
									<div>
										{arrayTabsResultFive.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={two}
													className="imgTwo"
												/>
												<p className="textTitleThree">{k.title}</p>
											</div>
										)}
									</div>
									<div>

									</div>
								</div>
							</div>
						</div>
					</div> 
				</div>

				{/* Item 6 */}

				<div
					className={toggleState === 6 ? "content  active-content" : "content"}
				>
					<div className="contentTypeTabsContainer">
						<div className="contentTypeTabsOne">
							<div className="contOne">
								<div>
									<p className="blockOneHeader">
										Как прокачать узнаваемость без лишних затрат
									</p>
									<div>
										{arrayTabsSix.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={one}
													className="imgOne"
												/>
												<p className="textTitleOne">{k.title}</p>
											</div>
										)}
									</div>
									<div>
									</div>
								</div>
							</div>
							<div className="contTwo">
								<div>
									<p className="blockOneHeaderTwo">Результат</p>
									<div>
										{arrayTabsResultSix.map(k =>
											<div className="arrayTabsCont">
												<img 
													src={two}
													className="imgTwo"
												/>
												<p className="textTitleThree">{k.title}</p>
											</div>
										)}
									</div>
									<div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tabs;