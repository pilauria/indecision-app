import React from 'react';

export default class AddOption extends React.Component {
  // default state
  state = {
    error: undefined,
  };
  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error })); // with ES6 same as ({error: error})

    //to clear the form cell after an input is added
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className='add-option-error'>{this.state.error}</p>
        )}
        <form className='add-option' onSubmit={this.handleAddOption}>
          <input className='add-option__input' type='text' name='option' />
          <button className='button'>Add Option</button>
        </form>
      </div>
    );
  }
}
