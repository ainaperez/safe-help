
import React from "react";

import classes from "./Input.module.scss";
import PlacesAutocomplete, {
  geocodeByAddress, 
  getLatLng, 
  getLatlng
} from 'react-places-autocomplete';

const Input = (props) => {
  
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          placeholder={props.elementConfig.placeholder}
          {...props.elementConfig}
          placeholder={props.elementConfig.placeholder}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          placeholder={props.elementConfig.placeholder}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
      case "checkbox":
      inputElement = (
        <checkbox
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
      break;
      
    case "select":
      inputElement = (
        <select
          className={classes.InputElement}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
        className={inputClasses.join(" ")}
        {...props.elementConfig}
        placeholder={props.elementConfig.placeholder}
        value={props.value}
        onChange={props.changed}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default Input;
