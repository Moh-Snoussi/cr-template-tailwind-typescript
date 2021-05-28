import React, { Component } from 'react';
import Api from "../Commons/Api"

type props = {
	testProp: string
}

type state = {
	buttonText: string
}

class App extends Component <props, state>
{
	state : state = {
		buttonText: "start"
	}

    render()
    {
        return (
			<div className="flex flex-col md:flex-row">
				<div className="bg-primary sm:min-w-12 md:w-1/2 p-2 m-2">
					Hello
				</div>
				<div onClick={(event : React.MouseEvent<HTMLDivElement> ) => this.handleClick(event)} className="cursor-pointer hover:bg-secondary hover:shadow-2xl bg-primary text-a sm:min-w-12 md:w-1/2 p-2 m-2">
					{this.state.buttonText}
				</div>
			</div>
        );
    }

	private async handleClick(event : React.MouseEvent)
	{
		const api : Api = new Api()
		const text = await api.apiEndPoint("hello")
	    this.setState(
			{
				buttonText: text
			}
		)
	}
}

export default App;