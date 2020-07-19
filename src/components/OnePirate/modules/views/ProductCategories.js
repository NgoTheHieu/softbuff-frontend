import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png',
      title: 'Node',
      width: '40%',
    },
    {
      url:
        'data:image/png;base64,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',
      title: 'React',
      width: '20%',
    },
    {
      url:
        'https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg',
      title: 'CSS',
      width: '40%',
    },
    {
      url:
        'data:image/png;base64,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',
      title: 'HTML',
      width: '38%',
    },
    {
      url:
        'https://techtalk.vn/wp-content/uploads/2018/11/kotlin-1.jpg',
      title: 'Kotlin',
      width: '38%',
    },
    {
      url:
        'data:image/png;base64,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',
      title: 'Github',
      width: '24%',
    },
    {
      url:
        'https://i.ytimg.com/vi/owxGCT1_110/maxresdefault.jpg',
      title: 'CoderSchool',
      width: '40%',
    },
    {
      url:
        'data:image/png;base64,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'
      ,
      title: 'Google',
      width: '20%',
    },
    {
      url:
        'https://i.pinimg.com/originals/32/b2/6f/32b26f46df2fad219d0354f6864c2d74.jpg',
      title: 'Boxing',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" color="success" align="center" component="h2">
        Licensed by
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
