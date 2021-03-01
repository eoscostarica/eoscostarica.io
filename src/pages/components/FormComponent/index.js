import React, { useState, useRef, createRef } from "react"
import { withStyles } from '@material-ui/core/styles'
import clsx from "clsx"
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const GenericRadio = withStyles({
    root: {
      color: 'gray',
      '&$checked': {
        color: '#5484b3',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

const FormComponent = ( {formQuestions, isDesktop, onSubmit} ) => {
    const [activeStep, setActiveStep] = useState(0)
    const [disableButton, setDisableButton] = useState(true)

    const refNextSection = useRef([])
    refNextSection.current = Array(formQuestions.length).fill().map((_, i) => createRef());


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        formQuestions[activeStep+1].visible=true
        refNextSection.current[activeStep+1].scrollIntoView({behavior:'smooth', block:'center', inline:'nearest'})
        handleDisableButton()
    }

    const handleEnableButton = () => {
        setDisableButton(false)
    }

    const handleDisableButton = () => {
        setDisableButton(true)
    }

    const setQuestionValue = (indexSection,indexQuestion,value) => {
        formQuestions[indexSection].questions[indexQuestion].value=value
        if(isSectionComplete(indexSection)){
            handleEnableButton()
        }
    }

    const isSectionComplete = (indexSection) => {
        let flag = true

        formQuestions[indexSection].questions.map((item) => {
            if(item.value===-1) flag= false
        })
        return flag
    }
    
    return (
      <>
        {formQuestions.map((section,i) => (
            <Box key={section.title} className="formBox" style={{backgroundColor:section.color}} ref={el => refNextSection.current[i] = el}>
                <h3 style={{margin:0}}>{section.title}</h3> 
                {section.visible && 
                    <Box>
                        <Box className={clsx("topSpacingBox","spacingBox")}>
                            <p>{section.description}</p>
                        </Box>
                        <Box>
                            {section.questions.map((item,i) => (
                                <Box className="spacingBox" key={i}>
                                    <p className="itemQuestion"><b>{section.index+1}.{i+1}</b> - {item.question}</p>
                                    <Box className="radioBox">
                                        <FormControl component="fieldset" >
                                            <RadioGroup row  aria-label="form" name="form1" >
                                                <FormControlLabel value="1" control={<GenericRadio />} label="1" style={{marginRight: isDesktop ? '50px' : '20px'}} onChange={()=>{setQuestionValue(section.index,i,1)}}/>
                                                <FormControlLabel value="2" control={<GenericRadio />} label="2" style={{marginRight: isDesktop ? '50px' : '20px'}} onChange={()=>{setQuestionValue(section.index,i,2)}}/>
                                                <FormControlLabel value="3" control={<GenericRadio />} label="3" style={{marginRight: isDesktop ? '50px' : '20px'}} onChange={()=>{setQuestionValue(section.index,i,3)}}/>
                                                <FormControlLabel value="4" control={<GenericRadio />} label="4" style={{marginRight: isDesktop ? '50px' : '20px'}} onChange={()=>{setQuestionValue(section.index,i,4)}}/>
                                                <FormControlLabel value="5" control={<GenericRadio />} label="5" style={{marginRight: isDesktop ? '50px' : '20px'}} onChange={()=>{setQuestionValue(section.index,i,5)}}/>
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        <Box className={clsx("boxFlexEnd","spacingBox")}>
                            {(activeStep=== section.index) && activeStep!==formQuestions.length-1 && 
                                <button className="buttonPrimary" style={{marginLeft:'10px'}} onClick={handleNext} disabled={disableButton}>Next</button>     
                            }
                            {(activeStep=== section.index) && activeStep===formQuestions.length-1 && 
                                <button className="buttonPrimary" style={{marginLeft:'10px'}} onClick={onSubmit} disabled={disableButton}>Finish</button>     
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
    formQuestions:PropTypes.array,
    isDesktop:PropTypes.bool,
    onSubmit:PropTypes.func,
}

FormComponent.defaultProps = {
    formQuestions:[],
}

export default FormComponent;
