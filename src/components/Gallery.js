import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import { Typography } from "mdbreact";

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover": {
      zIndex: 1,
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15,
    },
    "&:hover $imageMarked": {
      opacity: 0,
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor",
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        "https://media.images.yourquote.in/post/large/0/0/6/524/xrRe5718.jpg",

      width: "40%",
    },
    {
      url:
        "https://www.gardeningknowhow.com/wp-content/uploads/2008/01/bamboo2-400x533.jpg",

      width: "20%",
    },
    {
      url:
        "https://lh3.googleusercontent.com/proxy/aYqgSA1b8aiYrF85snZTwojrfvO2Ux8WT1CgLEoQAZ01cznfQvYyI2GvOevNPN324l0ZHiX7kyB3dZvfLWIR0EYVdT0c742KDzgFH_hqE6wRDcjch3TbF7k",

      width: "40%",
    },
    {
      url:
        "https://media.images.yourquote.in/post/large/0/0/9/728/4dgY6213.jpg",

      width: "38%",
    },
    {
      url:
        "https://firephoenixmartialarts.files.wordpress.com/2015/09/bruce-lee-kung-fu-quotes-24.jpg",

      width: "38%",
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Golden-Bamboo-350w_large.jpg?v=1549675083",

      width: "24%",
    },
    {
      url: "https://www.jdmindcoach.com/wp-content/uploads/2018/01/Bamboo.jpg",

      width: "33%",
    },
    {
      url:
        "https://alltimeshortstories.com/wp-content/uploads/2016/02/The-bamboo-tree-Motivational-Story.jpg",
      width: "33%",
    },
    {
      url:
        "https://assets.entrepreneur.com/content/3x2/2000/20151120074527-bamboo-918484-1920.jpeg?width=700&crop=2:1",

      width: "33%",
    },
  ];

  return (
    <Container className={classes.root} component="section">
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
