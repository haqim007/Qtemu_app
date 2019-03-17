import React,{ Component } from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  beforeLastButton: {
    // marginLeft: '60%',
    marginRight: '50%',
  }
}
class MyButton extends Component{
  render(){
    const { variant, warna, action, valueForAction, title, namaClass } = this.props
    return(
      <Button
        variant={variant}
        color={warna || 'secondary'} 
        onClick={action}
        className={namaClass}
      >
      {title}
      </Button>
    )
  }
}

export default withStyles(styles)(MyButton)