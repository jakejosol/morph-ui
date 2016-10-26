// References
import React from 'react';
import moment from 'moment-timezone';

export default class InputMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', error: null };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.formatCurrency = this.formatCurrency.bind(this);
  }

  formatCurrency(numbr) {
    if (!numbr) return '';
    if (isNaN(numbr)) return '0.00';
    var decimalplaces = 2;
    var decimalcharacter = ".";
    var thousandseparater = ",";
    numbr = parseFloat(numbr);
    var sign = numbr < 0 ? "-" : "";
    var formatted = new String(numbr.toFixed(decimalplaces));
    if (decimalcharacter.length && decimalcharacter != ".") {
      formatted = formatted.replace(/\./, decimalcharacter);
    }
    var integer = "";
    var fraction = "";
    var strnumbr = new String(formatted);
    var dotpos = decimalcharacter.length ? strnumbr.indexOf(decimalcharacter) : -1;
    if (dotpos > -1) {
      if (dotpos) {
        integer = strnumbr.substr(0, dotpos);
      }
      fraction = strnumbr.substr(dotpos + 1);
    } else {
      integer = strnumbr;
    }
    if (integer) {
      integer = String(Math.abs(integer));
    }
    while (fraction.length < decimalplaces) {
      fraction += "0";
    }
    var temparray = new Array();
    while (integer.length > 3) {
      temparray.unshift(integer.substr(-3));
      integer = integer.substr(0, integer.length - 3);
    }
    temparray.unshift(integer);
    integer = temparray.join(thousandseparater);
    return sign + integer + decimalcharacter + fraction;
  }

  onChange(e) {
    var value = e.target.value;
    var onChange = this.props.onChange;

    this.setState({ filled: value.toString() !== '' ? true : false, value: value });
  }

  onBlur(e) {
    var value = e.target.value;
    var onChange = this.props.onChange;

    this.setState({ filled: value.toString() !== '' ? true : false, value: this.formatCurrency(value) }, () => {
      if (onChange) onChange(this.state.value);
    });
  }

  render() {
    return React.createElement(
      'div',
      { className: 'input-group ' + (this.props.rounded ? 'rounded ' : '') + (this.props.type || '') },
      React.createElement('input', {
        id: this.props.id,
        name: this.props.name,
        type: 'text',
        className: this.state.filled ? 'filled' : '',
        placeholder: this.props.placeholder,
        defaultValue: this.props.value,
        disabled: this.props.disabled,
        value: this.state.value,
        onChange: this.onChange,
        onBlur: this.onBlur }),
      this.props.label ? React.createElement(
        'label',
        { htmlFor: this.props.name },
        this.props.label
      ) : '',
      this.props.validate ? React.createElement(
        'span',
        { className: 'error' },
        this.props.error
      ) : ''
    );
  }
}