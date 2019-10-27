import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App: React.FC = () => {
	const currencies = [ 'EUR', 'PLN', 'GEL', 'DKK', 'CZK', 'GBP', 'SEK', 'USD', 'RUB' ];
	const [ selectedCurrencies, setSelectedCurrencies ] = useState();

	const addCurrency = (rate: string) => {
		if (selectedCurrencies === undefined) {
			const addNewCurrency: string[] = [ rate ];
			setSelectedCurrencies(addNewCurrency);
		} else {
			if (selectedCurrencies.includes(rate)) {
				removeCurrency(rate);
			} else {
				const addNewCurrency: string[] = [ ...selectedCurrencies, rate ];
				setSelectedCurrencies(addNewCurrency);
			}
		}
	};

	const removeCurrency = (rate: string) => {
		const index = selectedCurrencies.indexOf(rate);
		const removeNewCurrency = [ ...selectedCurrencies ];
		removeNewCurrency.splice(index, 1);
		setSelectedCurrencies(removeNewCurrency);
	};

	const checkSelected = (rate: string): boolean => {
		if (selectedCurrencies === undefined) {
			return false;
		} else {
			return selectedCurrencies.includes(rate);
		}
	};

	return (
		<Row className="full-screen">
			<Col xs={8} md={6} lg={4} className="main-box">
				<Row className="selected-box">
					{selectedCurrencies === undefined ? (
						<Row />
					) : (
						selectedCurrencies.map((rate: string) => (
							<Col xs={3} key={currencies.indexOf(rate)} className="column-style">
								<label className="currency-container-selected">
									<span className="">{rate}</span>
									<a className="boxclose" onClick={() => removeCurrency(rate)} href="/#">
										{' '}
									</a>
								</label>
							</Col>
						))
					)}
				</Row>

				<Row className="currency-box">
					{currencies.map((rate: string) => (
						<Col xs={3} key={rate} className="column-style" onInput={() => addCurrency(rate)}>
							<label className={checkSelected(rate) ? 'currency-container-active' : 'currency-container'}>
								<input type="checkbox" checked={checkSelected(rate)} readOnly />
								<span>{rate}</span>
							</label>
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
};

export default App;
