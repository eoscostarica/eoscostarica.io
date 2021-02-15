import React, { useState } from "react"
import { withStyles } from '@material-ui/core/styles'
import clsx from "clsx"
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const GenericRadio = withStyles({
    root: {
      color: 'gray',
      '&$checked': {
        color: '#5484b3',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

const FormComponent = ( {formQuestions} ) => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    
    const handleReset = () => {
        setActiveStep(0)
    }

    return (
      <>
        {formQuestions.map((question) => (
            <Box key={question.title} style={{padding:'50px',backgroundColor:question.color}}>
                <h3 style={{margin:0}}>{question.title}</h3> 
                {(activeStep===question.index) && 
                    <Box>
                        <Box className={clsx("topSpacingBox","spacingBox")}>
                        <p>{question.description}</p>
                        </Box>
                        <Box>
                            {question.questions.map((item,i) => (
                                <Box className="spacingBox" key={i}>
                                    <p><b>{question.index+1}.{i+1}</b> - {item}</p>
                                    <FormControl component="fieldset" style={{marginTop:'10px'}}>
                                        <RadioGroup row  aria-label="form" name="form1" >
                                            <FormControlLabel value="1" control={<GenericRadio />} label="1" />
                                            <FormControlLabel value="2" control={<GenericRadio />} label="2" />
                                            <FormControlLabel value="3" control={<GenericRadio />} label="3" />
                                            <FormControlLabel value="4" control={<GenericRadio />} label="4" />
                                            <FormControlLabel value="5" control={<GenericRadio />} label="5" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            ))}
                        </Box>
                        <Box className={clsx("boxFlexEnd","spacingBox")}>
                            {activeStep!==0 && 
                                <button className="buttonSecondary" onClick={handleBack}>Back</button>
                            }
                            {activeStep!==5 && 
                                <button className="buttonPrimary" style={{marginLeft:'10px'}} onClick={handleNext}>Next</button>
                            }
                        </Box>
                    </Box>
                }
            </Box>
        ))}
      </>
  );
};

FormComponent.propTypes = {
    formQuestions:PropTypes.array
}

export default FormComponent;
