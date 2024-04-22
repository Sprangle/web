import React from "react";
import { useState, useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import strings from "../i18n/definitions";
import Feature from "../features/Feature";

export default function LearningCycleIndicator({ 
  bookmark,
  message 
}) {
  const [userIsCorrect, setUserIsCorrect] = useState(false);
  const [userIsWrong, setUserIsWrong] = useState(false);

  let learningCycle = bookmark.learning_cycle;
  let coolingInterval = bookmark.cooling_interval;

  useEffect(() => {
    //mimics correctness from api
    const userIsCorrect = ["C", "TC", "TTC", "TTTC", "HC", "CC", "CCC"].includes(message); 
    setUserIsCorrect(userIsCorrect);
    const userIsWrong = message.includes("W")|| message.includes("S");
    setUserIsWrong(userIsWrong);
  }, [message]);


  const learningCycleEnum = Object.freeze({
    0: "not set",
    1: "receptive",
    2: "productive",
  });

  const getLearningCycleIcon = () => {
    switch(learningCycleEnum[learningCycle]) {
      case "receptive":
        return '/static/icons/receptive-icon.png';
      case "productive":
        return '/static/icons/productive-icon.png';
      default:
        return null;
    }
  }

  const getTooltipContent = () => {
    switch(learningCycleEnum[learningCycle]) {
      case "receptive":
        return strings.receptiveTooltip;
      case "productive":
        return strings.productiveTooltip;
      default:
        return '';
    }
  }

  const getBarProperties = (index) => {
    // maps the cooling interval values (0, 1, 2, 4, 8) to a linear sequence (0, 1, 2, 3, 4)
    let barCount = Math.round(Math.log2(( coolingInterval * 2) + 1));
    let color = 'grey';
    let widthMultiplier = Math.pow(1.8, index);

    if (index < barCount) {
      color = 'green';
    } else if (index === barCount) {
      color = 'yellow';
      if (userIsCorrect) {
        color = 'green';
      } else if (userIsWrong) {
        color = 'grey';
      }
    }
    return {color, widthMultiplier};
  }

  return (
    <>
      {Feature.merle_exercises() && (
        <>
          <Tooltip title={getTooltipContent()}>
            <div className="learningCycleIcon">
              <img 
                src={getLearningCycleIcon()} 
                alt={`${learningCycleEnum[learningCycle]}-icon`} 
                style={{height: '2.5em', width: '2.5em'}}/>
            </div>
          </Tooltip>
          <div className="cooling-bars">
            {[...Array(5)].map((_, index) => {
              const {color, widthMultiplier} = getBarProperties(index);
              return (
                <div
                  key={index}
                  className={`cooling-bar ${color}`}
                  style={{width: `${0.5 * widthMultiplier}em`}}
                ></div>
              );
              })}
          </div>
        </>
      )}
    </>
  );
}