import {
  Box,
  CircularProgress,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmyData(newValue);
    }
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const AllProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";
  const [myData, setmyData] = useState(AllProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  const [clickedProduct, setclickedProduct] = useState({});

  if (isLoading) {
    return (
      <Box sx={{ py: 9, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Container sx={{ py: 9, textAlign: "center" }}>
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>
        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={3}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Box>
            <Typography variant="h6">Selected products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233,69, 96, 0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton
              sx={{
                collor: theme.palette.text.primary,
              }}
              className="myBtn"
              value={AllProductsAPI}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{ collor: theme.palette.text.primary, mx: "16px !important" }}
              className="myBtn"
              value={menCategoryAPI}
              aria-label="centered"
            >
              MEN Category
            </ToggleButton>
            <ToggleButton
              className="myBtn"
              value={womenCategoryAPI}
              aria-label="right aligned"
            >
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <AnimatePresence>
            {data.data.map((item) => {
              return (
                <Card
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 50 }}
                  key={item.id}
                  sx={{
                    maxWidth: 333,
                    mt: 6,
                    ":hover .MuiCardMedia-root": {
                      transition: "0.35s",
                      scale: " 1.1",
                      rotate: "1deg",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 277 }}
                    // image={
                    //   item.productImg && item.productImg[1]
                    //     ? `http://localhost:1337${item.productImg[0].url}`
                    //     : "placeholder-image-url"
                    // }

                    // @ts-ignore
                    image={`${item.productImg[0].url}`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography variant="h6" component="div" gutterBottom>
                        {item.productTitle}
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        ${item.productPrice}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {item.productDescription}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      onClick={() => {
                        handleClickOpen();
                        setclickedProduct(item);
                      }}
                      sx={{ textTransform: "capitalize" }}
                      size="large"
                    >
                      <AddShoppingCartOutlined
                        fontSize="small"
                        sx={{ mr: 1 }}
                      />
                      Add to cart
                    </Button>
                    <Rating
                      name="read-only"
                      value={item.productRating}
                      precision={0.5}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}
          </AnimatePresence>
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <ProductDetails clickedProduct={clickedProduct} />
        </Dialog>
      </Container>
    );
  }
}
