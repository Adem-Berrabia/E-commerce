import { ArrowForward } from "@mui/icons-material";
import {
  Container,
  Box,
  Link,
  Stack,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./slider.css";
import IconSection from "./IconSection";
const mySlider = [
  { text: "MEN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
];
export default function Hero() {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{ pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}
      >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      textAlign: "left",
                      position: "absolute",
                      left: "10%",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#222" }}>
                    LIFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                  >
                    {item.text}
                  </Typography>
                  <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography variant="h5" color={"#333"} mr={1}>
                      SALE UP TO
                    </Typography>
                    <Typography variant="h5" color={"#d23f57"}>
                      30% OFF
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                  >
                    Get Free Shipping on orders overs $99.99
                  </Typography>
                  <Button
                    sx={{
                      color: "#fff",
                      px: 5,
                      py: 1,
                      mt: 2,
                      borderRadius: "1px",
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    Shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.5%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\images\banner-17.jpg" alt="" />

            <Stack
              sx={{
                position: "absolute",
                top: " 50% ",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", fontSize: "16px", mt: 1 }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#B23F57" },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\images\banner-16.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: " 50% ",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  fontSize: "16px",
                  mt: 1,
                  lineHeight: "16px",
                }}
              >
                DESKTOPS &
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#B23F57" },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
}
