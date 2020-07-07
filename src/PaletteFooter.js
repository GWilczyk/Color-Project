import React from 'react';
import paletteFooterStyles from './styles/PaletteFooterStyles';
import { withStyles } from '@material-ui/styles';

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.footer}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(paletteFooterStyles)(PaletteFooter);
