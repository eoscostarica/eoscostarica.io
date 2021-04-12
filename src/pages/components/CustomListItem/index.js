import React from "react"
import {withStyles} from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const GenericListItem = withStyles({
  root: {
    paddingLeft:'20px',
    paddingRight: 0,
    borderLeft: 'solid 5px white',
  },
  selected: {
    backgroundColor: '#F8F8F8',
    borderLeft: 'solid 5px #5484b3',
  }
})((props) => <ListItem {...props} />);

const GenericListItemIcon = withStyles({
    root: {
      color:'black',
      minWidth:'20px',
      opacity: .5,
      width:'20px',
      marginRight:'15px',
    },
})((props) => <ListItemIcon {...props} />);

const GenericListItemText = withStyles({
  primary: {
    fontFamily:'Lato',
    fontSize: 15,
    fontWeight:'bold',
    color: 'black',
  },
})((props) => <ListItemText {...props} />);


const CustomListItem = ( {label, href, target, icon, isSelected}) => {
  return (
    <Link href={href} target={target} style={{textDecoration: 'none'}}>
      <GenericListItem button selected={isSelected}>
        <GenericListItemIcon >
         {icon}
        </GenericListItemIcon>
        <GenericListItemText primary={label} />
      </GenericListItem>
    </Link>
  )
}

export default CustomListItem;
