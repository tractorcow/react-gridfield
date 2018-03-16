import React, { Component } from 'react';
import fieldHolder from 'components/FieldHolder/FieldHolder';

class GridField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Handles changes to the text field's value.
   *
   * @param {Event} event
   */
  handleChange(event) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, { id: this.props.id, value: event.target.value });
    }
  }

  render() {
    return <div>Empty</div>;
  }
}

GridField.propTypes = {
  onChange: React.PropTypes.func,
};

export { GridField as Component };

export default fieldHolder(GridField);
