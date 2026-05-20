import React from "react";
import './academics.css';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

import {
  Box,
  Typography,
  Paper,
} from "@mui/material";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

const educationData = [
  {
    year: "2026",
    title: "JAVA Fullstack Developer",
    institute: "Fourtune Cloud Technologies, Pune",
  },
  {
    year: "2022 - 2025",
    title: "Bachelor of Computer Applications (BCA)",
    institute: "Sinhgad College of Science, Pune",

    subCourses: [
      {
        duration: "Jan 2024 - Jun 2024",
        name: "MERN Stack Development",
        institute: "Apna College",

      },
      {
        duration: "Aug 2024 - Feb 2025",
        name: "DSA with Java",
        institute: "Apna College",
      },
    ],
  },
  {
    year: "2022",
    title: "Higher Secondary Certificate (HSC)",
    institute: "D.S High School, Bhusawal",
  },
  {
    year: "2021",
    title: "Industrial Training Institute - Machinist",
    institute: "Govt. Industrial Training Institute Bhusawal",
  },
];

function Academics() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: 8,
        bgcolor: "#000000",
      }}
    >
      {/* Main Center Container */}

      <Box
        sx={{
          width: {
            xs: "95%",
            md: "65%",
          },
        }}
      >
        {/* Heading */}

        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mb: 6,
          }}
        >
          <SchoolRoundedIcon
            sx={{
              color: "#f4c20d",
              fontSize: 32,
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#ffffffff",
            }}
          >
            Academics
          </Typography>
        </Box> */}
        <div style={{ padding: "40px 0", textAlign: "center" }}>
          <h1
            style={{
              color: "#fff",
              fontSize: "3.5rem",
              fontWeight: 700,
              textShadow: "0 0 10px rgba(244, 194, 13, 0.6)",
              marginBottom: "-40px",
            }}
          >
            <SchoolRoundedIcon
              sx={{
                color: "#f4c20d",
                fontSize: 32,
              }}
            />{' '}
            Academics
          </h1>
        </div>

        {/* Timeline */}

        <Timeline position="right">

          {educationData.map((item, index) => (

            <TimelineItem
              key={index}
              sx={{
                "&::before": {
                  display: "none",
                },

                display: "flex",

                flexDirection: {
                  xs: "column",
                  sm: "row",
                },

                alignItems: {
                  xs: "flex-start",
                  sm: "initial",
                },
              }}
            >

              {/* YEAR */}

              <TimelineOppositeContent
                sx={{
                  flex: {
                    sm: 0.15,
                  },

                  fontSize: "0.8rem",
                  color: "#ffe600ff",
                  fontWeight: 600,

                  mt: {
                    xs: 0,
                    sm: 1,
                  },

                  mb: {
                    xs: 1,
                    sm: 0,
                  },

                  textAlign: {
                    xs: "left",
                    sm: "right",
                  },

                  minWidth: {
                    xs: "100%",
                    sm: "auto",
                  },
                }}
              >
                ● {item.year}
              </TimelineOppositeContent>

              {/* DOT + LINE */}
              <TimelineSeparator
                sx={{
                  position: "relative",

                  ml: {
                    xs: 1,
                    sm: 0,
                  },
                }}
              >

                {/* MAIN CONTINUOUS LINE */}

                {index !== educationData.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "20px",
                      left: "50%",
                      transform: "translateX(-50%)",

                      width: "3px",

                      height: item.subCourses ? "340px" : "160px",

                      background: "#f4c20d",

                      zIndex: 0,
                    }}
                  />
                )}

                {/* DOT */}

                <TimelineDot
                  sx={{
                    background: "#f4c20d",
                    boxShadow: "none",
                    p: 1,

                    zIndex: 2,
                  }}
                />

              </TimelineSeparator>

              {/* CARD */}

              <TimelineContent
                sx={{
                  py: 0,

                  px: {
                    xs: 2,
                    sm: 3,
                  },

                  width: "100%",
                }}
              >

                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "18px",
                    background: "#f5f5f5",
                    mb: 4,
                    transition: "0.3s ease",

                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {/* MAIN DEGREE */}

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#2164d7ff",
                      fontSize: "1.05rem",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#667085",
                      mt: 1,
                      fontSize: "0.92rem",
                    }}
                  >
                    {item.institute}
                  </Typography>

                  {/* SUB COURSES */}

                  {item.subCourses && (
                    <Box
                      sx={{
                        mt: 3,
                        ml: 2,
                        position: "relative",

                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: "11px",
                          width: "5px",
                          height: "60%",
                          background: "#f4e50dff",
                        },
                      }}
                    >
                      {item.subCourses.map((course, i) => (
                        <Box
                          key={i}
                          sx={{
                            position: "relative",
                            pl: 5,
                            pb: 3,
                          }}
                        >
                          {/* CONNECTOR DOT */}

                          <Box
                            sx={{
                              position: "absolute",
                              left: 0,
                              top: 4,

                              width: 24,
                              height: 24,
                              borderRadius: "50%",

                              background: "#f4c20d",

                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",

                              color: "#000",
                              fontSize: "0.7rem",
                              fontWeight: 700,

                              zIndex: 2,
                            }}
                          >
                            →
                          </Box>

                          {/* HORIZONTAL CONNECTOR */}

                          <Box
                            sx={{
                              position: "absolute",
                              left: 24,
                              top: 15,

                              width: 28,
                              height: "2px",

                              background: "#f4c20d",
                            }}
                          />

                          {/* CONTENT CARD */}

                          <Box
                            sx={{
                              background: "#ffffff",
                              border: "1px solid #ececec",

                              borderRadius: "14px",

                              p: 2,

                              transition: "0.3s ease",

                              "&:hover": {
                                backgroundColor: "#ffedacff",
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#f4c20d",
                                fontWeight: 700,
                                fontSize: "0.82rem",
                                mb: 0.5,
                              }}
                            >
                              {course.duration}
                            </Typography>

                            <Typography
                              sx={{
                                color: "#4f4f4fff",
                                fontWeight: 600,
                                fontSize: "0.95rem",
                              }}
                            >
                              {course.name}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#7a7a7adc",
                                fontWeight: 600,
                                fontSize: "0.95rem",
                              }}
                            >
                              {course.institute}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Paper>

              </TimelineContent>

            </TimelineItem>

          ))}

        </Timeline>
      </Box>
    </Box>
  );
}

export default Academics;