import React from "react"
import PropTypes from 'prop-types'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const AccordionComp = ( {data, handleChange, expanded, bgColor} ) => {
  return (
    <>
      {data.map((item) => (
        <Accordion 
          key={item.target}
          square
          expanded={expanded === item.target}
          style={{backgroundColor:bgColor, boxShadow:'none'}}
          onChange={handleChange(item.target)}
          className="accordion">
          <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
            <h4 style={{margin:'2px', padding: 0}}>{item.title}</h4>
          </AccordionSummary>
          <AccordionDetails style={{padding:1, marginTop:'-15px'}}>
          <p style={{padding: 0}}>
            {item.content}
          </p>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

AccordionComp.propTypes = {
  data: PropTypes.array,
  handleChange: PropTypes.func
}

AccordionComp.defaultProps = {
  data: [],
}

export default AccordionComp;
