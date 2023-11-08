import React, { useEffect } from "react";
import "./card.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import RatingProduct from "./../rating/Rating";
import { NavLink } from "react-router-dom";

const ProductCard = ({ data, clicking }) => {
  useEffect(() => console.log(data.id), []);
  return (
    <>
      {clicking ? (
        <NavLink to={`/Product/${data.id}`}>
          <Card sx={{ width: "300px", boxShadow: "2px 2px 35px 4px #c3f9f6" }}>
            <div>
              <CardMedia
                component="img"
                image={data.Image}
                alt="Paella dish"
                draggable="false"
                className="image-after"
                style={{
                  width: "100%",
                  backgroundImage: `url(${data.image})`,
                  backgroundAttachment: "fixed",
                  height: "344px",
                  padding: "10px 10px 0px 10px",
                }}
              />
              <CardContent
                sx={{
                  background: "#49494926",
                  padding: "10px",
                  margin: "0px 10px 10px 10px",
                }}
              >
                <Typography
                  variant="body2"
                  style={{
                    fontSize: "var(--fs_14)",
                    color: "#b1afaf38",
                    margin: "0px 10px 10px 10px",
                    padding: "0",
                    color: "var(--c-first)",
                  }}
                >
                  {data.proDesc}
                </Typography>
              </CardContent>
            </div>
            <div
              className="fs_16 fontApp fw-bold"
              style={{ padding: "0px 10px 10px 10px" }}
            >
              <RatingProduct rating={data.rating} />
              <p>
                the price :<span style={{ color: "green" }}> {data.price}</span>{" "}
              </p>
            </div>
          </Card>
        </NavLink>
      ) : (
        <Card sx={{ width: "300px", boxShadow: "2px 2px 35px 4px #c3f9f6" }}>
          <div>
            <CardMedia
              component="img"
              image={data.Image}
              alt="Paella dish"
              draggable="false"
              className="image-after"
              style={{
                width: "100%",
                backgroundImage: `url(${data.image})`,
                backgroundAttachment: "fixed",
                height: "344px",
                padding: "10px 10px 0px 10px",
              }}
            />
            <CardContent
              sx={{
                background: "#49494926",
                padding: "10px",
                margin: "0px 10px 10px 10px",
              }}
            >
              <Typography
                variant="body2"
                style={{
                  fontSize: "var(--fs_14)",
                  color: "#b1afaf38",
                  margin: "0px 10px 10px 10px",
                  padding: "0",
                  color: "var(--c-first)",
                }}
              >
                {data.proDesc}
              </Typography>
            </CardContent>
          </div>
          <div
            className="fs_16 fontApp fw-bold"
            style={{ padding: "0px 10px 10px 10px" }}
          >
            <RatingProduct rating={data.rating} />
            <p>
              the price :<span style={{ color: "green" }}> {data.price}</span>{" "}
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

export default ProductCard;
